import Link from "next/link";

export default function FriendCard({ f }) {
  return (
    <Link href={`/friend/${f.id}`}>
      <div className="border p-4 rounded shadow hover:scale-105 transition">
        <img src={f.picture} className="w-16 h-16 rounded-full mx-auto" />
        <h2 className="text-center text-black font-bold">{f.name}</h2>
        <p className="text-center text-gray-700 text-sm">{f.days_since_contact} days ago</p>

        <div className="flex flex-wrap gap-1 justify-center mt-2">
          {f.tags.map((t, i) => (
            <span key={i} className="bg-green-300 text-black px-2 text-xs rounded">
              {t}
            </span>
          ))}
        </div>

        <p
  className={`text-center mt-2 px-3 py-1 rounded-full text-xs font-bold w-fit mx-auto ${
    f.status === "overdue"
      ? "bg-red-100 text-red-600"
      : f.status === "almost due"
      ? "bg-yellow-100 text-yellow-600"
      : "bg-green-100 text-green-600"
  }`}
>
  {f.status}
</p>
      </div>
    </Link>
  );
}