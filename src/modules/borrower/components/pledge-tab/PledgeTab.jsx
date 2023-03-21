import { useState } from "react"
import Tab from "../../../../components/tabs/Tab"
import { useKnownTokens } from "../../../../web3/KnownTokensProvider"

const PledgeTab = () => {

  const {dexLpTokens} = useKnownTokens()
  let [colCategories] = useState({
    "Dex LP Token": dexLpTokens,
    "Staking Token": [
    ],
  })
  return (
    <div>
      <Tab datas={colCategories} />
    </div>
  )
}

export default PledgeTab