"use client"
import React, { useEffect, useState } from 'react'
import SchoolsListComponent from '../../components/SchoolsList'
import HeroSlider from '../../utils/heroImageSlider';
import { getPrincipalThought } from "@/utils/HomeAPI.js"

const Home = () => {
  const [PrincipalData, setPrincipalData] = useState(null)
  useEffect(() => {
    const fetchPrincipalThought = async () => {
      const response = await getPrincipalThought();
      if (response.success) {
        setPrincipalData(response.data);
      }
    };

    fetchPrincipalThought();
  }, []);
  return (
    <div>
      <section className="">
        <div className="">
          <HeroSlider />
        </div>
        <SchoolsListComponent />
      </section>
      <div className="w-full px-2 py-10 bg-BlueNavyColor ">
        <h2 className="text-2xl font-bold text-orange-300 mb-4 text-center">Principal's Thought</h2>
        <div className='px-10 flex flex-col justify-center items-center md:gap-5 md:flex-row '>
          <div className='relative w-80 h-70 md:w-150 md:h-70 rounded'>
            <img src={PrincipalData?.Image} alt='Principal image' className='absolute w-full h-full rounded' />
          </div>
          <div className='relative flex flex-col justify-center items-center md:justify-start md:items-start text-white w-100 h-fit md:w-250 md:h-70'>
            <div>
              <h1 className='text-orange-300 font-bold'>{PrincipalData?.name.toUpperCase()}</h1>
            </div>
            <div>
              <p className='text-justify px-4 md:px-0'>{PrincipalData?.thought}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home