import SocialBtn from '../buttons/SocialBtn'
import ChainMenu from './ChainMenu'
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
        chain dropdown
      */}
      <ChainMenu />

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