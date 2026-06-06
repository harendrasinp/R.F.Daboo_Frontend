"use client"
import { useContext } from "react";
import { ContextAPI } from "../contextAPI/Context";
const HamburgerIcon = () => {
  const { openMobileMenuFunction,isHambergerOpen } = useContext(ContextAPI);
  if(isHambergerOpen) return null;
  return (
    <div onClick={openMobileMenuFunction} className='absolute top-4 right-4 flex flex-col items-center justify-center gap-1 cursor-pointer border-2 border-BlueNavyColor p-2 rounded md:hidden'>
        <div className="w-8 h-1 bg-BlueNavyColor"></div>
        <div className="w-8 h-1 bg-BlueNavyColor"></div>
        <div className="w-8 h-1 bg-BlueNavyColor"></div>
    </div>
  )
}

export default HamburgerIcon