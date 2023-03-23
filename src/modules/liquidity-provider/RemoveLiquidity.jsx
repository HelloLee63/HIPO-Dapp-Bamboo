import Banner from '../../components/banner/Banner'
import RemoveTable from './components/remove-table/RemoveTable'

const RemoveLiquidity = () => {
  return (
    <>
      <Banner 
        title='Remove Liquidity'
      />
      <div className="pt-44 mx-auto max-w-7xl">
        <RemoveTable />
      </div>
    </>
  )
}

export default RemoveLiquidity