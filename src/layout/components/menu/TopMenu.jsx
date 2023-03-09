import MenuItem from "./MenuItem";

const TopMenu = props => {

  const { menuItems } = props;

  return (
    <div className="ml-6 flex items-baseline">
      {
        menuItems.map((item) => (          
          <MenuItem item={item} subItems={item.subItems} key={item.name}/>
      ))}
    </div>    
  )
}

export default TopMenu