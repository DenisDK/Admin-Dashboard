import React from "react";
import style from "@/app/ui/dashboard/users/users.module.css";
import { Search } from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "@/app/ui/dashboard/pogination/Pagination";

export default function UsersPage() {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={style.addButton}>Add new</button>
        </Link>
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
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
            <td>email@gmail.com</td>
            <td>03.05.2024</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <div className={style.buttons}>
                <Link href="/dashboard/users/test">
                  <button className={`${style.button} ${style.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${style.button} ${style.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
