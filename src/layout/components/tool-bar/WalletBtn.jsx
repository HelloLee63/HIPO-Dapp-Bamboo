import { useState } from "react"
import Dialog from "../../../components/dialog/Dialog"
import { toAbsoluteUrl } from "../../../helpers/path"

const WalletBtn = () => {

  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>
      <button 
        type='button' 
        className="inline-flex justify-center items-center rounded-10px gap-x-2 text-base font-semibold text-white wallet-btn h-12 w-48"
        onClick={openModal}
      >
        <span>Connect Wallet</span>
        <img className="h-5 w-5" src={toAbsoluteUrl("media/icons/arrow.svg")} alt="" />
      </button>
      <Dialog isOpen={isOpen} closeModal={closeModal} />
    </>
    
  )
}

export default WalletBtn