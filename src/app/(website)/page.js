import React from 'react'
import SchoolsListComponent from '../../components/SchoolsList'
import HeroSlider from '../../utils/heroImageSlider';
import {principalData} from '../../data/PrincipalData';
import Image from 'next/image';
const Home = () => {
  return (
    <div>
      <section className="">
        <div className="">
          <HeroSlider />
        </div>
        <SchoolsListComponent />
      </section>
      <div className="w-full px-2 py-10 bg-BlueNavyColor ">
        <h2 className="text-2xl font-bold text-BlueNavyColor mb-4 text-center">Principal's Of The Schools</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {principalData.map((data,index) => (
            <div key={index} className="bg-orange-300  p-4 flex flex-col items-center">
              <Image
                src={data.image}
                alt={data.name}
                width={150}
                height={200}
                className="object-cover mb-4"
              />  
              <h3 className="text-sm text-center text-BlueNavyColor font-semibold md:text-lg">{data.name}</h3>
              <p className="text-white">{data.school}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home