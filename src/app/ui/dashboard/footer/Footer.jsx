import React from 'react'
import style from "./footer.module.css"

export const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>DenisDK Dev</div>
      <div className={style.text}>© All rights reserved.</div>
    </div>
  )
}
