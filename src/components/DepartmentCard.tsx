import Link from "next/link";

interface DepartmentCardProps {
  name: string;
  code: string;
  slug: string;
  courseCount: number;
}

export default function DepartmentCard({ name, code, slug, courseCount }: DepartmentCardProps) {
  return (
    <Link
      href={`/dept/${slug}`}
      className="block rounded-lg border border-gray-200 bg-white p-5 transition hover:border-[#2774AE] hover:shadow-sm"
    >
      <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
      <p className="text-xs text-gray-500">{code}</p>
      <p className="mt-2 text-xl font-bold text-[#2774AE]">
        {courseCount} {courseCount === 1 ? "course" : "courses"}
      </p>
    </Link>
  );
}
