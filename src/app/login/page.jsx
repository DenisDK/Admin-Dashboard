import React from "react";
import style from "@/app/ui/login/login.module.css";

export default function LoginPage() {
  return (
    <div className={style.container}>
      <form action="" className={style.form}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
}
