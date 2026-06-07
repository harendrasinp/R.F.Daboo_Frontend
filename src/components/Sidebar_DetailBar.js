"use client";
import React from 'react'
import { useState } from 'react';
import { ArrowBigRight } from "lucide-react";

const SideBar_DeatilBar = ({ componentData, title }) => {
    const [aboutTitle, setAboutTitle] = useState(componentData[0].title);
    return (
        <div className="grid grid-cols-12 gap-1 p-1 h-screen md:gap-4 md:p-5">
            <aside className="col-span-4 bg-BlueNavyColor p-1 md:col-span-3">
                <h1 className="text-sm font-bold text-center text-gray-800 bg-orange-300 md:text-2xl">{title}</h1>

                {componentData.map((data, index) => (
                    <div key={index}>
                        <div onClick={() => setAboutTitle(data.title)} className="w-full text-left text-orange-300 hover:underline hover:text-purple-300 cursor-pointer flex gap-1 text-sm md:p-2">
                            <ArrowBigRight className="w-5 h-5 shrink-0"/>
                            <span>{data.title}</span>
                        </div>
                    </div>
                ))}
            </aside>

            <main className="col-span-8 bg-blue-100 p-1 rounded md:col-span-9">
                <h1 className="text-sm md:text-2xl font-bold mb-4 text-blue-50 bg-BlueNavyColor w-fit px-3 rounded-[0.2rem]">{aboutTitle}</h1>
                <p className="text-gray-900">{componentData.find(data => data.title === aboutTitle)?.description ||null}</p>
                <div>
                 {componentData.find(data => data.title === aboutTitle)?.sections?.map((section, index) => (
                    <div key={index} className="mt-4">
                        <h2 className="text-xl font-semibold text-gray-900">{section.Section}</h2>
                        <ul className="list-disc list-inside text-gray-900">
                            {section.Education.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
                </div>
                <div>
                <p className="text-amber-200">{componentData.find(data => data.title === aboutTitle)?.Extra_details || null}</p>
                </div>
            </main>

        </div>
    )
}

export default SideBar_DeatilBar