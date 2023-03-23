import { useState } from "react"
import Table from "../../../../components/table/Table"
import InterestPoolInfo from "../../../../web3/components/interest-pool-info/InterestPoolInfo"
import GlobalInfoProvider from "../../../../web3/GlobalInfoProvider"
import { useProtocolTokens } from "../../../../web3/ProtocolTokensProvider"
import DashboardTableOptions from "../dashboard-table-options/DashboardTableOptions"

const DashboardTable = () => {
  const tableHeaders = [
    {
      name : 'Loan',
      orderable : true,
    },
    {
      name : 'Market size',
      orderable : true,
    },
    {
      name : 'APY',
      orderable : true,
    },
    {
      name : 'Total Available',
      orderable : true,
    },
    {
      name : 'Borrowed',
      orderable : true,
    },
  ]
  const {loanTokens} = useProtocolTokens()
  const [tokens, setTokens] = useState(loanTokens)
  return (
    <>
      <GlobalInfoProvider>
        <Table
          tableTitle='Loans list'
          tableHeaders={tableHeaders} 
          tableContents={tokens}
          options={<DashboardTableOptions options={loanTokens} select={setTokens}/>}
        />
        {/* <InterestPoolInfo></InterestPoolInfo> */}
      </GlobalInfoProvider>
    </>
    
  )
}

export default DashboardTable