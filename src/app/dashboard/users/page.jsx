import React from "react";
import style from "@/app/ui/dashboard/users/users.module.css";
import { Search } from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "@/app/ui/dashboard/pogination/Pagination";
import { fetchUsers } from "@/app/lib/data";

export default async function UsersPage() {
  const users = await fetchUsers();

  console.log(users);

  return (
    <div className={style.container}>
      <div className={style.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={style.addButton}>Add New</button>
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
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={style.user}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={style.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className={style.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${style.button} ${style.view}`}>
                      View
                    </button>
                  </Link>
                  {/* <form action={deleteUser}> */}
                  <input type="hidden" name="id" value={user.id} />
                  <button className={`${style.button} ${style.delete}`}>
                    Delete
                  </button>
                  {/* </form> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
      {/* count={count} */}
    </div>
  );
}
