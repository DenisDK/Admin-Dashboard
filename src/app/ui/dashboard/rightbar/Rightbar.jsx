import React from 'react'
import style from './rightbar.module.css'
import Image from 'next/image'

// Icons 
import { MdPlayCircleFilled } from "react-icons/md";
import { MdReadMore } from "react-icons/md";

export const Rightbar = () => {
  return (
    <div className={style.container}>
      <div className={style.item}>
         <div className={style.bgContainer}>
            <Image className={style.bg} src="/astronaut.png" alt='Astronaut image' fill/>
         </div>
         <div className={style.text}>
            <span className={style.notification}>🔥 Available Now</span>
            <h3 className={style.title}>How to use the new version of the admin dashboard?</h3>
            <span className={style.subtitle}>Takes 4 minutes to learn</span>
            <p className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam perferendis aliquam facere quam ipsa qui, sequi, rem repellendus harum eius amet voluptatum explicabo assumenda, consequuntur aut nisi. Exercitationem, eos atque?</p>
            <button className={style.button}>
               <MdPlayCircleFilled/>
               Watch
            </button>
         </div>
      </div>
      <div className={style.item}>
         <div className={style.text}>
            <span className={style.notification}>🚀 Coming Soon</span>
            <h3 className={style.title}>New server actions are available, partial pre-rendering is coming
            up!</h3>
            <span className={style.subtitle}>Boost your productivity</span>
            <p className={style.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam perferendis aliquam facere quam ipsa qui, sequi, rem repellendus harum eius amet voluptatum explicabo assumenda, consequuntur aut nisi. Exercitationem, eos atque?</p>
            <button className={style.button}>
               <MdReadMore/>
               Learn
            </button>
         </div>
      </div>
    </div>
  )
}
