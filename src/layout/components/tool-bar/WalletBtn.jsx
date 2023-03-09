import { toAbsoluteUrl } from "../../../helpers/path"

const WalletBtn = () => {
  return (
    <button type='button' className="inline-flex justify-center items-center rounded-10px gap-x-2 text-base font-semibold text-white wallet-btn h-12 w-48">
      <span>Connect Wallet</span>
      <img className="h-5 w-5" src={toAbsoluteUrl("media/icons/arrow.svg")} alt="" />
    </button>
  )
}

export default WalletBtn