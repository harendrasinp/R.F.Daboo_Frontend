"use client"
import React, { useState } from 'react'
import { ChevronDown, ChevronRight } from "lucide-react"
const ImageDataComponent = ({sideBarData,sidebarTitile}) => {
    const [selectedTitle, setSelectedTitle] = useState(null)
    const [selectedYear, setSelectedYear] = useState(null)
    const handleTitleClick = (title) => {
        setSelectedTitle(title === selectedTitle ? null : title)
        // setSelectedYear(null)
    }
    const handleYearClick = (year) => {
        setSelectedYear(year)
    }
    return (
        <div className="flex p-2 gap-2">
            <div className='bg-orange-400 w-1/4 p-2 h-96'>
                <div className='text-xl font-bold mb-4 text-amber-50 text-center bg-gray-800'>{sidebarTitile}</div>
                {sideBarData.map((item, index) => (
                    <div key={index}>
                        <div onClick={() => handleTitleClick(item.title)} className='cursor-pointer flex'>
                            {selectedTitle == item.title ? <ChevronDown className='w-5 h-5' /> : <ChevronRight className='w-5 h-5' />}
                            {item.title}
                        </div>
                        <div className='ml-8'>
                            {selectedTitle == item.title && (
                                <ul className='list-disc'>
                                    {item.years.map((years, index) => (
                                        <li key={index} onClick={() => handleYearClick(years.year)} className='cursor-pointer hover:text-blue-50 text-sm'>{years.year}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                ))}
            </div>
            <div className='bg-blue-100 w-1/1'>
                {sideBarData.map((item) => (
                    item.years.map((year) => (
                        year.year === selectedYear && (
                            <div key={year.year} className='p-4'>
                                <h2 className='text-xl font-bold mb-2'>{year.year}</h2>
                                <div className='grid grid-cols-3 gap-4'>
                                    {year.photos.map((photo) => (
                                        <div key={photo.id} className='border rounded shadow'>
                                            <img src={photo.image} alt={photo.caption} className='w-full h-auto' />
                                            <p className='text-center p-2'>{photo.caption}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    ))
                ))}
            </div>
        </div>
    )
}

export default ImageDataComponent