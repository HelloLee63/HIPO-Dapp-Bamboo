import { ethers } from 'ethers';
import BigNumber from 'bignumber.js';
import Web3Contract, { createAbiItem } from '../web3Contract';

const ERC20ABI = [
  createAbiItem('name', [], ['string']),
  createAbiItem('symbol', [], ['string']),
  createAbiItem('decimals', [], ['uint8']),
  createAbiItem('totalSupply', [], ['uint256']),
  createAbiItem('balanceOf', ['address'], ['uint256']),
  createAbiItem('allowance', ['address', 'address'], ['uint256']),
  createAbiItem('approve', ['address', 'uint256'], ['bool']),
];

export default class Erc20Contract extends Web3Contract {

  symbol

  decimals

  totalSupply

  balances

  allowances

  constructor(abi, address) {
    super([...ERC20ABI, ...abi], address, '');

    this.balances = new Map();
    this.allowances = new Map();

    this.on(Web3Contract.UPDATE_ACCOUNT, () => {
      this.balances.clear();
      this.allowances.clear();
      this.emit(Web3Contract.UPDATE_DATA);
    });
  }

  get balance() {
    return this.getBalanceOf(this.account);
  }

  getBalanceOf(address = this.account) {
    return address ? this.balances.get(address) : undefined;
  }

  getAllowanceOf(spenderAddress) {
    return spenderAddress ? this.allowances.get(spenderAddress) : undefined;
  }

  isAllowedOf(spenderAddress) {
    return this.getAllowanceOf(spenderAddress)?.gt(BigNumber(0));
  }

  async loadCommon() {
    const [name, symbol, decimals, totalSupply] = await this.batch([
      { method: 'name' },
      { method: 'symbol' },
      { method: 'decimals' },
      { method: 'totalSupply' },
    ]);

    this.name = name;
    this.symbol = symbol;
    this.decimals = Number(decimals);
    this.totalSupply = new BigNumber(totalSupply);
    this.emit(Web3Contract.UPDATE_DATA);
  }

  async loadBalance(address = this.account) {
    if (!address) {
      
      return Promise.reject(new Error('Invalid owner address!'));
    }
 
    const balance = await this.call('balanceOf', [address]);
    const value = new BigNumber(balance);

    if (value) {
      this.balances.set(address, value);
      this.emit(Web3Contract.UPDATE_DATA);
    }
  }

  async loadAllowance(spenderAddress) {
    const address = this.account;

    if (!address) {
      return Promise.reject(new Error('Invalid owner address!'));
    }

    const allowance = await this.call('allowance', [address, spenderAddress]);
    
    const value = new BigNumber(allowance);
  
    if (value) {
      this.allowances.set(spenderAddress, value);
      this.emit(Web3Contract.UPDATE_DATA);
    } 
  }

  async approve(spenderAddress, enable) {
    if (!spenderAddress) {
      return Promise.reject(new Error('Invalid spender address!'));
    }

    const value = enable ? ethers.constants.MaxUint256 : ethers.constants.Zero

    await this.send('approve', [spenderAddress, value]);
    await this.loadAllowance(spenderAddress).catch(() => undefined);
  }
}