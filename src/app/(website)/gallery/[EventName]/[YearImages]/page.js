import CredentialsApi from '@/utils/credentialsApi';
import React from 'react'

const YearImages = async ({ params }) => {
    const { EventName, YearImages } = await params;
    console.log(EventName, YearImages)
    const response = await CredentialsApi.get(`/admin/getYearImage/${EventName}/${YearImages}`);
    const data = response.data;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">{
            data?.data?.map((item, index) => (
               <div key={index}>
                   <img
                       src={item.Image}
                       alt={`Image ${index + 1}`}
                       className="w-125 h-85 object-cover"
                   />
               </div>
            ))
        }</div>
    )
}

export default YearImages