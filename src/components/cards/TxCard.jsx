import React from 'react'
import TxBtn from '../../web3/components/TxBtn'

const TxCard = ({ children }) => {
  return (
    <div className='rounded-3xl card-tx px-8 pt-8'>
      { children }
      <div className='grid grid-cols-2 gap-4 pb-8 pt-14'>
        <TxBtn 
          text='Add Collateral'
          className="bg-button-tx-color text-white tx-button-add-collateral"
        />
      </div>
    </div>
  )
}

export default TxCard