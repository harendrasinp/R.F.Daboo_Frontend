import React from 'react'
import SideBar_DeatilBar from '@/components/Sidebar_DetailBar'
import { EventsData } from '@/data/EventData'
const Events = () => {
  return (
    <div>
        <SideBar_DeatilBar componentData={EventsData} title={"Events"}/>
    </div>
  )
}

export default Events