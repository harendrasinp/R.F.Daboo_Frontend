"use client";
import React from 'react'
import { AboutUsData } from '@/data/AboutUs';
import { useState } from 'react';
import { ArrowBigRight } from "lucide-react";

const AboutUs = () => {
    const [aboutTitle, setAboutTitle] = useState(AboutUsData[0].title);
    return (
        <div className="grid grid-cols-12 gap-4 p-5">
            <aside className="col-span-3 bg-sky-900 p-5">
                <h1 className="text-2xl font-bold text-center text-white">About Us</h1>

                {AboutUsData.map((data, index) => (
                    <div key={index} className="p-2" >
                        <div onClick={() => setAboutTitle(data.title)} className="w-full text-left  text-white hover:underline cursor-pointer flex  gap-2">
                            <ArrowBigRight className="w-5 h-5 shrink-0"/>
                            <span>{data.title}</span>
                        </div>
                    </div>
                ))}
            </aside>

            <main className="col-span-9 bg-gray-200 p-5 rounded">
                <h1 className="text-2xl font-bold mb-4">{aboutTitle}</h1>

                <p className="text-gray-700">{AboutUsData.find(data => data.title === aboutTitle)?.description || "Please select a topic from the left to see the information."}</p>
            </main>

        </div>
    )
}

export default AboutUs