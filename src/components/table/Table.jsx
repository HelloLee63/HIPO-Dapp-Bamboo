import { toAbsoluteUrl } from "../../helpers/path"
import { calAPY } from "../../web3/helpers/apyCalculate"
import TokenSymbol from "../tokens/TokenSymbol"


const Table = ({tableTitle, tableHeaders, tableContents, options}) => {
  return (  
    <div className="relative overflow-x-auto">
      <div className="flex items-center justify-between py-4">
        <div className="flex w-full justify-between items-center">
          <span className="font-bold text-2xl font-Inter text-token-font">{tableTitle}</span>
          <div>
            {options}
          </div>
        </div>
      </div>
      <div className="pt-8 pb-48">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-base text-sub-gray font-Poppins font-medium uppercase">
            <tr>
              {
                tableHeaders.map((header, idx) => 
                  <th key={idx} scope="col" className="py-3">
                    <div className="flex items-center">
                      {header.name}
                      {
                        header.orderable &&
                        <button className="pl-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.96586 4.47998L4.48584 2L2.00586 4.47998" stroke="#A2A6AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4.48633 14V2" stroke="#A2A6AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9.0332 11.5195L11.5132 13.9995L13.9932 11.5195" stroke="#A2A6AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M11.5117 2V14" stroke="#A2A6AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </button>
                      }
                    </div>
                  </th>
                )
              }
            </tr>
          </thead>
          <tbody>
            {
              tableContents.map((item, idx) => 
                <tr key={idx} className="border-b table-dashboard">
                  <td className="flex items-center py-4 whitespace-nowrap">
                    <TokenSymbol className="h-12" iconUrl={ toAbsoluteUrl(item.icon) }/>
                    <div className="pl-4">
                      <div className="text-base font-semibold">{item.symbol}</div>
                      <div className="font-normal text-gray-500">{item.desc}</div>
                    </div>  
                  </td>
                  <td className="py-4">
                    <div>
                      <div className="text-base font-semibold">Neil Sims</div>
                      <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center text-base font-Poppins font-normal text-black">
                      {calAPY(item.iPrice, item.duration)}
                    </div>
                  </td>
                  <td className="py-4"> 
                    <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                  </td>
                  <td className="py-4"> 
                    <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                  </td>
                </tr>
              )
            } 
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Table