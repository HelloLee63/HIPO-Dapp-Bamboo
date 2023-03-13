import { useEffect, useState } from "react"
import { useChain } from "../../../chain/ChainProvider"
import Listbox from "../../../components/listbox/Listbox"

const ChainMenu = () => {

  const { activeChain, chains, changeChain } = useChain()
  const [selected, setSelected ] = useState(activeChain);

  useEffect(() => {
    if(selected.meta.chainId === activeChain.meta.chainId) {
      return
    }
    changeChain(selected.meta.chainId);
  }, [selected, activeChain, changeChain]);

  return (
    <Listbox items={chains} selected={ selected } setSelected={setSelected} />
  )
}

export default ChainMenu