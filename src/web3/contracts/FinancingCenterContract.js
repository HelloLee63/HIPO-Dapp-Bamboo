import Web3Contract from '../web3Contract'
import { financingCenterAbi } from './FinancingCenterContractAbi'

export default class FinancingCenterContract extends Web3Contract {
  constructor(address) {
    super(financingCenterAbi, address)
  }

  async supply(
    slotId,
    amount,
    tickLower,
    tickUpper,
    recipient = this.account,
    deadline = Math.floor(Date.now() / 1000) + (60 * 10)
  ) {
    if (!this.account) {
      return Promise.reject('The account is unvalid.')
    }
    return await this.send('supply', 
      [
        slotId,
        amount,
        tickLower,
        tickUpper,
        recipient,
        deadline
      ],{
        from: this.account
      }
    )
  }
}