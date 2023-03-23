import Dropdown from "../../../components/drop-down/Dropdown"

const MenuItem = props => {
  const { item, subItems } = props

  const dropdownStyles = {
    "button" : "text-base text-nav-menu ring-gray-300 font-nomal",
    "text" : "navbar-item py-2 font-medium opacity-60 font-Inter",
    "items" : "w-44 rounded-xl divide-y divide-gray-100 bg-white shadow-bar-dropdown focus:outline-none",
    "item" : "text-base text-nav-menu rounded-10px mx-1 py-4"
  }

  return (
    <Dropdown item={item} subItems={subItems} styles={dropdownStyles} />
  )
}

export default MenuItem
