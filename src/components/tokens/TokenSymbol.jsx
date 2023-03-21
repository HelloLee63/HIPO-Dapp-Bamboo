import { toAbsoluteUrl } from "../../helpers/path"

const TokenSymbol = ({iconUrl, className}) => {
  return (
    <div className={`inline-flex ${className}`}>
      <img src={toAbsoluteUrl(iconUrl)} alt="" />
    </div>
  )
}

export default TokenSymbol