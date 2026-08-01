"use client"
import React, { useEffect } from 'react'
import { GetImageDataThunk } from '@/redux/thunkAPI/GalleryThunk'
import { useDispatch, useSelector } from 'react-redux'
const Gallery = () => {
  const { EventName } = useSelector((state) => state.gallery.gallery)
  console.log("EventName", EventName)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetImageDataThunk())
  }, [])
  return (
    <div className='w-full flex flex-col justify-center items-center bg-yellow-500'>
      <div className='text-2xl font-bold text-gray-800 mb-4'>Events Gallery</div>
      <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-2 px-2 justify-items-center'>
        {EventName?.EventData?.map((Event, index) => (
          <div key={index} className='w-full h-45 md:w-45 md:h-45 bg-blue-500 flex flex-col justify-center items-center text-center'>
            <h1 className='text-white text-lg font-semibold'>{Event}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery