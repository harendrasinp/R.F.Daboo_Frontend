"use client"
import React, { useEffect } from 'react'
import { getAllImageThunk, GetEventTitleThunk, GetImageDataForTitleOfGallery, GetUYearThunk } from '@/redux/thunkAPI/GalleryThunk'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
const Gallery = () => {
  const { EventTitleData } = useSelector((state) => state.gallery.gallery)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetImageDataForTitleOfGallery())
  }, [])
  return (
    <div className="relative bg-[url('/gallery/gallerybg2.png')] md:bg-[url('/gallery/gallerybg1.png')] bg-cover bg-center w-full min-h-screen md:bg-white flex felx-col justify-center flex-wrap">
      <div className='text-2xl font-bold text-gray-800 mt-5 '>Events Gallery</div>
      <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-2 px-2 justify-items-center mb-5'>
        {EventTitleData?.EventData?.map((data, index) => (
          <div key={index} className='w-full h-45 md:w-55 md:h-55 bg-black/80 flex flex-col justify-center items-center text-center rounded cursor-pointer'>
            <Link href={`/gallery/${data.EventName}`} className='w-full h-full flex flex-col justify-center items-center text-center'>
              <h1 className='text-white text-lg font-semibold'>{data.EventName}</h1>
            </Link>
            <img src={data.Image} alt={data.EventName} className='w-full h-40 object-cover rounded' />

          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery