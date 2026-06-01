import React from 'react'
import SideBar_DeatilBar from '@/components/Sidebar_DetailBar'
import { AcademicsData } from '@/data/AcademicsData'
const Acadamics = () => {
  return (
    <div>
        <SideBar_DeatilBar componentData={AcademicsData} title="ACADEMICS" />
    </div>
  )
}

export default Acadamics