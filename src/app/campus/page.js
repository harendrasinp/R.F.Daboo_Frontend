import React from 'react'
import Image from 'next/image';
import { Square } from "lucide-react"
import { FacilitiesList } from "../../data/Campus";
import{CampusImage} from "../../data/Campus";
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
                <h1 className="text-center text-2xl font-bold text-white mb-4 bg-sky-800">School's Facilities</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
                    {FacilitiesList.map((data, index) => (
                        <div key={index}>
                            <div className="flex gap-2 mb-1">
                                <Square className="w-3 h-3 shrink-0 text-amber-300 bg-amber-300 " />
                                <div>
                                    <h2 className="text-lg font-semibold text-sky-800">{data.name}</h2>
                                    <p className="text-sky-700">{data.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h1 className="text-center text-2xl font-bold text-white mb-4 bg-sky-800">Campus Images</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
                    {CampusImage.map((data, index) => (
                        <div key={index}  className=" relative w-full">
                            <Image src={data.image} alt={data.alt} width={300} height={500} className="w-full h-64 object-cover"/>
                            <h1 className=" absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-2xl text-white text-lg font-semibold text-center p-2">{data.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Campus