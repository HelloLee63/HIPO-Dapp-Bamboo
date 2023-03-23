import clsx from "clsx"

const DrawerButton = ({text, className, handleClick}) => {
  return (
    <button 
      type='button' 
      className={clsx("w-full h-12 items-center rounded-10px  px-3 py-2 text-base font-semibold font-Poppins", className)}
      onClick={handleClick}
    >
      {text}
    </button>    
  )
}

export default DrawerButton
