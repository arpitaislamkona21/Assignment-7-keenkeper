"use client";
import React from 'react';
import friends from "./data/friends.json";
import Navbar from "./components/Navbar";
import FriendCard from "./components/FriendCard";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

// যদি StatsCards ফাইল থাকে তবে ইমপোর্ট রাখুন, নাহলে নিচের কমেন্ট করা অংশটি ব্যবহার করুন
// import StatsCards from "./components/StatsCards"; 

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Friends to keep close in your life
          </h1>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the <br/>relationships that matter most.
          </p>
          <button className="bg-[#064e3b] text-white px-6 py-2 rounded-md font-medium flex items-center mx-auto">
            <span className="mr-2">+</span> Add a Friend
          </button>
        </div>

        {/* Statistics Section (সরাসরি কোড দিয়ে দিলাম যাতে এরর না আসে) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 text-center">
          {[
            { label: "Total Friends", value: "10" },
            { label: "On Track", value: "3" },
            { label: "Need Attention", value: "6" },
            { label: "Interactions This Month", value: "12" },
          ].map((stat, i) => (
            <div key={i} className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Friends Grid Section */}
        <div className="mt-16">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Friends</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {friends && friends.map((f) => (
              <FriendCard key={f.id} f={f} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer Section - সাধারণ HTML ট্যাগ হিসেবে ব্যবহার করুন */}
      <footer className="bg-[#064e3b] text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-6xl font-bold mb-2"><span className='font-extrabold'>Keen</span>Keeper</h2>
          <p className='text-white'>Your personal shelf of meaningful connections.Browse, tend,and nurture the relationships that matter most.</p>
          
          <div className='py-2.5'>
           <div> <p >Social Links</p></div>
            <div className="flex justify-center gap-4 py-2.5 mb-8">
  {/* Facebook */}
  <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all">
    <FaFacebookF className="text-white text-xs" />
  </a>

  {/* Instagram */}
  <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all">
    <FaInstagram className="text-white text-xs" />
  </a>

  {/* Twitter (বা X) */}
  <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all">
    <FaTwitter className="text-white text-xs" />
  </a>
</div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[10px] opacity-60 border-t border-white/10 pt-6">
            <span>© 2024 KeenKeeper. All rights reserved.</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
