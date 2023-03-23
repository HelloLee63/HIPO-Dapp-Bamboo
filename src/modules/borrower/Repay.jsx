import Banner from "./components/banner/Banner"
import RepayTable from "./components/repay-table/RepayTable"

const Repay = () => {
  return (
    <>
      <Banner 
        title='Repay loan'
      />
      <div className="pt-44 mx-auto max-w-7xl">
        <RepayTable />
      </div>
    </>
  )
}

export default Repay