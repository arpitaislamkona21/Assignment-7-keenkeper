"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaChartPie, FaClock } from "react-icons/fa";

export default function Navbar() {
  const path = usePathname();

  const linkStyle = (p) =>
    `flex items-center gap-2 ${
      path === p ? "text-green-600 font-bold" : ""
    }`;

  return (
    <div className="flex justify-between p-4 shadow">
      <h1 className="font-bold text-xl">KeenKeeper</h1>

      <div className="flex gap-6">
        <Link href="/" className={linkStyle("/")}>
          <FaHome /> Home
        </Link>
        <Link href="/timeline" className={linkStyle("/timeline")}>
          <FaClock /> Timeline
        </Link>
        <Link href="/stats" className={linkStyle("/stats")}>
          <FaChartPie /> Stats
        </Link>
      </div>
    </div>
  );
}