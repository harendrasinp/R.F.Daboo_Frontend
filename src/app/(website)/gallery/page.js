import React from 'react'
import ImageDataComponent from '@/components/ImageDataComponent'
import { imageData } from '@/data/GalleryData'
const Gallery = () => {
  return (
    <div>
      <ImageDataComponent sideBarData={imageData} sidebarTitile="Gallery" />
    </div>
  )
}

export default Gallery