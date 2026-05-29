import React from 'react'
import Image from 'next/image';
import { FacilitiesList } from "../../data/Campus";
const Campus = () => {
    return (
        <div>
            <div className="w-full flex flex-col justify-center items-center mb-3 bg-amber-100">
                <Image src="/campus/img1.jpeg" alt="Campus Image" width={950} height={200} className="object-cover" />
                <div className="p-5">
                    <h1 className="text-3xl font-bold mb-4 text-sky-800">Our Campus</h1>
                    <p className="text-sky-800">
                        Welcome to our beautiful campus! We are proud to offer a nurturing environment where students can thrive academically and personally.
                    </p>
                </div>
            </div>
            <div>
                <h1 className="text-center text-2xl font-bold text-white mb-4 bg-sky-800">Facilities</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
                    {FacilitiesList.map((data,index)=>(
                        <div key={index} className="bg-white rounded-lg shadow-md shadow-sky-800 p-4 flex flex-col items-center">
                            <h3 className="text-lg font-semibold">{data.name}</h3>
                            <p className="text-gray-600">{data.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Campus