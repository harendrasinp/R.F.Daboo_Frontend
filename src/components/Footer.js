import React from 'react'
import { navItems } from '@/data/navItems'
import { contactData } from '@/data/contactData'
import { Square } from "lucide-react"
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="flex justify-center bg-slate-800 text-white text-sm p-3">
      <div className="flex flex-col md:flex-row justify-center md:w-1/2 md:justify-evenly">
        <div className="w-88 flex items-start justify-between md:w-90">
          <div className="w-35 flex flex-col items-start justify-start border-r-2 border-gray-600">
            <h1 className="text-lg font-bold mb-2 text-orange-300">Quick Links</h1>
            {navItems.map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                <Square className="w-2 h-2 shrink-0 text-orange-300 bg-orange-300 " />
                <a href={item.path} className="hover:underline cursor-pointer flex flex-col items-start justify-start text-sm p-1">
                  {item.name}
                </a>
              </div>
            ))}
          </div>
          <div className="w-45 md:border-r-2 border-gray-600 ">
            <h1 className="text-lg font-bold mb-2 text-left text-orange-300">Contact Us</h1>
            {contactData.map((item, index) => (
              <div key={index} className="flex flex-col items-start justify-start text-sm p-1">
                <div className="flex items-center gap-1">
                  <Square className="w-2 h-2 shrink-0 text-orange-300 bg-orange-300 " />
                  <p className="font-bold">{item.title}</p>
                </div>
                <p className="text-left">{item.data}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border-t-2 border-gray-600 md:border-t-0 md:items-start md:justify-start">
          <div className="mb-2">
            <h1 className="text-lg font-bold text-orange-300">Follow Us</h1>
          </div>
          <div className="flex md:flex-col items-start justify-center gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 flex items-center justify-center gap-2">
            <Square className="w-2 h-2 shrink-0 text-orange-300 bg-orange-300 " />
              <FaFacebook size={24} />
              Facebook
            </a>
            <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 flex items-center justify-center gap-2">
            <Square className="w-2 h-2 shrink-0 text-orange-300 bg-orange-300 " />
              <FaInstagram size={24} />
              Instagram
            </a>
            <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black flex items-center justify-center gap-2">
            <Square className="w-2 h-2 shrink-0 text-orange-300 bg-orange-300 " />
              <FaXTwitter size={24} />
              Twitter
            </a>
            {/* Add more social media icons and links as needed */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer