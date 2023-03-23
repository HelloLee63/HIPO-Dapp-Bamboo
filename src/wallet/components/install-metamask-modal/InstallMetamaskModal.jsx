import Dialog from "../../../components/dialog/Dialog"
import { useWallet } from "../../WalletProvider";

const InstallMetamaskModal = () => {
  
  const METAMASK_CHROME_EXT_URL = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn';
  const wallet = useWallet()

  return (
    <Dialog 
      dialogTitle="Install Metamask" 
      actionBtnText="Go to install" 
      cancelBtnText='Cancel' 
      link={METAMASK_CHROME_EXT_URL}
      closeModal = {wallet.closeInstallWalletModal}
    >
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          You need to have{' '}
          <span>
            MetaMask
          </span>
          {' '}installed to continue.
        </p>
      </div>
    </Dialog>
  )
}

export default InstallMetamaskModal