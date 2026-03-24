import Link from "next/link";
import { notFound } from "next/navigation";
import { getDepartment, getDepartments, getCourses } from "@/lib/content";

export function generateStaticParams() {
  return getDepartments().map((dept) => ({ slug: dept.slug }));
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const department = getDepartment(slug);
  if (!department) notFound();

  const courses = getCourses(slug);

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <p className="mb-3 text-xs text-gray-500">
        <Link href="/" className="text-[#2774AE] hover:underline">Home</Link> → {department.name}
      </p>

      <h1 className="mb-1 text-2xl font-bold text-gray-900">{department.name}</h1>
      <p className="mb-8 text-sm text-gray-500">{department.code} · {courses.length} courses</p>

      {courses.length === 0 ? (
        <div className="rounded-lg border-2 border-dashed border-gray-300 p-10 text-center">
          <p className="text-gray-500">No courses yet — be the first to contribute!</p>
          <Link
            href="/contribute"
            className="mt-4 inline-block rounded-lg bg-[#2774AE] px-4 py-2 text-sm font-semibold text-white"
          >
            + Upload Material
          </Link>
        </div>
      ) : (
        <div className="space-y-2">
          {courses.map((course) => (
            <Link
              key={course.number}
              href={`/dept/${slug}/${course.number}`}
              className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-5 py-4 transition hover:border-[#2774AE]"
            >
              <div>
                <p className="font-semibold text-gray-900">
                  {department.code} {course.number} — {course.name}
                </p>
                {course.description && (
                  <p className="mt-1 text-xs text-gray-500 line-clamp-1">{course.description}</p>
                )}
              </div>
              <span className="text-sm font-medium text-[#2774AE]">
                {course.materialCount} {course.materialCount === 1 ? "material" : "materials"}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
