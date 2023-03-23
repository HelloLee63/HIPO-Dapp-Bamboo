import Dialog from "../../../components/dialog/Dialog";
import { useWallet, WalletConnectors } from "../../WalletProvider"

const SelectWalletModal = () => {

  const wallet = useWallet();

  /* 
    Handler of wallet connection
  */

  function handleConnectorSelect(walletConfig) {
    
    if(wallet.isActive) {
      return;
    }
    
    wallet.connect(walletConfig).catch(Error); 
  }

  return (
    <Dialog
      dialogTitle = "Select Wallet"
      cancelBtnText = "Cancel"
      closeModal = {wallet.closeSelectWalletModal}
    >
      <span>Please select the wallet you like</span>
      { WalletConnectors.map(
        (config) => 
          <button key={config.name} onClick={() => handleConnectorSelect(config)}>
            {config.name}
          </button>
      )}
    </Dialog>
  )
}

export default SelectWalletModal