import DataCard from "../../../components/cards/DataCard"
import { formatValueWithSymbol } from "../../../helpers/formater"
import SycTimer from "../../../moudles/dashboard/components/syc-timer/SycTimer"

const Banner = () => {
  const datas = {
    "market_size" : {
      "title" : "Market Size",
      "timer" : <SycTimer />,
      "data" : `$${formatValueWithSymbol(768988588.89)}`
    },
    "total_available" : {
      "title" : "Total Available",
      "timer" : "3 seconds ago",
      "data" : `$${formatValueWithSymbol(258228513.89)}`
    },
    "borrowed" : {
      "title" : "Borrowed",
      "timer" : "3 seconds ago",
      "data" : `$${formatValueWithSymbol(768988588.89-258228513.89)}`
    },
  }

  const styles = {
    "market_size" : {
      "card" : "w-56 h-60 rounded-5xl card-dashbord-data-market-size",
      "title" : "pt-3 text-xl text-white font-bold",
      "timer" : "text-base text-white opacity-50",
      "data" : "pt-4 text-2xxl font-semibold text-white"
    },
    "total_available" : {
      "card" : "w-56 h-60 rounded-5xl card-dashbord-data-total-available",
      "title" : "pt-3 text-xl text-white font-bold",
      "timer" : "text-base text-white opacity-50",
      "data" : "pt-4 text-2xxl font-semibold text-white"
    },
    "borrowed" : {
      "card" : "w-56 h-60 rounded-5xl card-dashbord-data-borrowed",
      "title" : "pt-3 text-xl text-white font-bold",
      "timer" : "text-base text-white opacity-50",
      "data" : "pt-4 text-2xxl font-semibold text-white"
    }  
  }

  return (
    <header className="flex align-top justify-between mx-auto max-w-7xl">
      <h1 className='banner-text align-top'>Hipo<br/>Market</h1>
      <div className='inline-flex justify-items-end gap-12'>
        <DataCard 
          title={datas.market_size.title}
          timer={datas.market_size.timer}
          data={datas.market_size.data}
          imgUrl='media/icons/market-size.svg'
          styles={styles.market_size}
        />
        <DataCard 
          title={datas.total_available.title}
          timer={datas.total_available.timer}
          data={datas.total_available.data}
          imgUrl='media/icons/total-available.svg'
          styles={styles.total_available}
        />
        <DataCard 
          title={datas.borrowed.title}
          timer={datas.borrowed.timer}
          data={datas.borrowed.data}
          imgUrl='media/icons/borrowed.svg'
          styles={styles.borrowed}
        />
      </div>
    </header>    
  )
}

export default Banner