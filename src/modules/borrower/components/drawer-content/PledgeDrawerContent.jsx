import TxHeadCard from "../../../../components/cards/TxHeadCard"
import TxDes from "../../../../components/tx-des/TxDes"
import AddCollateralTx from "../add-collateral-tx/AddCollateralTx"

const PledgeDrawerContent = () => {
  return (
    <div className="bg-white rounded-t-5xl pb-40">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center w-full pt-8">
          <TxDes 
            title='Please follow the instructions to add collateral'
            description='description text description text description text description text description text'
          />
        </div>
        <div className="w-full flex justify-center pt-10">
          <TxHeadCard iconUrl='media/tokens/dai-weth.svg'/>
        </div>
      </div>
      <div className="border-t-1x border-border-color-card mt-14"></div>
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center pt-11">
          <div className="w-7/12">
            <AddCollateralTx />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PledgeDrawerContent