const Banner = ({title}) => {
  return (
    <header className="flex align-top justify-between mx-auto max-w-7xl">
      <h1 className='banner-text align-top font-Montserrat'>{title}</h1>
    </header>
  )
}
  
export default Banner