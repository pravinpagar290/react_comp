const sidebarLinks = [
  { label: "Department", href: "#" },
  { label: "PEOs & POs", href: "#" },
  { label: "Faculty", href: "#" },
  { label: "Labs", href: "#" },
  { label: "Syllabus", href: "#" },
  { label: "Events", href: "#" },
  { label: "Results", href: "#" },
  { label: "Placement", href: "#" },
  { label: "Alumni", href: "#" },
  { label: "Timetable", href: "#" },
  { label: "E-resources", href: "#" },
  { label: "Academic book ", href: '#'},
  { label: "Extra curricular activity", href: '#'},
  { label: "Research Publications", href: "#" },
{ label: "Industry Collaboration", href: "#" },
{ label: "Department Newsletter", href: "#" }
];

export default function Sidebar() {
  return (
    <aside className="w-[300px]">
      <nav className="flex flex-col gap-1 bg-[#F5F5F5] border border-gray-300 rounded">
        {sidebarLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="px-3 py-2 text-blue-600 text-sm rounded hover:bg-gray-200"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}