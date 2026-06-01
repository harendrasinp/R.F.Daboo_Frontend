"use client";
import React from 'react'
import { useState } from 'react';
import { ArrowBigRight } from "lucide-react";

const SideBar_DeatilBar = ({ componentData, title }) => {
    const [aboutTitle, setAboutTitle] = useState(componentData[0].title);
    return (
        <div className="grid grid-cols-12 gap-4 p-5">
            <aside className="col-span-3 bg-sky-900 p-5">
                <h1 className="text-2xl font-bold text-center text-white bg-slate-800">{title}</h1>

                {componentData.map((data, index) => (
                    <div key={index} className="p-2" >
                        <div onClick={() => setAboutTitle(data.title)} className="w-full text-left  text-white hover:underline cursor-pointer flex gap-2 text-sm">
                            <ArrowBigRight className="w-5 h-5 shrink-0"/>
                            <span>{data.title}</span>
                        </div>
                    </div>
                ))}
            </aside>

            <main className="col-span-9 bg-gray-500 p-5 rounded">
                <h1 className="text-2xl font-bold mb-4 text-sky-800 bg-orange-200 w-fit px-3 rounded-[0.2rem]">{aboutTitle}</h1>
                <p className="text-amber-200">{componentData.find(data => data.title === aboutTitle)?.description ||null}</p>
                <div>
                 {componentData.find(data => data.title === aboutTitle)?.sections?.map((section, index) => (
                    <div key={index} className="mt-4">
                        <h2 className="text-xl font-semibold text-gray-900">{section.Section}</h2>
                        <ul className="list-disc list-inside text-amber-200">
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