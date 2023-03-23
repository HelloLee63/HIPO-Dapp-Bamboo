import clsx from "clsx"
import TokenSymbol from "../tokens/TokenSymbol"

const Card = ({ children, className, tokenIcon, tokenSymbol}) => {
  return (
    <div className={clsx(className, "card bg-white rounded-3xl border-1x border-border-color-card")}>
      <div className="pt-6 flex-col">
        <div className="px-2">
          <TokenSymbol className='h-30' iconUrl={tokenIcon}/>
        </div>
        <div className="text-2xl font-bold px-8 text-token-font font-Montserrat">
          {tokenSymbol}
        </div>
        <div className="px-8">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Card