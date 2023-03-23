import Banner from './components/banner/Banner'
import PledgeTab from './components/pledge-tab/PledgeTab'
import 'react-modern-drawer/dist/index.css'

const Pledge = () => {
  console.log('pledge module loaded');
  return (
    <div>
      <Banner 
        title = 'Manage collaterals'
      />
      <div className='mx-auto max-w-7xl pt-44'>
        <PledgeTab />
      </div>
    </div>
  )
}

export default Pledge