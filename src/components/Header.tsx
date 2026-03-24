import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-[#2774AE]">Open</span>UCLA
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
            Browse
          </Link>
          <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link
            href="/contribute"
            className="rounded-lg bg-[#2774AE] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1e5f8f]"
          >
            + Contribute
          </Link>
        </nav>
      </div>
    </header>
  );
}
