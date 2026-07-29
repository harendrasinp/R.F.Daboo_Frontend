"use client"
import React, { useEffect, useState } from 'react'
import { ContactUsDataThunk, ContactsThunk, DeleteContactFromListThunk, GetAllPhonesNoListThunk, GetContacUsThunk, UpdatePhoneNoList } from "@/redux/thunkAPI/ContactThunk"
import { useDispatch, useSelector } from 'react-redux'
import { cleareMessage } from "@/redux/slices/contactSlice"
const AdminContact = () => {
    const [ContactUsData, setContactUsData] = useState({ Address: "", OfficePhone: "", Email: "" })
    const [ContactData, setContactData] = useState({ OfficeName: "", Contact: "" })
    const [EditId, setEditId] = useState("")
    const [EditData, setEditData] = useState({ OfficeName: "", Contact: "" })

    const dispatch = useDispatch()
    const { responseData, message } = useSelector((state) => state.ContactUs)
    const { phoneList } = useSelector((state) => state.ContactUs.phones)
    const handleChange = (e) => {
        const { name, value } = e.target
        setContactUsData((prev) => ({ ...prev, [name]: value, }))

    }
    const handleContactData = (e) => {
        e.preventDefault()
        dispatch(ContactUsDataThunk(ContactUsData))
    }

    const contactHandaleChange = (e) => {
        const { name, value } = e.target
        setContactData((prev) => ({ ...prev, [name]: value, }))
    }
    const contacHadaleSubmit = async (e) => {
        e.preventDefault()
        const result = await dispatch(ContactsThunk(ContactData))
        if (ContactsThunk.fulfilled.match(result)) {
            dispatch(GetAllPhonesNoListThunk());
        }
        setContactData({ OfficeName: "", Contact: "" })
    }
    useEffect(() => {
        dispatch(GetContacUsThunk());
        dispatch(GetAllPhonesNoListThunk());
    }, [dispatch]);

    useEffect(() => {
        if (responseData?.data) {
            setContactUsData({
                Address: responseData.data.Address,
                OfficePhone: responseData.data.OfficePhone,
                Email: responseData.data.Email,
            });
        }
    }, [responseData]);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                dispatch(cleareMessage())
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [message, dispatch])
    const deleteImageThunk = async (dataId) => {
        await dispatch(DeleteContactFromListThunk(dataId))
        dispatch(GetAllPhonesNoListThunk());

    }
    // --------------------------PhoneListEditer------------------------------------------------
    const handleEdit = async(phone) => {
        if (EditId == phone._id) {
            await dispatch(UpdatePhoneNoList({id:phone._id,OfficeName:EditData.OfficeName,Contact:EditData.Contact}))
            setEditId(null)
            dispatch(GetAllPhonesNoListThunk());
        }
        else {
            setEditId(phone._id)
            setEditData({ OfficeName: phone.OfficeName, Contact: phone.ContactNumber })
        }
    }
    return (
        <div className='bg-BlueNavyColor h-screen p-2 flex flex-col gap-2'>
            <div className='bg-gray-400 w-full p-2 flex flex-col items-center gap-3'>
                <div className='text-2xl font-bold text-blue-950'>Address Editer</div>
                <form onSubmit={handleContactData} className='flex flex-col items-center gap-3'>
                    <input placeholder='Address'
                        name='Address'
                        value={ContactUsData.Address}
                        onChange={handleChange}
                        className='border-2 border-blue-950 text-amber-50 p-2 w-250 rounded focus:outline-amber-300' />
                    <input placeholder='Office Phone'
                        name='OfficePhone'
                        value={ContactUsData.OfficePhone}
                        onChange={handleChange}
                        className='border-2 border-blue-950 text-amber-50 p-2 w-250 rounded focus:outline-amber-300' />
                    <input placeholder='Email'
                        name='Email'
                        value={ContactUsData.Email}
                        onChange={handleChange}
                        className='border-2 text-amber-50 border-blue-950 p-2 w-250 rounded focus:outline-amber-300' />

                    <div className='flex justify-center items-center gap-4'>
                        <button type='submit' className='bg-amber-500 text-amber-50 p-2 px-4 rounded cursor-pointer'>Submit</button>
                    </div>
                </form>
                <div>{message}</div>
            </div>
            <div >
                <form onSubmit={contacHadaleSubmit} className='p-2 bg-gray-400 flex flex-col justify-center items-center gap-4'>
                    <div className='text-2xl text-blue-950 font-bold'>Add New Contact</div>
                    <input placeholder='Office Name'
                        name='OfficeName'
                        value={ContactData.OfficeName}
                        onChange={contactHandaleChange}
                        className='border-2 border-blue-950 p-2 w-100 rounded focus:outline-amber-300' />
                    <input placeholder='Phone Number'
                        name='Contact'
                        value={ContactData.Contact}
                        onChange={contactHandaleChange}
                        className='border-2 border-blue-950 p-2 w-100 rounded focus:outline-amber-300' />
                    <div className='flex justify-center items-center gap-4'>
                        <button type='submit' className='bg-green-700 p-2 px-4 rounded cursor-pointer'>Submit</button>
                    </div>
                </form>
            </div>
            <div className='bg-gray-400 p-2 flex flex-col justify-center items-center'>
                {phoneList.map((phone, index) => (
                    <div key={index} className='w-185 grid grid-cols-6 gap-3 border-2 border-blue-950 p-2 rounded mb-2'>
                        {EditId == phone._id ?
                            <>
                                <input type='text'
                                    name='OfficeName'
                                    value={EditData.OfficeName}
                                    onChange={(e)=>setEditData({...EditData,[e.target.name]:e.target.value})}
                                    className='bg-yellow-100 p-2 rounded col-span-2' />

                                <input type='text'
                                    name='Contact'
                                    value={EditData.Contact}
                                    onChange={(e)=>setEditData({...EditData,[e.target.name]:e.target.value})}
                                    className='bg-yellow-100 p-2 rounded col-span-2' />
                            </>
                            : <>
                                <div className='bg-yellow-100 p-2 rounded col-span-2'>{phone.OfficeName}</div>
                                <div className='bg-yellow-100 p-2 rounded col-span-2'>{phone.ContactNumber}</div>
                            </>
                        }

                        <div className='flex  gap-2 col-span-2'>
                            <button onClick={() => handleEdit(phone)}
                                className='bg-amber-300 w-20 p-1 px-4 rounded cursor-pointer'>{EditId == phone._id ? "Save" : "Edit"}</button>
                            <button onClick={() => deleteImageThunk(phone._id)} className='bg-red-500 p-1 px-4 rounded cursor-pointer'>Delete</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default AdminContact