import { useState } from "react"
import Table from "../../../../components/table/Table"
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
      <Table
        tableTitle='Loans list'
        tableHeaders={tableHeaders} 
        tableContents={tokens}
        options={<DashboardTableOptions options={loanTokens} select={setTokens}/>}
      />
    </>
  )
}

export default DashboardTable