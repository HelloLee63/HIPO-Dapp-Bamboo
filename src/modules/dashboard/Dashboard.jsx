import Banner from "../../layout/components/banner/Banner"
import DashboardTable from "./components/dashboard-table/DashboardTable"

const Dashboard = () => {
  return (
    <> 
      <Banner />
      <div className="pt-8 mx-auto max-w-7xl">
        <DashboardTable />
      </div>
    </>
  )
}

export default Dashboard