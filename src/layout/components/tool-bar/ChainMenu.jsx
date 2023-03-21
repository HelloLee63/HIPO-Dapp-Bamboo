import { useEffect, useState } from "react"
import { useChain } from "../../../chain/ChainProvider"
import Listbox from "../../../components/listbox/Listbox"

const ChainMenu = () => {

  const { activeChain, chains, changeChain } = useChain()
  const [selected, setSelected ] = useState(activeChain.id);
  const items = chains.map((chain) => chain.id)

  const styles = {
    listbox: "w-40",
    button: {
      normal : "cursor-pointer chain-menu rounded-lg bg-button-blue pl-3 pr-10 text-center font-semibold  text-base font-Poppins",
      open: "chain-listbox-open text-white",
      unopen : "text-nav-menu"
    },
    options : "absolute mt-14 max-h-60 w-full overflow-auto rounded-xl shadow-bar-dropdown divide-y divide-soild bg-white text-base",
    option : {
      normal: '',
      active: '',
      deactive: ''
    }
  }

  useEffect(() => {
    if(selected === activeChain.id) {
      return
    }
    const chain = chains.filter(chain => chain.id === selected)
    changeChain(chain[0].meta.chainId);
  }, [selected, activeChain, changeChain]);

  return (
    <Listbox 
      items={items} 
      selected={ selected } 
      setSelected={setSelected}
      styles={styles}
    />
  )
}

export default ChainMenu