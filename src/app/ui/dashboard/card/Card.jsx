import React from "react";
import style from "./card.module.css";

// Icons
import { MdSupervisedUserCircle } from "react-icons/md";

export const Card = () => {
  return (
    <div className={style.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={style.texts}>
        <span className={style.title}>Total Users</span>
        <span className={style.number}>10.228</span>
        <span className={style.detail}>
          <spanc className={style.positive}>12%</spanc> more then previous week
        </span>
      </div>
    </div>
  );
};
