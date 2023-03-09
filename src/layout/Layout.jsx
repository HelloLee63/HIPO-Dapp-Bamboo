import Banner from './components/banner/Banner'
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
      <div className="min-h-full">
        <div className='h-top rounded-br-half rounded-bl-half bg-background-top'>
          {/* <div className='sticky top-0 bg-white'> */}
            <Nav />
          {/* </div>           */}
                    
          <div className='pt-4'>
            <Banner />
          </div>                                 
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div> 
      </div>
    </>
  )
}

export default Layout