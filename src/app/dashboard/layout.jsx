import React from 'react'
import { Sidebar } from '../ui/dashboard/sidebar/Sidebar'
import { Navbar } from '../ui/dashboard/navbar/Navbar'

export default function layout({children}) {
  return (
    <div>
      <div>
         <Sidebar/>
      </div>
      <div>
         <Navbar/>
         {children}
      </div>
    </div>
  )
}
