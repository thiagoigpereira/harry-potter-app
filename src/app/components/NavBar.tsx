"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-6 justify-center">
      <Link href="/" className={pathname === "/" ? "font-bold" : ""}>
        Home
      </Link>
      <Link href="/characters" className={pathname === "/characters" ? "font-bold" : ""}>
        Characters
      </Link>
      <Link href="/students" className={pathname === "/students" ? "font-bold" : ""}>
        Students
      </Link>
      <Link href="/staff" className={pathname === "/staff" ? "font-bold" : ""}>
        Staff
      </Link>
    </nav>
  );
}
