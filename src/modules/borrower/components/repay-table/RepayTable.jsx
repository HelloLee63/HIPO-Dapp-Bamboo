import Table from "../../../../components/table/Table"
import { useProtocolTokens } from "../../../../web3/ProtocolTokensProvider"

const RepayTable = () => {
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
      name : 'Amount/Value',
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
        tableTitle='Repay loan list'
        tableHeaders={tableHeaders} 
        tableContents={loanTokens}
      />
    </>
  )
}

export default RepayTable