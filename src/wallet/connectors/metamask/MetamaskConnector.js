import { InjectedConnector } from "@web3-react/injected-connector";

export class MetamaskConnector extends InjectedConnector {
  async addChain(...infos) {
    return this.getProvider().then((provider) => {
      return provider.request({
        method: 'wallet_addEthereumChain',
        params: infos,
      })
    })
  }

  async switchChain(info) {
    return this.getProvider().then((provider) => {
      return provider.request({
        method: 'wallet_switchEthereumChain',
        params: [info],
      });
    });
  }

  async addToken(info) {
    return this.getProvider().then((provider) => {
      return provider.request({
        method: 'wallet_watchAsset',
        params: info,
      });
    });
  }

  async getChianId() {
    return this.getProvider().then((provider) => {
      return provider.request({
        method: 'eth_chainId'
      });
    });
  }
}

function handleErrors(error) {
  switch (error?.code) {
    case -32602:
      // notification.error({
      //   message: error?.message,
      // })
      alert(error?.message)
      break
    default:
      break
  }     
}

const MetamaskWalletConfig = {
  id: 'metamask',
  logo: [],
  name: 'Metamask',
  factory (chain) {
    return new MetamaskConnector({
      supportedChainIds: [chain.meta.chainId],
    })
  },

  onConnect(connector) {
    connector?.getProvider().then(provider => {
      provider.addListener('send::error', handleErrors)
    })
  },

  onDisconnect(connector) {
    connector?.getProvider().then(provider => {
      provider.removeListener('send::error', handleErrors)
    })
  },

  onError(error) {
    switch (error?.code) {
      case -32002:
        return new Error('MetaMask is already processing. Please verify MetaMask extension.')
      default:
        break
    }

    return undefined
  },
}

export default MetamaskWalletConfig