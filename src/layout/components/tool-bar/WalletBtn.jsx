import { useWallet } from "../../../wallet/WalletProvider"

const WalletBtn = () => {

  const { connecting, account, showWalletsModal } = useWallet()
  function handleConnect() {
    if (connecting || account) {
      return
    }
    showWalletsModal()
  }

  return (
    <>
      <button 
        type='button' 
        className="inline-flex justify-center items-center rounded-10px gap-x-2 text-base font-semibold text-white wallet-btn h-12 w-48"
        onClick={handleConnect}
      >
        <span>Connect Wallet</span>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 8L11.5038 9.3359C12.6328 10.0885 13.1972 10.4648 13.1972 11C13.1972 11.5352 12.6328 11.9115 11.5038 12.6641L9.5 14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <rect x="1" y="1" width="20" height="20" rx="4" stroke="white" strokeWidth="1.5"/>
        </svg>

      </button>
    </>
    
  )
}

export default WalletBtn