import React from 'react'
import { shortenAddr } from '../../helpers/format-address'


const Borrower = () => {
  return (
    <div>
      Borrower
      <div>
        {shortenAddr('0x893cbC1377DE800e4696C70ED68c2FE00AcA665f')}
      </div>
    </div>
    
  )
}

export default Borrower