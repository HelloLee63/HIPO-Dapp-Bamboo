import Web3 from 'web3';
import EventEmitter from 'wolfy87-eventemitter';
import { WEB3_ERROR_VALUE } from './Web3Provider';
import { uniqueId, debounce } from 'lodash'
import { getGasValue } from './helpers/utils';

export class AbiTuple {
  items = [];

  constructor(items) {
    this.items = items;
  }
}

export class AbiTupleArray {
  items = [];

  constructor(items) {
    this.items = items;
  }
}

export function createAbiItem(
  name,
  inputs = [],
  outputs = [],
) {
  return {
    name,
    type: 'function',
    stateMutability: 'view',
    inputs: inputs.map(type => {
      if (type instanceof AbiTuple) {
        return {
          name: '',
          type: 'tuple',
          components: type.items.map(t => ({ name: '', type: t })),
        };
      } else if (type instanceof AbiTupleArray) {
        return {
          name: '',
          type: 'tuple[]',
          components: type.items.map(t => ({ name: '', type: t })),
        };
      }

      return { name: '', type };
    }),
    outputs: outputs.map(type => {
      if (type instanceof AbiTuple) {
        return {
          name: '',
          type: 'tuple',
          components: type.items.map(t => ({ name: '', type: t })),
        };
      } else if (type instanceof AbiTupleArray) {
        return {
          name: '',
          type: 'tuple[]',
          components: type.items.map(t => ({ name: '', type: t })),
        };
      }

      return { name: '', type };
    }),
  };
}

class BatchRequestManager {
  static requests = new Map();

  static addRequest(source, request) {
    const { currentProvider } = source;

    if (!currentProvider) {
      return;
    }

    const { requests } = this;

    let state = requests.get(currentProvider);

    if (!state) {
      state = {
        busy: false,
        collected: [],
      };
      requests.set(currentProvider, state);
    }

    state.collected.push(request);

    this.run();
  }

  static run = debounce(() => {
    const { requests } = BatchRequestManager;

    requests.forEach(async (state, provider) => {
      if (state.busy) {
        return;
      }

      const web3 = new Web3(provider);

      let extractCount = 0;
      let delay = 0;

      // if (provider === PolygonHttpsWeb3Provider) {
      //   extractCount = 20;
      //   delay = 250;
      // }

      state.busy = true;

      while (state.collected.length > 0) {
        const toExtract = extractCount > 0 ? extractCount : state.collected.length;
        const items = state.collected.splice(0, toExtract);

        const batch = new web3.BatchRequest();
        items.forEach(method => batch.add(method));
        await batch.execute();

        if (delay > 0) {
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }

      state.busy = false;
    });
  }, 250);
}

class Web3Contract {
  static UPDATE_ACCOUNT = 'update:account';
  static UPDATE_DATA = 'update:data';

  _events
  _abi
  _callContract
  _sendContract
  address
  name
  account

  constructor(abi, address, name) {
    if (!address) {
      throw new Error(`Invalid contract address (${name})`);
    }

    this._events = new EventEmitter();
    this._abi = abi;
    this.address = address;
    this.name = name ?? address;

    const web3 = new Web3();
    this._callContract = new web3.eth.Contract(abi, address);
    this._sendContract = new web3.eth.Contract(abi, address);
  }

  /// GETTERS
  get writeFunctions() {
    return this._abi.filter(r => r.type === 'function' && !r.constant);
  }

  get callProvider() {
    return this._callContract.currentProvider;
  }

  get provider() {
    return this._sendContract.currentProvider;
  }

  /// SETTERS
  setCallProvider(provider) {
    if (this._callContract.currentProvider !== provider) {
      this._callContract.setProvider(provider);
    }
  }

  setProvider(provider) {
    if (this._sendContract.currentProvider !== provider) {
      this._sendContract.setProvider(provider);
    }
  }

  setAccount(account) {
    if (this.account !== account) {
      this.account = account;
      this.emit(Web3Contract.UPDATE_ACCOUNT, account);
    }
  }

  /// ASSERTION METHODS
  assertAccount() {
    if (!this.account) {
      throw new Error('This operation requires wallet to be connected!');
    }
  }

  /// REQUEST METHODS
  batch(methods) {
    if (methods.length === 0) {
      return Promise.reject(new Error(`Empty list of methods for batch.`));
    }

    const promises = methods.map((batchMethod) => {
      return new Promise(resolve => {
        this.call(batchMethod.method, batchMethod.methodArgs ?? [], batchMethod.callArgs ?? {})
          .then(value => resolve((batchMethod.transform ?? (x => x))(value)))
          .catch(err => resolve(batchMethod.onError?.(err) ?? undefined));
      });
    });

    return Promise.all(promises);
  }

  call(method, methodArgs = [], callArgs = {}) {
    const contractMethod = this._callContract.methods[method];

    if (!contractMethod) {
      return Promise.reject(new Error(`Unknown method "${method}". (Ref. ${this.name}.${method})`));
    }

    if (!this._callContract.currentProvider) {
      return Promise.reject(new Error(`Contract call failure. Missing call provider. (Ref. ${this.name}.${method})`));
    }

    return new Promise((resolve, reject) => {
      const req = contractMethod(...methodArgs).call.request(callArgs, (err, value) => {
        if (err) {
          console.error(`Contract(${this.address}).${method}.call`, err);
          return reject(err);
        }

        if (+value === WEB3_ERROR_VALUE) {
          return Promise.reject(new Error(`Contract call failure. (Ref. ${this.name}.${method})`));
        }

        resolve(value);
      });

      BatchRequestManager.addRequest(this._callContract, req);
    });
  }

  send(method, methodArgs = [], sendArgs = {}, gasPrice) {
    this.assertAccount();

    const contractMethod = this._sendContract.methods[method];

    if (!contractMethod) {
      return Promise.reject(new Error(`Unknown method "${method}". (Ref. ${this.name}.${method})`));
    }

    if (!this._sendContract.currentProvider) {
      return Promise.reject(new Error(`Contract send failure. Missing send provider. (Ref. ${this.name}.${method})`));
    }

    const _sendArgs = {
      from: this.account,
      gasPrice: gasPrice !== undefined ? getGasValue(gasPrice) : undefined,
      ...sendArgs,
    };

    const meta = {
      id: uniqueId(`${method}:`),
      sender: this,
      method,
      methodArgs,
      sendArgs: _sendArgs,
    };

    return contractMethod(...methodArgs)
      .send(_sendArgs, async (err, txHash) => {
        if (err) {
          return;
        }

        this.emit('tx:hash', txHash, {
          ...meta,
          state: 'progress',
          txHash,
        });
      })
      .then((result) => {
        this.emit('tx:success', result, {
          ...meta,
          state: 'success',
          result,
        });
        return result;
      })
      .catch((error) => {
        (this._sendContract.currentProvider)?.emit('send::error', error);

        this.emit('tx:fail', error, {
          ...meta,
          state: 'fail',
          error,
        });
        return Promise.reject(error);
      });
  }

  /// EVENT METHODS
  on(event, listener) {
    return this._events.on(event, listener);
  }

  once(event, listener) {
    return this._events.once(event, listener);
  }

  off(event, listener) {
    return this._events.off(event, listener);
  }

  emit(event, ...args) {
    return this._events.emit(event, ...args);
  }

  onUpdateAccount(listener) {
    return this.on('update:account', listener);
  }

  onUpdateData(listener) {
    return this.on('update:data', listener);
  }
}

export default Web3Contract;