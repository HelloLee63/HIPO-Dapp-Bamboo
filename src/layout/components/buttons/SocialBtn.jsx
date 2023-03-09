import { toAbsoluteUrl } from "../../../helpers/path"

const SocialBtn = () => {
  return (
    <button type='button' className="inline-flex items-center rounded-xl bg-button-blue px-2 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
      <img className="h-8 w-8" src={toAbsoluteUrl("media/social/Twitter.svg")} alt="" />
    </button>
  )
}

export default SocialBtn
