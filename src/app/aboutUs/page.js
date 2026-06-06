"use client";
import React from 'react'
import { AboutUsData } from '@/data/AboutUs';
import SideBar_DeatilBar from '@/components/Sidebar_DetailBar';
const AboutUs = () => {
    return (
        <div>
            <SideBar_DeatilBar title="About Us" componentData={AboutUsData}/>
        </div>
    )
}

export default AboutUs