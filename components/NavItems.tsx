"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "my-journey" },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6">
      {navItems.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={cn(
            "text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group",
            pathname === href && "text-emerald-700 font-semibold"
          )}
        >
          {label}
          <span
            className={cn(
              "absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full",
              pathname === href && "w-full"
            )}
          />
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
