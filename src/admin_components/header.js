"use client"
import React from 'react'
import { LogoutThunk } from '@/redux/thunkAPI/authThunk'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
const Header = () => {

  const dispatch=useDispatch()
  const router=useRouter()
  const handleLogout=async()=>{
      const result= await dispatch(LogoutThunk())
      if(LogoutThunk.fulfilled.match(result)){
        router.push("/")
      }
  }
  return (
    <div>
      <div className='bg-BlueNavyColor w-full p-2 flex gap-4'>
        <h1 className='text-white text-sm'>Home</h1>
        <h1 className='text-white text-sm'>Contact</h1>
        <h1 className='text-white text-sm'>About US</h1>
        <h1 className='text-white text-sm'>Acadamy</h1>
        <h1 className='text-white text-sm'>Gallary</h1>
        <button onClick={handleLogout} className='bg-red-700 p-1 text-amber-50 rounded cursor-pointer'>Logout</button>
      </div>
    </div>
  )
}

export default Header