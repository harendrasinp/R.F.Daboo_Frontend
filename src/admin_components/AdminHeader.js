"use client"
import React from 'react'
import { LogoutThunk } from '@/redux/thunkAPI/authThunk'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { navItems } from '@/data/navItems'
import Link from 'next/link'
const AdminHeader = () => {
  const { adminData } = useSelector((state) => state.auth)
  const username = adminData?.responseData?.username
  console.log(username)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = async () => {
    const result = await dispatch(LogoutThunk())
    if (LogoutThunk.fulfilled.match(result)) {
      router.push("/")
    }
  }

  return (
    <div className='bg-blue-950'>
      <div className='bg-white w-full p-2 flex justify-center items-center gap-4 '>
        {navItems.map((item, index) => (
          <Link key={index} href={item.adminPath} className="text-BlueNavyColor hover:text-orange-300">
            {item.name}
          </Link>
        ))}

        <button onClick={handleLogout} className='bg-red-700 p-1 text-amber-50 rounded cursor-pointer'>Logout</button>
      </div>
      <div className='w-fit bg-amber-500 p-1 rounded mt-2 ml-2'>
        <h1>Hello {username} Welcome to Admin Panel</h1>
      </div>
    </div>
  )
}

export default AdminHeader