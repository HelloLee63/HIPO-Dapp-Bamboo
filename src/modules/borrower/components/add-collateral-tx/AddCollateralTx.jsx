import { useEffect, useState } from "react"
import TxCard from "../../../../components/cards/TxCard"
import Listbox from "../../../../components/listbox/Listbox"
import { useWallet } from "../../../../wallet/WalletProvider"
import PledgeTxDatas from "../pledge-tx-datas/PledgeTxDatas"

const AddCollateralTx = () => {
  
  const wallet = useWallet()
  const [walletNftIds, setWalletNftIds] = useState([])
  const [selected, setSelected ] = useState('Select a id');

  const nftIds = [
    {
      id: '0001'
    },
    {
      id: '0002'
    },
    {
      id: '0003'
    }
  ]

  const styles = {
    listbox: "w-full",
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
    if(!wallet.account) {
      setWalletNftIds([])
      return
    }

    setWalletNftIds(nftIds.map((id) => (id['id'])))

  }, [wallet.account])

  // useEffect(() => {
  //   if(selected === 'Select a id') {
  //     return
  //   }
    
  // }, [selected]);

  return (  
    <TxCard>
      <div>
        <div className="text-lg font-Montserrat text-token-font">
          Select LP Token ID
        </div>
        <div className="pt-5">
          <Listbox 
            items={walletNftIds} 
            selected={ selected } 
            setSelected={setSelected}
            styles={styles}
          />
        </div>
        <div className="pt-5">
          <PledgeTxDatas />
        </div>
      </div>
    </TxCard>
  )
}

export default AddCollateralTx