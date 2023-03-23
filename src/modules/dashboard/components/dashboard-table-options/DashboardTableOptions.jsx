import { useEffect, useState } from "react";
import Listbox from "../../../../components/listbox/Listbox";

const DashboardTableOptions = ({options, select}) => {

  const filteredOptions = options.filter((obj, index, arr) => {
    return arr.findIndex((t) => t['symbol'] === obj['symbol']) === index;
  });

  const all = ['All']

  const items = all.concat(filteredOptions.map((option) => (option['symbol'])))

  const [selected, setSelected ] = useState('All');

  const styles = {
    listbox: "w-60",
    button: {
      normal : "cursor-pointer rounded-2xl bg-table-options pl-3 pr-10 text-table-options-font text-center font-semibold  text-base font-Poppins",
      open: "",
      unopen : ""
    },
    options : "absolute mt-14 max-h-60 w-full overflow-auto rounded-xl shadow-bar-dropdown divide-y divide-soild bg-white text-base",
    option : {
      normal: '',
      active: '',
      deactive: ''
    }
  }

  useEffect(() => {
    if(selected === 'All') {
      select(() => options)
      return
    }

    const filteredTokens = options.filter((option) => option.symbol === selected)
    select(filteredTokens)
    
  }, [selected]);

  return (
    <Listbox 
      items={items} 
      selected={ selected } 
      setSelected={setSelected}
      styles={styles}
    />
  )
}

export default DashboardTableOptions