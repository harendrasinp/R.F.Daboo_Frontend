import React from 'react'
import { SchoolsList } from '../data/schoolsList';
import Link from 'next/link';
const CentralSidebar = () => {
    return (
        <>
            <aside className="col-span-3 bg-violet-50 p-2 text-gray-800">
                <h1 className="text-center bg-gray-800 text-orange-300 p-2 font-bold">OUR SCHOOLS</h1>
                {SchoolsList.map((school, index) => (
                    <div key={index} className="mt-2 text-sm">
                        <div className="flex items-start justify-start">
                            <div>{index + 1}.</div>
                            <Link href={school.path} className="hover:text-orange-400 hover:underline">
                                {school.name}
                            </Link>
                        </div>
                    </div>
                ))}
            </aside>
        </>
    )
}

export default CentralSidebar