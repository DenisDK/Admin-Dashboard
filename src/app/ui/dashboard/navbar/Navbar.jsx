'use client'

import React from 'react'
import style from './navbar.module.css'
import { usePathname } from 'next/navigation'

// Icons

import { MdNotifications } from "react-icons/md";
import { MdOutlineChat } from "react-icons/md";
import { MdPublic } from "react-icons/md";
import { MdSearch } from "react-icons/md";

export const Navbar = () => {

   const pathname = usePathname();

  return (
    <div className={style.container}>
      <div className={style.title}>{pathname.split("/").pop()}</div>
      <div className={style.menu}>
         <div className={style.search}>
            <MdSearch/>
            <input type="text" placeholder='Search...' className={style.input}/>
         </div>
         <div className={style.icons}>
         <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
         </div>
      </div>
    </div>
  )
}
