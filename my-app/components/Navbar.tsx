"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"

import { AiFillHome } from "react-icons/ai";
import { FaCalendarAlt, FaSearch, FaHome } from "react-icons/fa"
import { FaPenToSquare } from "react-icons/fa6";
import { GoHomeFill, GoPersonFill } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";
import { RiHomeFill } from "react-icons/ri";

export default function Navbar() {
  const currentPath = usePathname();

  const mdIconClass = "w-7 h-7";
  const lgIconClass = "w-10 h-10";

  const blueIcon = " text-blue-500"
  
  return (
    <div className="z-50 fixed w-full flex items-center py-3 bg-background">
      <div className="hidden lg:inline-block lg:basis-1/4">
        <Link href="/" className="text-xl ml-5 hidden sm:inline">DevoTogether</Link>
      </div>

      <div className="basis-full lg:basis-1/2">
        <div className="justify-self-center flex justify-between items-center w-[280px] sm:w-[400px]">
          <Link href="/daily"><FaCalendarAlt className={currentPath === "/daily" ? mdIconClass+blueIcon : mdIconClass}/></Link>
          <Link href="/search"><FaSearch className={currentPath === "/search" ? mdIconClass+blueIcon : mdIconClass}/></Link>
          <Link href="/"><GoHomeFill className={currentPath === "/" ? lgIconClass+blueIcon : lgIconClass}/></Link>
          <Link href="/create"><FaPenToSquare className={currentPath === "/create" ? mdIconClass+blueIcon : mdIconClass}/></Link>
          <Link href="/profile"><IoPersonSharp className={currentPath === "/profile" ? mdIconClass+blueIcon : mdIconClass}/></Link>
        </div>
      </div>
    </div>
  )
}