import React from "react";
import style from "./search.module.css";

// Icons
import { MdSearch } from "react-icons/md";

export const Search = ({ placeholder }) => {
  return (
    <div className={style.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={style.input} />
    </div>
  );
};
