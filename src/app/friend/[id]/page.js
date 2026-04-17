"use client";
import React, { use } from "react";
import friends from "../../data/friends.json";

export default function FriendDetails({ params }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const friend = friends.find((f) => f.id === parseInt(id));

  if (!friend) return <div className="p-20 text-center">Friend not found!</div>;

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* মেইন কার্ড */}
      <div className="bg-white shadow-md rounded-3xl overflow-hidden border border-gray-100 p-8 md:p-12">
        
        {/* উপরের প্রোফাইল সেকশন (ফিগমার মতো) */}
        <div className="flex flex-col items-center text-center space-y-4">
           {/* প্রোফাইল ইমেজ */}
           <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200">
              <img src={friend.image || "/default-avatar.png"} alt={friend.name} className="w-full h-full object-cover" />
           </div>
           
           <div>
              <h1 className="text-2xl font-bold text-gray-900">{friend.name}</h1>
              <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full uppercase">
                Overdue
              </span>
           </div>
           
           <p className="text-gray-500 italic">"{friend.description || 'Former colleague'}"</p>
        </div>

        {/* নিচের গ্রিড বা অন্যান্য ডিটেইলস এখানে দিন */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* উদাহরণ: Days Since Contact */}
            <div className="bg-gray-50 p-6 rounded-2xl text-center">
                <p className="text-3xl font-bold">62</p>
                <p className="text-gray-500 text-sm">Days Since Contact</p>
            </div>
            {/* বাকি কার্ডগুলো একইভাবে যোগ করুন */}
        </div>

      </div>
    </div>
  );
}