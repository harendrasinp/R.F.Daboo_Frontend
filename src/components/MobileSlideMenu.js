"use client"
import React from 'react'
import Link from 'next/link';
import { navItems } from './../data/navItems';
import {CircleX} from "lucide-react"
import { useContext } from 'react';
import { ContextAPI } from '../contextAPI/Context';
const MobileSlideMenu = () => {
    const { isMenuOpen, openMobileMenuFunction, openLoginModalFunction } = useContext(ContextAPI);
    return (
        <>
            <div className={`
                fixed top-0 right-0 h-screen w-1/2
                bg-gray-800/80 z-50
                flex flex-col justify-center items-start
                transition-transform duration-300 ease-in-out
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <div onClick={openMobileMenuFunction} className='-mt-20 p-4 w-full text-red-700 cursor-pointer flex justify-end items-center border-b-2 border-b-gray-300'>
                    <CircleX className="text-orange-300 w-10 h-10" />
                </div >
                {navItems.map((item, index) => (
                    <Link key={index} href={item.path} className="text-white hover:text-orange-300 p-4">
                        {item.name}
                    </Link>
                ))}
                <div className="ml-4">
                    <button className="text-sky-950 bg-orang-300 p-2 rounded hover:bg-orange-300 cursor-pointer" onClick={openLoginModalFunction}>
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}

export default MobileSlideMenu