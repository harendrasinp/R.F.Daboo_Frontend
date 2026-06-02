import React from 'react'
import { navItems } from '@/data/navItems'
import { contactData } from '@/data/contactData'
import { Square } from "lucide-react"
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="flex justify-center bg-sky-950 text-white p-2 text-sm">
      <div className="flex justify-center gap-1 md:gap-15">
        <div className="flex flex-col items-start justify-start border-r border-gray-600 pr-1 md:pr-5">
          <h1 className="text-lg font-bold mb-2">Quick Links</h1>
          {navItems.map((item, index) => (
            <div key={index} className="flex items-center gap-1">
              <Square className="w-2 h-2 shrink-0 text-amber-300 bg-amber-300 " />
              <a href={item.path} className="hover:underline cursor-pointer flex flex-col items-start justify-start text-sm p-1">
                {item.name}
              </a>
            </div>
          ))}
        </div>
        <div className="w-45  border-r border-gray-600 md:pr-5">
          <h1 className="text-lg font-bold mb-2 text-left">Contact Us</h1>
          {contactData.map((item, index) => (
            <div key={index} className="flex flex-col items-start justify-start text-sm p-1">
              <div className="flex items-center gap-1">
                <Square className="w-2 h-2 shrink-0 text-amber-300 bg-amber-300 " />
                <p className="font-semibold">{item.title}</p>
              </div>
              <p className="text-left">{item.data}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-lg font-bold mb-2 flex text-left">Follow Us</h1>
          <div className="flex flex-col items-start justify-center gap-4">
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 flex gap-2">
              <FaFacebook size={24} />
              Facebook
            </a>
            <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 flex gap-2">
              <FaInstagram size={24} />
              Instagram
            </a>
            <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black flex gap-2">
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