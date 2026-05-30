import React from 'react'
import SideBar from '@/components/Sidebar_DetailBar';
import { awardsData } from '@/data/awardsData';
const AwardsPage = () => {
  return (
    <div>
        <SideBar title="Awards" componentData={awardsData} />
    </div>
  )
}

export default AwardsPage