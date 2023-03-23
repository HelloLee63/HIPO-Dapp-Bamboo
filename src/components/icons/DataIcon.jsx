import { toAbsoluteUrl } from '../../helpers/path'

const DataIcon = props => {

  const { imgUrl} = props

  return (
    <div className='inline-flex items-center justify-center bg-white h-16 w-16 rounded-full'>
      <img className='h-7 w-7' src={toAbsoluteUrl(imgUrl)} alt="" />
    </div>
  )
}

export default DataIcon