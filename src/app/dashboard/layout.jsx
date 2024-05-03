import React from 'react'
import { Sidebar } from '../ui/dashboard/sidebar/Sidebar'
import { Navbar } from '../ui/dashboard/navbar/Navbar'
import style from '../ui/dashboard/dashboard.module.css'
import { Footer } from '../ui/dashboard/footer/footer'

export default function layout({children}) {
  return (
    <div className={style.container}>
      <div className={style.menu}>
         <Sidebar/>
      </div>
      <div className={style.content}>
         <Navbar/>
         {children}
         <Footer/>
      </div>
    </div>
  )
}
