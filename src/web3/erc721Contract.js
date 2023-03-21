import { ethers } from 'ethers';
import Web3Contract, { createAbiItem } from './web3Contract';

const ERC721ABI = [
  createAbiItem('name', [], ['string']),
  createAbiItem('symbol', [], ['string']),
  createAbiItem('balanceOf', ['address'], ['uint256']),
  createAbiItem('ownerOf', ['uint256'], ['address']),
  createAbiItem('safeTransferFrom', ['address', 'address', 'uint256'], ['']),
  createAbiItem('transferFrom', ['address', 'address', 'uint256'], ['']),
  createAbiItem('approve', ['address', 'uint256'], ['']),
  createAbiItem('setApprovalForAll', ['address', 'bool'], ['']),
  createAbiItem('getApproved', ['uint256'], ['address']),
  createAbiItem('isApprovedForAll', ['address', 'address'], ['bool']),
];

export default class Erc721Contract extends Web3Contract {

  symbol

  name

  constructor(abi, address) {
    super([...ERC721ABI, ...abi], address, '');

    this.on(Web3Contract.UPDATE_ACCOUNT, () => {
      this.emit(Web3Contract.UPDATE_DATA);
    });
  }

  async loadCommon() {
    const [name, symbol] = await this.batch([
      { method: 'name' },
      { method: 'symbol' },
    ]);

    this.name = name;
    this.symbol = symbol;
    this.emit(Web3Contract.UPDATE_DATA);
  }

  async loadBalance(ownerAddress) {
    const balance = await this.call('balanceOf', ownerAddress);
    return balance;
  }

  async loadOwnerOf(tokenId) {
    const owner = await this.call('ownerOf', tokenId);
    return owner;
  }

  async safeTransferFrom(fromAddress, toAddress, tokenId) {
    await this.send('safeTransferFrom', [fromAddress, toAddress, tokenId]);
  }

  async transferFrom(fromAddress, toAddress, tokenId) {
    await this.send('transferFrom', [fromAddress, toAddress, tokenId]);
  }

  async approve(toAddress, tokenId) {
    await this.send('approve', [toAddress, tokenId]);
  }

  async setApprovalForAll(operatorAddress, approved) {
    await this.send('setApprovalForAll', [operatorAddress, approved]);
  }

  async getApproved(tokenId) {
    const approvedAddress = await this.call('getApproved', tokenId);
    return approvedAddress;
  }

  async isApprovedForAll(ownerAddress, operatorAddress) {
    const isApproved = await this.call('isApprovedForAll', [ownerAddress, operatorAddress]);
    return isApproved;
  }
}
