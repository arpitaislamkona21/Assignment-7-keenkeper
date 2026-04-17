"use client";
import { useParams } from "next/navigation";
import friends from "../../data/friends.json";
import { toast } from "react-toastify";

export default function FriendDetails() {
  const { id } = useParams();
  const friend = friends.find((f) => f.id == id);

  const handleAction = (type) => {
    toast.success(`${type} with ${friend.name}`);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 p-6">
      {/* Left */}
      <div className="border p-4">
        <img src={friend.picture} className="w-24 rounded-full" />
        <h2>{friend.name}</h2>
        <p>{friend.email}</p>
        <p>{friend.bio}</p>

        <div className="flex gap-2 mt-4">
          <button>⏰ Snooze</button>
          <button>📦 Archive</button>
          <button>🗑 Delete</button>
        </div>
      </div>

      {/* Right */}
      <div>
        <div className="grid grid-cols-3 gap-2">
          <div>{friend.days_since_contact} days</div>
          <div>Goal {friend.goal}</div>
          <div>{friend.next_due_date}</div>
        </div>

        <div className="mt-4">
          <button onClick={() => handleAction("Call")}>📞 Call</button>
          <button onClick={() => handleAction("Text")}>💬 Text</button>
          <button onClick={() => handleAction("Video")}>🎥 Video</button>
        </div>
      </div>
    </div>
  );
}