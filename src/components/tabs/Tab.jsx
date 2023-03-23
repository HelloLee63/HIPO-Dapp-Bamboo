import { Tab as TwTab } from '@headlessui/react'
import Card from '../cards/Card'
import clsx from 'clsx'
import PledgeBtn from '../../modules/borrower/components/buttons/PledgeBtn'
import DrawerButton from '../button/DrawerButton'
import PledgeDrawerContent from '../../modules/borrower/components/drawer-content/PledgeDrawerContent'

const Tab = ({ datas }) => {

  return (
    <TwTab.Group>
      <TwTab.List className="inline-flex space-x-4 rounded-2xl bg-tab-background py-2 px-4">
        {Object.keys(datas).map((data) => (
          <TwTab
            key={data}
            className={({ selected }) =>
              clsx(
                'rounded-lg py-2.5 px-4 text-base font-bold leading-5  text-nav-menu',
                'focus:outline-none',
                selected
                  ? 'bg-white tab-pledge-selected'
                  : 'hover:bg-white/[0.12]'
              )
            }
          >
            {data}
          </TwTab>
        ))}
      </TwTab.List>
      <TwTab.Panels className="mt-2">
        {Object.values(datas).map((items, idx) => (
          <TwTab.Panel
            key={idx}
          >
            <ul>
              <div className="mx-auto max-w-7xl grid grid-cols-3 gap-7 pt-11 pb-52">
                {items.map((item, idx) => (
                  <Card 
                    key={idx}
                    tokenIcon={item.icon}
                    tokenSymbol={item.symbol}
                  >
                    <div className='flex flex-col'>
                      <span className='font-Poppins text-base text-sub-gray font-normal'>Uniswap V3 LP Token</span>
                      <span className='font-Montserrat font-bold text-2xl text-token-font pt-8'>Max LTV: {item.maxLtv}</span>
                      <span className='font-Montserrat font-bold text-2xl text-token-font pt-4'>Liq. Thresh: {item.liquidationThreshold}</span>
                    </div>
                    <div className='grid grid-cols-2 gap-4 pt-12 pb-10'>
                      <DrawerButton 
                        className='text-button-tx-color bg-reclaim-btn tx-button-add-collateral'
                        text='Reclaim'
                      />
                      <PledgeBtn 
                        text='Add collateral'
                        drawerContent={<PledgeDrawerContent/>} 
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </ul>
          </TwTab.Panel>
        ))}
      </TwTab.Panels>
    </TwTab.Group>
  )
}

export default Tab
