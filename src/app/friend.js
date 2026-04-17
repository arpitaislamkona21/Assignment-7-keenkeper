"use client";
import React, { use } from "react";
import friends from "../../data/friends.json";

export default function FriendDetails({ params }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const friend = friends.find((f) => f.id === parseInt(id));

  if (!friend) return <div className="p-20 text-center">Friend not found!</div>;

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* মেইন কন্টেইনার - ২ কলাম গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* বাম পাশের প্রোফাইল কার্ড */}
        <div className="md:col-span-1 bg-white shadow-sm border border-gray-100 rounded-2xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <img
              src={friend.image || "/default-avatar.png"}
              alt={friend.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-50"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{friend.name}</h1>
          <div className="flex flex-col items-center gap-2 mt-2">
             <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full uppercase">Overdue</span>
             <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-bold rounded-full uppercase">Family</span>
          </div>
          <p className="text-gray-500 italic mt-4">"{friend.description || 'Former colleague, great mentor'}"</p>
          
          {/* অ্যাকশন বাটনসমূহ */}
          <div className="mt-8 space-y-3">
             <button className="w-full py-2 border border-gray-200 rounded-lg flex items-center justify-center gap-2 text-sm hover:bg-gray-50">⏰ Snooze 2 Weeks</button>
             <button className="w-full py-2 border border-gray-200 rounded-lg flex items-center justify-center gap-2 text-sm hover:bg-gray-50">📥 Archive</button>
             <button className="w-full py-2 text-red-500 flex items-center justify-center gap-2 text-sm">🗑️ Delete</button>
          </div>
        </div>

        {/* ডান পাশের স্ট্যাটাস এবং চেক-ইন সেকশন */}
        <div className="md:col-span-2 space-y-8">
          {/* উপরের ৩টি স্ট্যাটাস বক্স */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
              <p className="text-3xl font-bold text-gray-800">62</p>
              <p className="text-gray-400 text-xs mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
              <p className="text-3xl font-bold text-gray-800">30</p>
              <p className="text-gray-400 text-xs mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
              <p className="text-lg font-bold text-gray-800">Feb 27, 2026</p>
              <p className="text-gray-400 text-xs mt-1">Next Due</p>
            </div>
          </div>

          {/* গোল সেকশন */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-800">Relationship Goal</h3>
              <button className="text-blue-500 text-xs">Edit</button>
            </div>
            <p className="text-gray-600">Connect every <span className="font-bold">30 days</span></p>
          </div>

          {/* কুইক চেক-ইন বাটন */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-6">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-6">
              <button className="flex flex-col items-center gap-2 text-gray-600 hover:text-blue-500">
                <span className="p-4 bg-gray-50 rounded-xl">📞</span>
                <span className="text-xs">Call</span>
              </button>
              <button className="flex flex-col items-center gap-2 text-gray-600 hover:text-blue-500">
                <span className="p-4 bg-gray-50 rounded-xl">💬</span>
                <span className="text-xs">Text</span>
              </button>
              <button className="flex flex-col items-center gap-2 text-gray-600 hover:text-blue-500">
                <span className="p-4 bg-gray-50 rounded-xl">📹</span>
                <span className="text-xs">Video</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}