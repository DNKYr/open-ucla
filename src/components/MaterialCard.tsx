import type { Material } from "@/types";

const typeIcons: Record<string, string> = {
  syllabus: "\u{1F4C4}",
  notes: "\u{1F4DD}",
  "study-guide": "\u{1F4D6}",
  "past-exam": "\u{1F4CB}",
  "project-spec": "\u{1F4C2}",
  other: "\u{1F4CE}",
};

interface MaterialCardProps {
  material: Material;
  departmentSlug: string;
  courseNumber: string;
}

export default function MaterialCard({ material, departmentSlug, courseNumber }: MaterialCardProps) {
  const icon = typeIcons[material.type] || "\u{1F4CE}";
  const fileUrl = `/content/${departmentSlug}/${courseNumber}/materials/${material.file}`;

  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-50 text-lg">
          {icon}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{material.title}</p>
          <p className="text-xs text-gray-500">
            {material.file.split(".").pop()?.toUpperCase()} · Uploaded by @{material.contributor} ·{" "}
            {new Date(material.uploadedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-[#2774AE] px-3 py-1 text-xs text-[#2774AE] hover:bg-blue-50"
        >
          View
        </a>
        <a
          href={fileUrl}
          download
          className="rounded border border-[#2774AE] px-3 py-1 text-xs text-[#2774AE] hover:bg-blue-50"
        >
          Download
        </a>
      </div>
    </div>
  );
}
