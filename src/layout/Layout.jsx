import { Outlet } from 'react-router-dom'
import Nav from './components/nav/Nav'

const Layout = ({children}) => {

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="">
        <div className='h-top rounded-br-half rounded-bl-half bg-background-top'>
          <Nav />              
          <main>
            <div className='pt-44'>
              <Outlet>
                {children}
              </Outlet>
            </div>
          </main>
        </div> 
      </div>
    </>
  )
}

export default Layout