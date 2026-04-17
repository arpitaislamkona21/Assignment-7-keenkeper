"use client";
import Navbar from "../components/Navbar";

export default function Timeline() {
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl p-4">Timeline</h1>

      <div className="p-4">
        <div className="border p-3 mb-2">📞 Call with Arafat</div>
        <div className="border p-3 mb-2">💬 Text with Nusrat</div>
      </div>
    </div>
  );
}