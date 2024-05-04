import React from "react";
import style from "./sidebar.module.css";

// Icons

import { MdDashboard } from "react-icons/md";
import { MdSupervisedUserCircle } from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { MdAnalytics } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdHelpCenter } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { MenuLink } from "./menuLink/MenuLink";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export const Sidebar = () => {
  return (
    <div className={style.container}>
      <div className={style.user}>
        <Image
          className={style.userImage}
          src="/noavatar.png"
          alt="User logo"
          width={50}
          height={50}
        />
        <div className={style.userDetail}>
          <span className={style.username}>User name</span>
          <span className={style.userTitle}>Admin</span>
        </div>
      </div>
      <ul className={style.list}>
        {menuItems.map((cat) => (
          <li key={cat.list}>
            <span className={style.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
      <button className={style.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
};
