import { navItems } from "../data/navItems"
import Link from "next/link"
import Image from "next/image"
const Header = ({ openModal }) => {
  return (
    <div className="relative w-full bg-white mb-2">
      <div className="flex items-end space-x-4 px-4 py-2">
        <Image
          src="/logos/Rf-daboo.png"
          alt="school logo"
          width={100}
          height={100}
          className="object-cover"
        />
        <h1 className="text-2xl font-bold text-gray-800">Shree R. F. Daboo Education Society</h1>
      </div>
      <div className="w-full bg-gray-800 flex justify-center items-center space-x-6 py-1">
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