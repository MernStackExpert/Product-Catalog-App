"use client"
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Groceries", href: "/items" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Our Services", href: "/services" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-base-100/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 h-16">
        
        {/* Logo & Mobile Dropdown */}
        <div className="flex items-center gap-4">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-medium">
              {navLinks.map(link => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className={`transition-colors ${isActive ? "text-primary font-bold" : "hover:text-primary"}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <Link href="/" className="text-2xl font-black flex items-center gap-1 tracking-tighter cursor-pointer">
            <span className="text-primary italic">Fresh</span>Up
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold gap-4">
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className={`transition-colors px-2 py-1 rounded ${isActive ? "text-primary border-b-2 border-primary" : "hover:text-primary"}`}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 md:gap-4">

          {/* Search */}
          <div className="hidden md:flex items-center relative group">
            <input 
              type="text" 
              placeholder="Search groceries..." 
              className="input input-sm input-bordered rounded-full w-40 focus:w-60 transition-all duration-300 pl-8" 
            />
            <FaSearch className="absolute left-3 text-gray-400 text-xs" />
          </div>

          {/* User */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-base-200 shadow-sm">
              <div className="w-9 rounded-full">
                <Image src="https://i.pravatar.cc/150?u=nirob" alt="User" width={36} height={36} className="rounded-full" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-[1] mt-3 w-52 p-2 shadow-2xl border border-base-200 font-medium">
              <li><a className="py-3">Profile Settings</a></li>
              <li><a className="py-3">My Orders</a></li>
              <li><a className="py-3 text-error">Logout</a></li>
            </ul>
          </div>

          <Link href="/login" className="btn btn-primary btn-sm md:btn-md rounded-full px-6 shadow-lg shadow-primary/20 hidden sm:flex">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
