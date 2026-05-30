"use client";
import React from 'react'
import { AboutUsData } from '@/data/AboutUs';
import SideBar from '@/components/Sidebar_DetailBar';
const AboutUs = () => {
    return (
        <div>
            <SideBar title="About Us" componentData={AboutUsData}/>
        </div>
    )
}

export default AboutUs