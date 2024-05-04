import React from "react";
import style from "./transactions.module.css";
import Image from "next/image";

export const Transactions = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Latest Transactions</h2>
      <table className={style.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={style.user}>
                <Image
                  src="/noavatar.png"
                  alt="User logo"
                  width={40}
                  height={40}
                  className={style.userImage}
                />
                User Name
              </div>
            </td>
            <td>
              <span className={`${style.status} ${style.pending}`}>
                Pending
              </span>
            </td>
            <td>1.05.2024</td>
            <td>$2.28</td>
          </tr>
          <tr>
            <td>
              <div className={style.user}>
                <Image
                  src="/noavatar.png"
                  alt="User logo"
                  width={40}
                  height={40}
                  className={style.userImage}
                />
                User Name
              </div>
            </td>
            <td>
              <span className={`${style.status} ${style.done}`}>Done</span>
            </td>
            <td>1.05.2024</td>
            <td>$2.28</td>
          </tr>
          <tr>
            <td>
              <div className={style.user}>
                <Image
                  src="/noavatar.png"
                  alt="User logo"
                  width={40}
                  height={40}
                  className={style.userImage}
                />
                User Name
              </div>
            </td>
            <td>
              <span className={`${style.status} ${style.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>1.05.2024</td>
            <td>$2.28</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
