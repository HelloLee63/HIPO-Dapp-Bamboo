const TxDes = ({ title, description }) => {
  return (
    <div>
      <p className='font-bold font-Montserrat text-black text-3xxl'>{title}</p>
      <p className='flex pt-4 text-sm text-sub-gray font-medium justify-center'>{description}</p>
    </div>
  )
}

export default TxDes