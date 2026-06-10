"use client"
import React from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { closeLoginModal } from '@/redux/slices/Loginslice';
const LoginModal = () => {
    const isOpenmodal=useSelector((state)=>state.login.isOpenModal)
    const dispatch=useDispatch()
    if (!isOpenmodal) return null;
    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
            <div className="absolute top-52 left-1/2 transform -translate-x-1/2 bg-gray-300 p-6 rounded shadow-lg z-100 flex flex-col gap-4 w-80">
                <button onClick={()=>dispatch(closeLoginModal())}  className="absolute right-3 top-3 cursor-pointer">✕</button>
                <div>
                    <h1 className="text-center text-lg font-bold ">Login</h1>
                </div>
                <div>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            className="border border-gray-400 rounded py-1 px-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />

                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="border border-gray-400 rounded py-1 px-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginModal