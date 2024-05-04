"use client";

import React from "react";
import style from "./menuLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`${style.container} ${pathname === item.path && style.active}`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};
