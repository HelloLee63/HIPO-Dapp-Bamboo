import DataCard from "../../../components/cards/DataCard"

const Banner = () => {

  const datas = {
    "market_size" : {
      "title" : "Market Size",
      "timer" : "3 seconds ago",
      "data" : "$324.84K"
    },
    "total_available" : {
      "title" : "Market Size",
      "timer" : "3 seconds ago",
      "data" : "$324.84K"
    },
    "borrowed" : {
      "title" : "Market Size",
      "timer" : "3 seconds ago",
      "data" : "$324.84K"
    },
  }

  const styles = {
    "market_size" : {
      "card" : "w-56 h-60 rounded-5xl card-dashbord-data-market-size",
      "title" : "pt-4 pb-2 text-xl text-white font-bold",
      "timer" : "pt-4 pb-2 text-xl text-white",
      "data" : "pt-4 pb-2 text-xl text-white"
    },
    "total_available" : {
      "card" : "w-56 h-60 rounded-5xl card-dashbord-data-total-available",
      "title" : "pt-4 pb-2 text-xl text-white font-bold",
      "timer" : "pt-4 pb-2 text-xl text-white",
      "data" : "pt-4 pb-2 text-xl text-white"
    },
    "borrowed" : {
      "card" : "w-56 h-60 rounded-5xl card-dashbord-data-borrowed",
      "title" : "pt-4 pb-2 text-xl text-white font-bold",
      "timer" : "pt-4 pb-2 text-xl text-white",
      "data" : "pt-4 pb-2 text-xl text-white"
    }  
  }

  return (
    <header className="flex align-top justify-between mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
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