import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow p-4">
      <h2 className="text-xl font-bold text-[#A100FF] mb-6">ATS</h2>

      <nav className="flex flex-col gap-3">
        <Link to="/admin">Dashboard</Link>
        <Link to="/recruiter">Recruiter</Link>
        <Link to="/manager">Manager</Link>
        <Link to="/hr">HR</Link>
      </nav>
    </div>
  );
}