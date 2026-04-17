import Link from "next/link";

export default function FriendCard({ f }) {
  return (
    <Link href={`/friend/${f.id}`}>
      <div className="border p-4 rounded shadow hover:scale-105 transition">
        <img src={f.picture} className="w-16 h-16 rounded-full mx-auto" />
        <h2 className="text-center font-bold">{f.name}</h2>
        <p className="text-center text-sm">{f.days_since_contact} days ago</p>

        <div className="flex flex-wrap gap-1 justify-center mt-2">
          {f.tags.map((t, i) => (
            <span key={i} className="bg-gray-200 px-2 text-xs rounded">
              {t}
            </span>
          ))}
        </div>

        <p
          className={`text-center mt-2 ${
            f.status === "overdue"
              ? "text-red-500"
              : f.status === "almost due"
              ? "text-yellow-500"
              : "text-green-500"
          }`}
        >
          {f.status}
        </p>
      </div>
    </Link>
  );
}