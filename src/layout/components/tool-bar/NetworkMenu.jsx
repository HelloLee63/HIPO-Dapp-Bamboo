import Listbox from "../../../components/listbox/Listbox"

const NetworkMenu = () => {

  const people = [
    { name: 'Arbitrum' },
    { name: 'Goerli' },
  ]

  return (
    <Listbox items={people} />
  )
}

export default NetworkMenu