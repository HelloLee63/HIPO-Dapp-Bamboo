import SocialBtn from '../buttons/SocialBtn'
import NetworkMenu from './NetworkMenu'
import WalletBtn from './WalletBtn'
import NotificationBtn from './NotificationBtn'

const ToolBar = () => {

  return (
    <div className="ml-4 flex items-center gap-4 md:ml-6">
      {/*

        social: Twitter

      */}
      <SocialBtn />
      {/*

        network dropdown

      */}
      <NetworkMenu />
      {/*

        notification button

      */}
      <NotificationBtn />
      {/*

        wallet address dropdown

      */}
      <WalletBtn />
    </div>
  )
}

export default ToolBar