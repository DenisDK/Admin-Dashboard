import React from 'react'
import style from './pagination.module.css'

export const Pagination = () => {
  return (
    <div className={style.container}>
      <button className={style.button} disabled>Previous</button>
      <button className={style.button}>Next</button>
    </div>
  )
}
