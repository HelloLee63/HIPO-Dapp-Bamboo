import Table from "../../../../components/table/Table"
import { useProtocolTokens } from "../../../../web3/ProtocolTokensProvider"

const WithdrawTable = () => {
  const tableHeaders = [
    {
      name : 'Loan',
      orderable : false,
    },
    {
      name : 'APY',
      orderable : false,
    },
    {
        name : 'Period',
        orderable : false,
      },
    {
      name : 'Extracted',
      orderable : false,
    },
    {
      name : 'End time',
      orderable : false,
    },
    {
      name : 'State',
      orderable : false,
    },
    {
      name : 'Action',
      orderable : false,
    },
  ]
  const {loanTokens} = useProtocolTokens()
  return (
    <>
      <Table
        tableTitle='Withdraw loan list'
        tableHeaders={tableHeaders} 
        tableContents={loanTokens}
      />
    </>
  )
}

export default WithdrawTable