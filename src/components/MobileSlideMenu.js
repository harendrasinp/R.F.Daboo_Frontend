import React from 'react'
import Link from 'next/link';
import { navItems } from './../data/navItems';
const MobileSlideMenu = ({ isMenuOpen, setOpenMenu }) => {
  
    return (
        <>
            <div className={`
                fixed top-0 right-0 h-screen w-1/2
                bg-gray-800 z-50
                flex flex-col justify-center items-start
                transition-transform duration-300 ease-in-out
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <div onClick={setOpenMenu} className='text-red-700 ml-4 cursor-pointer'>
                    <h1>X close</h1>
                </div >
                {navItems.map((item, index) => (
                    <Link key={index} href={item.path} className="text-white hover:text-orange-300 p-4">
                        {item.name}
                    </Link>
                ))}
                <div className="ml-4">
                    <button className="text-sky-950 bg-amber-300 p-2 rounded hover:bg-orange-300 cursor-pointer">
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}

export default MobileSlideMenu