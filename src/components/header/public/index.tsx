"use client";

import Link from "next/link";
import "./style.scss";
import { usePathname, useRouter } from "next/navigation";
import NavLink from "@/components/shares/NavLink";

const PublicHeader = () => {
  const router = useRouter();
  const namePath = usePathname();

  console.log(router);
  console.log(namePath);

  return (
    <header id="header">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
      <NavLink href="/products">Products</NavLink>
      <NavLink href="/login">Login</NavLink>
      <NavLink href="/register">Register</NavLink>
    </header>
  );
};

export default PublicHeader;
