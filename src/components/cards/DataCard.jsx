import { classNames } from '../../helpers/ultility'
import DataIcon from '../icons/DataIcon'

const DataCard = props => {
  const { title, timer, data, imgUrl, styles} = props
  return (
    <div className="w-full">
      <div className={classNames("rounded-2x p-5 card-dashbord-data", styles.card)}>
        <>
          <DataIcon imgUrl={imgUrl}/>
          <div className={classNames(styles.title)}>
            {title}
          </div>
          <div className={classNames(styles.timer)}>
            {timer}
          </div>
          <div className={classNames(styles.data)}>
            {data}
          </div>
        </>
      </div>
    </div>
  )
}

export default DataCard