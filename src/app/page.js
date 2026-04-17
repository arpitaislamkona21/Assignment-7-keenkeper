"use client";
import React from 'react';
import friends from "./data/friends.json";
import FriendCard from "./components/FriendCard";
export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
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
      
    </div>
  );
}
