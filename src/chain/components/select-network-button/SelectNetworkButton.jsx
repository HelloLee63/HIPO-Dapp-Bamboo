import React, { useEffect, useState } from 'react'
import Menu from '../../../components/menu/Menu'
import { useNetwork } from '../../NetworkProvider'

const SelectNetworkButton = () => {

  const { activeNetwork, networks, changeNetwork } = useNetwork();
  const [selected, setSelected ] = useState(activeNetwork);

  useEffect(() => {

    if(selected.meta.chainId === activeNetwork.meta.chainId) {
      return
    }

    changeNetwork(selected.meta.chainId);

  }, [selected, activeNetwork, changeNetwork]);
  
  return (
    <>
      <Menu items={ networks } selected={selected} setSelected={setSelected} />
    </>
  )
}

export default SelectNetworkButton