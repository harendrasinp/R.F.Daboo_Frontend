import React from 'react'
import { navItems } from '@/data/navItems'
import { contactData } from '@/data/contactData'
const Footer = () => {
  return (
    <div className="bg-sky-950 text-white p-4 text-center flex items-center justify-center">
      <div className="w-1/2 grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-lg font-bold mb-2">Quick Links</h1>
          {navItems.map((item, index) => (
            <a key={index} href={item.path} className="hover:underline cursor-pointer flex flex-col items-start justify-start text-sm p-1">
              {item.name}
            </a>
          ))}
        </div>
        <div>
          <h1 className="text-lg font-bold mb-2">Contact Us</h1>
          {contactData.map((item, index) => (
            <div key={index} className="flex flex-col items-start justify-start text-sm p-1"> 
              <span className="font-semibold">{item.title}</span>
              <span >{item.data}</span>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Footer