"use client"
import React, { useState } from 'react'
import { ChevronDown, ChevronRight } from "lucide-react"
import { useDispatch, useSelector } from 'react-redux'
import { GetUYearImage, GetUYearThunk } from '@/redux/thunkAPI/GalleryThunk'
import { yearRemover } from '@/redux/slices/GallerySlice'
const ImageDataComponent = ({ sideBarData, sidebarTitile }) => {
    const [eventName, setEventName] = useState("")
    const [openEvent, setOpenEvent] = useState(null)
    const EventData = useSelector((state) => state.gallery.gallery)
    const dispatch = useDispatch()
    const handleClick = (Event) => {
        if (openEvent === Event) {
            setOpenEvent(null);
            dispatch(yearRemover())
        } else {
            dispatch(yearRemover())
            setOpenEvent(Event);
            dispatch(GetUYearThunk(Event));
        }
    }
    const handleYearClick = (EventName, selecterYear) => {
        dispatch(GetUYearImage({ EventName, selecterYear }))
    }
    return (
        <div className='p-5 flex gap-2'>
            {/* -----------------------------------Side Bar Area-----------------------------------*/}
            <div className='flex flex-col gap-2 bg-BlueNavyColor w-1/6 min-h-screen p-1'>
                <div className='flex items-center justify-center gap-2 bg-orange-300'>
                    <h1 className='text-lg font-semibold text-BlueNavyColor'>{sidebarTitile}</h1>
                </div>
                <div>
                    {sideBarData?.EventName?.EventData?.map((EventName, index) => (
                        <div key={index} className="flex flex-col justify-center items-center cursor-pointer" >

                            <div onClick={() => handleClick(EventName)}
                                className="flex items-center gap-2  py-2"
                            >

                                <h1 className='text-sm  text-white'>
                                    {EventName}
                                </h1>

                                {openEvent === EventName ?
                                    <ChevronDown size={15} color="white" />
                                    : <ChevronRight size={15} color="white" />
                                }

                            </div>

                            {openEvent === EventName &&
                                <div className="ml-8">
                                    {sideBarData?.EventYear?.YearData?.map((year, i) => (
                                        <div onClick={() => handleYearClick(EventName, year)} key={i} className="text-white cursor-pointer">
                                            {year}
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    ))
                    }
                </div>
            </div>
            {/* -----------------------------------Main Content Area-----------------------------------*/}
            <div className='w-5/6 p-5 bg-blue-50 rounded'>
                <div className='grid grid-cols-3 gap-2 '>
                    {EventData?.EventImage?.data?.map((item, index) => (
                        <div key={index} className='w-full h-65 flex flex-col justify-center items-center border-4 rounded border-gray-700 cursor-pointer px-1'>
                            <img src={item.Image} alt={`Image ${index}`}
                                className='w-full h-55 transition-transform duration-500 ease-in-out hover:scale-125' />
                            <h1>{item.EventName} {item.Year}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageDataComponent