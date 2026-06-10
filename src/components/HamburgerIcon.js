"use client"
import { OpenSlideMenu } from "@/redux/slices/MobileSlidemenuSlice"
import { useDispatch,useSelector } from "react-redux"
const HamburgerIcon = () => {
  const dispatch=useDispatch()
  return (
    <div onClick={()=>dispatch(OpenSlideMenu())}  className='absolute top-4 right-4 flex flex-col items-center justify-center gap-1 cursor-pointer md:hidden'>
        <div className="w-8 h-1 bg-BlueNavyColor"></div>
        <div className="w-8 h-1 bg-BlueNavyColor"></div>
        <div className="w-8 h-1 bg-BlueNavyColor"></div>
    </div>
  )
}

export default HamburgerIcon