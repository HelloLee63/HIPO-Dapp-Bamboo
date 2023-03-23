import DrawerButton from "../../components/button/DrawerButton"
import Card from "../../components/cards/Card"
import { useKnownTokens } from "../../web3/KnownTokensProvider"
import Banner from "../borrower/components/banner/Banner"

const Lend = () => {
  const { loanTokens } = useKnownTokens()
  return (
    <>
      <Banner 
        title={<>Lend list<br /></>}
      />
      <ul>
        <div className="mx-auto max-w-7xl grid grid-cols-4 gap-7 pt-44 pb-52">
          {loanTokens.map((item, idx) => (
            <Card 
              key={idx}
              tokenIcon={item.icon}
              tokenSymbol={item.symbol}
            >
              <div className='pt-12 pb-10'>
                <DrawerButton 
                  className='bg-button-tx-color text-white tx-button-add-collateral'
                  text='Reclaim'
                />
              </div>
            </Card>
          ))}
        </div>
      </ul>
    </>
  )
}

export default Lend