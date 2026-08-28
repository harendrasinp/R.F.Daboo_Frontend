"use client"
import React, { useEffect, useState } from 'react'
import { UploadImageThunk, DrowpDownThunk, GetDrowpDownListThunk, getAllImageThunk, deleteImageThunk, DeleteEventThunk, EditDrowpDownThunk } from '@/redux/thunkAPI/GalleryThunk'
import { useDispatch, useSelector } from 'react-redux'
import { statusMessageFunction } from '@/redux/slices/GallerySlice'
const AdminGallery = () => {
    const [loadtinFlag, setLoadingFlag] = useState(false)
    const [Category, setCategory] = useState("")
    const [year, setYear] = useState("")
    const [EditCategory, setEditCategory] = useState("")
    const [EditYear, setEditYear] = useState("")
    const [ImageData, setImageData] = useState(null)
    const [dropList, setDropList] = useState("")
    const [deletingId, setDeletingId] = useState("")
    const [editEvent, setEditEvent] = useState("")
    const [editValue, setEditValue] = useState("")
    const [toggleButton, settoggleButton] = useState(false)
    const dispatch = useDispatch()
    const EventData = useSelector((state) => state.gallery.gallery)

    const { loading, statusMessage, errorMessage, reponseData, DropDownListItem } = useSelector((state) => state.gallery)

    // ----------------------------------UseEffect for DropDownList----------------------------------
    useEffect(() => {
        dispatch(GetDrowpDownListThunk())
    }, [])
    // ----------------------------------DropDownList functon----------------------------------
    const droopdownlistFunc = async (e) => {
        e.preventDefault()
        await dispatch(DrowpDownThunk(dropList))
        dispatch(GetDrowpDownListThunk())
    }
    const togglefunction = async() => {
        if (toggleButton){
            settoggleButton(false)
            await dispatch(EditDrowpDownThunk({"oldName":editEvent,"newName":editValue}))
        }
        else{
            settoggleButton(true)
            
        }
    }

    // ----------------------------------image Upload form function----------------------------
    const ImageUploadLoadinghandlere = () => {
        setLoadingFlag(true)
    }
    const handlesubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append("category", Category);
        data.append("year", year);
        data.append("image", ImageData);

        await dispatch(UploadImageThunk(data));
        setCategory("")
        setYear("")
        setImageData(null)
        setLoadingFlag(false)


        setTimeout(() => {
            dispatch(statusMessageFunction())
        }, 1200)
    }
    const hanldeEditImageFunction = (e) => {
        e.preventDefault()
        dispatch(getAllImageThunk({ EditCategory, EditYear }))
    }
    const handleDeleteFunction = async (imageId) => {
        setDeletingId(imageId);
        const result = await dispatch(deleteImageThunk(imageId))
        if (deleteImageThunk.fulfilled.match(result)) {
            dispatch(getAllImageThunk({ EditCategory, EditYear }))
        }
    }
    const handleDeleteEvent = async (eventName) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete the event: ${eventName}? This action cannot be undone.`);
        if (confirmDelete) {
            await dispatch(DeleteEventThunk(eventName))
            dispatch(GetDrowpDownListThunk())
        }
    }
    return (
        <div className='bg-blue-950 w-full min-h-screen flex flex-col gap-2'>
            <div className='w-full flex justify-center gap-2 mt-5'>
                {/* --------------------------------------Add New Function form------------------------------ */}
                <form onSubmit={droopdownlistFunc} className='bg-gray-300 w-fit h-57 p-3 flex flex-col items-center rounded gap-2'>
                    <div className='mt-11'>
                        <input type='text'
                            name="dropList"
                            value={dropList}
                            onChange={(e) => setDropList(e.target.value)}
                            placeholder='Add New Event'
                            className='focus:outline-none border border-black p-3 rounded' />
                    </div>
                    <button className='bg-green-600 p-1 rounded text-white cursor-pointer w-fit'>Add Event</button>
                </form>
                {/* ------------------------------Image Upload Form------------------------------------------ */}
                <form onSubmit={handlesubmit} className='bg-gray-300 w-fit h-fit p-3 flex flex-col justify-center items-center rounded gap-2'>
                    <h1 className='text-gray-800 font-bold text-2xl'>Image Uploader</h1>
                    <div className=' flex justify-center gap-2'>
                        {/* ------------------------------DropDown List for Function------------------------- */}
                        <div>
                            <select
                                name="category"
                                value={Category} onChange={(e) => setCategory(e.target.value)}
                                className="w-full border border-black focus:outline-none focus:ring-2 focus:ring-orange-500 p-4 rounded cursor-pointer">
                                <option value="">Choose Event</option>
                                {DropDownListItem?.map((item, index) => (
                                    <option key={index} value={item.DropDownItem}>
                                        {item.DropDownItem}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* ------------------------Year of function box------------------------ */}
                        <div>
                            <input type='text' name="year" placeholder='Year of Function'
                                value={year} onChange={(e) => setYear(e.target.value)}
                                className='focus:outline-none border border-black p-3 rounded' />
                        </div>
                        {/* ---------------------------Image upload box--------------------------- */}
                        <div>
                            <input onChange={(e) => setImageData(e.target.files[0])} type="file" name='image' className="border p-1 rounded file:bg-orange-500 file:text-white file:border-0 file:px-4 file:py-2 file:rounded file:cursor-pointer file:mr-4 hover:file:bg-orange-600" />
                        </div>

                    </div>
                    {/* ---------------------------------------Submit Button-------------------------- */}
                    <button onClick={ImageUploadLoadinghandlere} className='bg-green-600 p-1 rounded text-white cursor-pointer'>Upload Image</button>
                    {/* --------------------------Message area------------------------------------ */}
                    <div className='w-full h-15'>
                        {loading & loadtinFlag ? "Loading........" : null}
                        {statusMessage ? statusMessage.message : null}
                        {DropDownListItem ? DropDownListItem.message : null}
                        {errorMessage ? errorMessage.message : null}
                    </div>
                </form>
            </div>
            {/* --------------------------Editing Section-------------------------------- */}
            <div className='w-full flex flex-col justify-center items-center gap-2'>
                <div className='w-full p-2 flex justify-center items-center gap-2 bg-gray-300 rounded'>
                    <h1 className='text-gray-800 text-2xl font-bold'>Gallery Editor</h1>
                </div>
                {/* ---------------------------Edition Forms------------------------------ */}
                <div className='flex gap-1'>
                    {/* -------------------------Event Editer---------------------- */}
                    <div className='bg-gray-300 p-2 rounded w-95'>
                        <div className='sticky top-0  text-center font-bold bg-blue-950 p-1 text-white'>Event Editer</div>
                        <div className='h-35 overflow-y-scroll px-2'>
                            {DropDownListItem?.map((item, index) => (
                                <div key={index} value={item.DropDownItem} className='flex justify-between  gap-1 mt-2'>
                                    {
                                        editEvent === item.DropDownItem ? (
                                            <input
                                                type='text'
                                                value={editValue}
                                                onChange={(e) => setEditValue(e.target.value)}
                                                className='border w-55' />
                                        ) : (<div>{item.DropDownItem}</div>)
                                    }
                                    <div className='flex justify-center gap-1 items-center'>

                                        <button
                                            onClick={() => {
                                                setEditEvent(item.DropDownItem);
                                                setEditValue(item.DropDownItem)
                                                togglefunction()
                                            }}
                                            className='bg-green-600 text-white rounded text-sm p-0.5 cursor-pointer px-3'>
                                            {toggleButton &&  editEvent === item.DropDownItem ?"Save":"Edit"}
                                        </button>

                                        <button onClick={() => handleDeleteEvent(item.DropDownItem)} className='bg-red-600 text-white rounded text-sm p-0.5 cursor-pointer px-3 '>Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* -------------------------Image Editer----------------------- */}
                    <form onSubmit={hanldeEditImageFunction} className='w-150 p-2 flex justify-center       
                       items-center gap-2 bg-gray-300 rounded'>
                        <select
                            name="category"
                            value={EditCategory} onChange={(e) => setEditCategory(e.target.value)}
                            className="w-55 border border-black focus:outline-none focus:ring-2 focus:ring-orange-500 p-4 rounded">
                            <option value="">Choose Event</option>
                            {DropDownListItem?.map((item, index) => (
                                <option key={index} value={item.DropDownItem}>
                                    {item.DropDownItem}
                                </option>
                            ))}
                        </select>
                        <div>
                            <input type='text' name="year" placeholder='Year of Function'
                                value={EditYear} onChange={(e) => setEditYear(e.target.value)}
                                className='focus:outline-none border border-black p-3 rounded' />
                        </div>
                        <button type='submit' className='bg-green-600 p-1 rounded text-white cursor-pointer'>
                            Show Image
                        </button>
                    </form>
                </div>
            </div>
            <div className='w-full rounded p-3 flex justify-center items-center'>
                {EventData?.EventAllImage?.data?.map((item, index) => (
                    <div key={index} className="bg-gray-200 p-2 flex flex-col justify-center items-center gap-2">
                        <div className='w-35 h-30 flex flex-col justify-center items-center border-4 rounded border-gray-700 cursor-pointer px-1'>
                            <img src={item.Image} alt={`Image ${index}`}
                                className='w-full h-20' />
                            <h1 className='text-gray-800 text-[10px] font-bold text-center'>{item.EventName} {item.Year}</h1>
                        </div>
                        <button onClick={() => handleDeleteFunction(item._id)} className='bg-red-500 text-white p-1 rounded cursor-pointer'>
                            {deletingId == item._id ? "Deleting..." : "Delete"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdminGallery


