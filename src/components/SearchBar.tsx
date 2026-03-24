"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-xl mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search courses... e.g. CS 31, Math 31A, Econ 1"
        className="flex-1 rounded-l-lg border-2 border-gray-200 px-4 py-3 text-base outline-none focus:border-[#2774AE]"
      />
      <button
        type="submit"
        className="rounded-r-lg border-2 border-[#2774AE] bg-[#2774AE] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1e5f8f]"
      >
        Search
      </button>
    </form>
  );
}
