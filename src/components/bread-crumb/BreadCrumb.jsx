import React from 'react'

const BreadCrumb = () => {
  return (    
    <nav className="flex items-center" aria-label="Breadcrumb">
      <button type='button' className="group inline-flex justify-center items-center h-12 w-12 rounded-xl bg-button-blue notification-btn">      
        <svg width="19" height="18" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M19 9.00021C19 9.77105 18.3751 10.3959 17.6043 10.3959L2.39628 10.3959C1.62544 10.3959 1.00054 9.77105 1.00054 9.00021C1.00054 8.22938 1.62544 7.60449 2.39628 7.60449L17.6043 7.60449C18.3751 7.60449 19 8.22938 19 9.00021Z"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M10.3882 1.03981C10.9321 1.58603 10.9302 2.46975 10.384 3.01365L4.37252 8.9995L10.384 14.9854C10.9302 15.5293 10.9321 16.413 10.3882 16.9592C9.84431 17.5054 8.96058 17.5073 8.41435 16.9634L1.4096 9.98852C1.14656 9.72661 0.998693 9.3707 0.998693 8.9995C0.998693 8.6283 1.14656 8.27239 1.4096 8.01048L8.41435 1.0356C8.96058 0.491703 9.84431 0.493585 10.3882 1.03981Z"/>
        </svg>
      </button>
      <div className='flex-col pl-3'>
        <span className='block text-nav-menu font-bold text-2xl font-Inter'>Borrow</span>
        <ol className="inline-flex items-center">
          <li className="inline-flex items-center">
            <a href="#" className="text-sm font-medium font-Poppins text-sub-gray">
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg aria-hidden="true" className="w-4 h-4 text-gray-400" fill="#8A97A6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              <a href="#" className="text-sm font-medium font-Poppins text-sub-gray">Projects</a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg aria-hidden="true" className="w-4 h-4 text-gray-400" fill="#8A97A6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              <span className="text-sm font-medium font-Poppins text-sub-gray">Flowbite</span>
            </div>
          </li>
        </ol>
      </div>
      
    </nav>  
  )
}

export default BreadCrumb