import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import { buildSearchIndex } from "@/lib/content";
import { search } from "@/lib/search";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q || "";
  const index = buildSearchIndex();
  const results = query ? search(query, index) : [];

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Search</h1>

      <div className="mb-8">
        <SearchBar />
      </div>

      {query && (
        <p className="mb-4 text-sm text-gray-500">
          {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
        </p>
      )}

      {query && results.length === 0 && (
        <div className="rounded-lg border-2 border-dashed border-gray-300 p-10 text-center">
          <p className="text-gray-500">
            No results found for &ldquo;{query}&rdquo;
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Can&apos;t find what you need?{" "}
            <Link href="/contribute" className="text-[#2774AE] hover:underline">
              Be the first to contribute it!
            </Link>
          </p>
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-2">
          {results.map((entry) => (
            <Link
              key={entry.path}
              href={entry.path}
              className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-5 py-4 transition hover:border-[#2774AE]"
            >
              <div>
                <p className="font-semibold text-gray-900">
                  {entry.departmentCode} {entry.courseNumber} — {entry.courseName}
                </p>
                {entry.materialTitle && (
                  <p className="mt-1 text-xs text-gray-500">{entry.materialTitle}</p>
                )}
              </div>
              <span className="text-xs text-gray-400">{entry.departmentName}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
