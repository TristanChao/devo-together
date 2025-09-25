import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FaCalendarAlt, FaSearch, FaHome } from "react-icons/fa"
import { FaPenToSquare } from "react-icons/fa6";
import { GoHomeFill, GoPersonFill } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";
import { RiHomeFill } from "react-icons/ri";

export default function Navbar() {
  return (
    <div className="z-50 fixed w-full flex justify-center py-3 bg-[var(--color-background)]">
      <div className="flex justify-between items-center w-[200px]">
        <Link href="/daily"><FaCalendarAlt className="w-7 h-7"/></Link>
        <Link href="/search"><FaSearch className="w-7 h-7"/></Link>
        <Link href="/"><GoHomeFill className="w-10 h-10"/></Link>
        <Link href="/create"><FaPenToSquare className="w-7 h-7"/></Link>
        <Link href="/profile"><IoPersonSharp className="w-7 h-7"/></Link>
      </div>
    </div>
  )
}