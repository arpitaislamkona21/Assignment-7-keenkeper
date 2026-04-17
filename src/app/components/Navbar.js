"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaChartPie, FaClock } from "react-icons/fa";

export default function Navbar() {
  const path = usePathname();

  const linkStyle = (p) => {
  const isActive = path === p;
  return `flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
    isActive 
      ? "bg-[#064e3b] text-white font-bold" // একটিভ থাকলে ব্যাকগ্রাউন্ড গাঢ় সবুজ এবং লেখা সাদা
      : "text-gray-600 hover:bg-gray-100"   // একটিভ না থাকলে হালকা ধূসর লেখা
  }`;
};

  return (
    <div className="flex justify-between p-4 shadow">
      <h1 className="font-extrabold text-black text-xl">Keen<span className="text-green-900 font-bold">Keeper</span></h1>

      <div className="flex gap-6 ">
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