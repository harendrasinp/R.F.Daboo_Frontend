"use client"
import { navItems } from "../data/navItems"
import Link from "next/link"
import Image from "next/image"
import { openLoginModal} from "@/redux/slices/Loginslice"
import { useDispatch } from "react-redux"
import {TextAlignJustify} from "lucide-react"
import Marque from "./Marque"
import MobileSlideMenu from "./MobileSlideMenu"
import { useState } from "react"

const Header = () => {
  // -----------------------------States-------------------------------
  const [isOpenMobileMenu,setIsOpenMobileMenu]=useState(false)
  const [isOpenLogin,setIsOpenLogin]=useState(false)
// ------------------------Dispatch---------------------------------
  const dispatch=useDispatch()
// ---------------------------------Mobile Menu Open Close function--------------------------
  const mobileMenuhandler=()=>{
    setIsOpenMobileMenu(!isOpenMobileMenu)
  }
// -------------------------------Login Modal Open Close Function---------------------------
  const LoginModalFunction=()=>{
    setIsOpenLogin(!isOpenLogin)
  }
// ----------------------------------------Return-----------------------------------------
  return (
    <div className="relative bg-linear-to-r from-white to-gray-500 w-full md:bg-white">
      <div className="flex items-end px-2 py-1">
        <div className="flex items-end px-4 md:py-2 w-25 h-25 md:w-35 md:h-35">
          <Image
            src="/logos/Rf-daboo.png"
            alt="school logo"
            width={150}
            height={150}
            className="object-cover md:w-full md:h-full"
          />
        </div>
          <div className="absolute top-15 right-1 md:block w-8 h-8 md:w-18 md:h-18 md:top-4 md:right-0">
             <Image src="/header/rfimage2.png" alt="header image" width={100} height={100} className="w-full h-auto object-cover" />
          </div>
        <div className="flex-col items-center text-BlueNavyColor text-sm font-bold md:text-2xl">
          <h1 >Shree R. F. Daboo </h1>
          <h1>Education Society (VYARA)</h1>
        </div>
{/* --------------------------Hamburger icon--------------------------------------------------------- */}
        <div>
            <TextAlignJustify onClick={()=>mobileMenuhandler()}className="md:hidden absolute top-4 right-4 text-blue-950 font-bold w-10 h-10"/>
        </div>
      </div> 
      {<MobileSlideMenu openStatus={isOpenMobileMenu} openmenufunction={mobileMenuhandler} />}
{/* -------------------------------Marque-------------------------------------------------------------- */}
      <Marque />
{/* ------------------------------Menu Bar-------------------------------------------------------------- */}
      <div className="hidden w-full bg-gray-800 md:flex justify-center items-center space-x-6 py-1">
        {navItems.map((item, index) => (
          <Link key={index} href={item.path} className="text-white hover:text-orange-300">
            {item.name}
          </Link>
        ))}
{/* -------------------------------Login Button---------------------------------------------------------- */}
        <button onClick={()=>dispatch(openLoginModal())} className="text-white px-3 py-1 rounded hover:text-orange-300 cursor-pointer">
          Login
        </button>
      </div>
{/* --------------------------------Login Modal-------------------------------------- */}
    </div>
  )
}
export default Header