import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../layout/Layout"
import Borrower from "../moudles/borrower/Borrower"
import Dashboard from "../moudles/dashboard/Dashboard"

const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Layout />}>
          <Route path='' element={ <Dashboard /> } />
          <Route path='/dashboard' element={ <Dashboard /> } />
          <Route path='/borrower' element={ <Borrower /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouters