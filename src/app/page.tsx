import SearchBar from "@/components/SearchBar";
import DepartmentCard from "@/components/DepartmentCard";
import { getDepartments, getCourses, getStats } from "@/lib/content";

export default function Home() {
  const departments = getDepartments();
  const stats = getStats();

  const deptWithCounts = departments.map((dept) => ({
    ...dept,
    courseCount: getCourses(dept.slug).length,
  }));

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      {/* Hero */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          UCLA Course Materials, by Students
        </h1>
        <p className="mt-2 text-gray-500">
          An open-source archive of syllabi, notes, and study resources.
          <br />
          Built by Bruins, for Bruins.
        </p>
      </div>

      {/* Search */}
      <div className="mb-10">
        <SearchBar />
      </div>

      {/* Stats */}
      <div className="mb-10 flex justify-center gap-12 rounded-lg bg-blue-50 px-6 py-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-[#2774AE]">{stats.courses}</p>
          <p className="text-xs uppercase text-gray-500">Courses</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-[#2774AE]">{stats.materials}</p>
          <p className="text-xs uppercase text-gray-500">Materials</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-[#2774AE]">{stats.contributors}</p>
          <p className="text-xs uppercase text-gray-500">Contributors</p>
        </div>
      </div>

      {/* Departments */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {deptWithCounts.map((dept) => (
          <DepartmentCard
            key={dept.slug}
            name={dept.name}
            code={dept.code}
            slug={dept.slug}
            courseCount={dept.courseCount}
          />
        ))}
      </div>
    </div>
  );
}
