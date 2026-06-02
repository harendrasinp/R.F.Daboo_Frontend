import React from 'react'
import SchoolsListComponent from '../components/SchoolsList'
import HeroSlider from '../utils/heroImageSlider';
import {principalData} from '../data/PrincipalData';

const Home = () => {
  return (
    <div>
      <section className="">
        <div className="">
          <HeroSlider />
        </div>
        <SchoolsListComponent />
      </section>
      <div className="w-full px-5 py-10 bg-sky-800 ">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Principal's Of The Schools</h2>
        <div className="grid grid-cols-6 md:grid-cols-3 gap-6">
          {principalData.map((data,index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <h3 className="text-lg font-semibold">{data.name}</h3>
              <p className="text-gray-600">{data.school}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home