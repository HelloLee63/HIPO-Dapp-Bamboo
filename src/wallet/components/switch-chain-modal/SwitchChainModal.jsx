import React from 'react'
import { useNetwork } from '../../../network/NetworkProvider'
import { useWallet, WalletConnectors } from '../../WalletProvider'

const SwitchChainModal = () => {

  const { activeNetwork } = useNetwork();
  const wallet = useWallet()

  async function handleSwitchChain() {

    const connector = WalletConnectors[0].factory(activeNetwork);

    try {

      wallet.showSwichChainModal();
      await connector.switchChain({ chainId: activeNetwork.metamaskChain.chainId }); 

    } catch (err) {
      
      if(err.code === 4902) {
        
        await connector.addChain({
          chainId: activeNetwork.metamaskChain.chainId,
          chainName: activeNetwork.metamaskChain.chainName,
          rpcUrls: activeNetwork.metamaskChain.rpcUrls
        })
      }
    }
  }

  return (
    <div>
      <p>Please Switch Chain to {activeNetwork.id.toString()}</p>
      <button onClick={handleSwitchChain} >Switch Chain</button>
    </div>
  )
}

export default SwitchChainModal