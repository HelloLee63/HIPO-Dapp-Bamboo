import WithdrawTable from './components/withdraw-table/WithdrawTable'
import Banner from '../../components/banner/Banner'

const Withdraw = () => {
  return (
    <>
      <Banner 
        title='Withdraw loan'
      />
      <div className="pt-44 mx-auto max-w-7xl">
        <WithdrawTable />
      </div>
    </>
  )
}

export default Withdraw