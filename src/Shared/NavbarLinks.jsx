"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Groceries", href: "/items" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Our Services", href: "/services" },
];

export default function NavbarLinks() {
  const pathname = usePathname();

  return (
    <ul className="menu menu-horizontal px-1 font-semibold gap-2">
      {navLinks.map(link => {
        const isActive = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`transition-colors ${
                isActive ? "text-primary border-b-2 border-primary" : "hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
