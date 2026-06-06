"use client"
import { navItems } from "../data/navItems"
import Link from "next/link"
import Image from "next/image"
import HamburgerIcon from "./HamburgerIcon"
import {useContext} from "react"
import { ContextAPI } from "../contextAPI/Context"
import Marque from "./Marque"
const Header = () => {
  const {openLoginModalFunction } = useContext(ContextAPI);
  return (
    <div className="relative bg-linear-to-r from-white to-orange-300 w-full md:bg-white">
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
          <div className="absolute top-11 -right-5 md:block w-22 h-22 md:w-45 md:h-45 md:top-[1px] md:right-1">
             <Image src="/header/rfimage1.png" alt="header image" width={100} height={100} className="w-full h-auto object-cover opacity-60 md:opacity-100" />
          </div>
        <div className="md:flex flex-col items-center justify-center">
          <h1 className="font-bold text-gray-800 md:text-2xl text-sm">Shree R. F. Daboo Education Society </h1>
        </div>
        <HamburgerIcon />
      </div> 
      <Marque />
      <div className="hidden w-full bg-gray-800 md:flex justify-center items-center space-x-6 py-1">
        {navItems.map((item, index) => (
          <Link key={index} href={item.path} className="text-white hover:text-orange-300">
            {item.name}
          </Link>
        ))}
        <button onClick={openLoginModalFunction} className="text-white px-3 py-1 rounded hover:text-orange-300 cursor-pointer">
          Login
        </button>
      </div>
    </div>
  )
}
export default Header