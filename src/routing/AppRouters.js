import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../layout/Layout"
import Borrow from "../modules/borrower/Borrow"
import Pledge from "../modules/borrower/Pledge"
import Repay from "../modules/borrower/Repay"
import Dashboard from "../modules/dashboard/Dashboard"
import Lend from "../modules/lender/Lend"
import Withdraw from "../modules/lender/Withdraw"
import AddLiquidity from "../modules/liquidity-provider/AddLiquidity"
import RemoveLiquidity from "../modules/liquidity-provider/RemoveLiquidity"


const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Layout />}>
          <Route path='' element={ <Dashboard /> } />
          <Route path='/dashboard' element={ <Dashboard /> } />
          <Route path='/borrower/pledge' element={ <Pledge /> } />
          <Route path='/borrower/borrow' element={ <Borrow /> } />
          <Route path='/borrower/repay' element={ <Repay /> } />
          <Route path='/lender/lend' element={ <Lend /> } />
          <Route path='/lender/withdraw' element={ <Withdraw /> } />
          <Route path='/provider/add' element={ <AddLiquidity /> } />
          <Route path='/provider/remove' element={ <RemoveLiquidity /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouters