"use client"
import React, { useEffect } from 'react'
import ImageDataComponent from '@/components/ImageDataComponent'
import {GetImageDataThunk} from '@/redux/thunkAPI/GalleryThunk'
import { useDispatch, useSelector } from 'react-redux'
const Gallery = () => {
  const EventData=useSelector((state)=>state.gallery.gallery)
  
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(GetImageDataThunk())
  },[])
  return (
    <div>
      <ImageDataComponent sideBarData={EventData} sidebarTitile="Event Gallerys" />
    </div>
  )
}

export default Gallery