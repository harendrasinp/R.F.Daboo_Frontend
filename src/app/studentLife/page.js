import React from 'react'
import DiamondImage from '../../utils/diamond';
const StudentsLife = () => {
    return (
        <div className="flex flex-col items-center mb-3">
            <div className="relative bg-linear-to-bl from-pink-700 to-sky-300 w-200 p-2 h-125 ">
            
                    <div className="absolute top-10 left-10">
                        <DiamondImage image="/hero/img1.jpeg" />
                    </div>

                    <div className="absolute top-39 left-39">
                        <DiamondImage image="/hero/img2.jpeg" />
                    </div>
                    <div className="absolute top-68 left-10">
                        <DiamondImage image="/hero/img1.jpeg" />
                    </div>
            </div>
        </div>
    )
}

export default StudentsLife