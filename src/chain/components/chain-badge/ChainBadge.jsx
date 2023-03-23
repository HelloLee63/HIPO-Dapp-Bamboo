import { useChain } from '../../ChainProvider'

const ChainBadge = () => {
  
  const { activeChain } = useChain()

  return (
    <div className='inline-flex py-1 px-5 rounded-3xxl mt-5 font-Poppins font-medium text-xl text-chain-badge-font items-center justify-center bg-blue-light'>
      { activeChain.config.title }
    </div>
  )
}

export default ChainBadge