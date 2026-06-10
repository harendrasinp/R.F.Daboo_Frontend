"use client"
import React from 'react'
import Link from 'next/link';
import { navItems } from './../data/navItems';
import {CircleX} from "lucide-react"
import { useSelector,useDispatch } from 'react-redux';
import { CloseSlideMenu } from '@/redux/slices/MobileSlidemenuSlice';
const MobileSlideMenu = () => {
    const OpenSlideMenu=useSelector((state)=>state.SlideMenu.isOpenSlideMenu)
    const dispatch=useDispatch()
    return (
        <>
            <div className={`
                fixed top-0 right-0 h-screen w-1/2
                bg-gray-800/80 z-50
                flex flex-col justify-center items-start
                transition-transform duration-300 ease-in-out
                ${OpenSlideMenu ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <div onClick={()=>dispatch(CloseSlideMenu())} className='-mt-20 p-4 w-full  cursor-pointer flex justify-end items-center border-b-2 border-b-gray-300'>
                    <CircleX className="text-orange-300 w-10 h-10" />
                </div >
                {navItems.map((item, index) => (
                    <Link onClick={()=>dispatch(CloseSlideMenu())}  key={index} href={item.path} className="text-orange-300 hover:text-purple-300 p-4">
                        {item.name}
                    </Link>
                ))}
                <div className="ml-4">
                    <button className="text-sky-950 bg-orang-300 p-2 rounded bg-orange-300 hover:bg-amber-300 cursor-pointer">
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}

export default MobileSlideMenu