

const HamburgerIcon = ({ openMobileMenu }) => {
 
  return (
    <div onClick={openMobileMenu} className="absolute top-4 right-4 flex flex-col items-center justify-center gap-1 cursor-pointer border-2 border-gray-800 p-2 rounded md:hidden">
        <div className="w-8 h-1 bg-gray-800"></div>
        <div className="w-8 h-1 bg-gray-800"></div>
        <div className="w-8 h-1 bg-gray-800"></div>
    </div>
  )
}

export default HamburgerIcon