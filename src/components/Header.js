import { navItems } from "../data/navItems"
import Link from "next/link"
import Image from "next/image"
import HamburgerIcon from "./HamburgerIcon"
import Marque from "./Marque"
const Header = ({ openModal }) => {
  return (
    <div className="relative bg-orange-300 w-full md:bg-white">
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
        <button onClick={openModal} className="text-white px-3 py-1 rounded hover:text-orange-300 cursor-pointer">
          Login
        </button>
      </div>
    </div>
  )
}
export default Header