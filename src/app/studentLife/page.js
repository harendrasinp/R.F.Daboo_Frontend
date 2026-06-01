import React from 'react'
import DiamondImage from '../../utils/diamond';
import Image from 'next/image';
import { studenstLifeheroPhotos } from '@/data/studenstLife';
const StudentsLife = () => {
    return (
        <div className="flex flex-col items-center mb-3">
            <div className="relative w-200 p-2 h-125 shadow-2xl shadow-indigo-800">
                    <Image src="/studentsLife/herro_bg2.jpg" width={800} height={500} alt="Image 1" 
                    className="w-full h-full object-cover  inset-0" />
                    {/* ---------------------first row------------------ */}
                    {studenstLifeheroPhotos.map((photo, index) => (
                        <div key={index} className={`absolute ${photo.top} ${photo.left}`}>
                            <DiamondImage image={photo.image} />
                        </div>
                    ))}
            </div>
            <div className="w-200 mt-2">
                <h1 className="text-3xl font-bold text-sky-800">STUDENST LIFE</h1>
            </div>
        </div>
    )
}

export default StudentsLife