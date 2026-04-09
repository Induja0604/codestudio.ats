import { useState } from "react";
import type { CSSProperties } from "react";

/* ---------- TYPES ---------- */
interface Member {
  id: number;
  name: string;
  role: string;
  progress: number;
  completed: number;
  opened: number;
  overdue: number;
}

/* ---------- DATA ---------- */
const members: Member[] = [
  { id: 1, name: "Pieter Novitsky", role: "Art Director", progress: 94, completed: 24, opened: 6, overdue: 0 },
  { id: 2, name: "Jennifer Atkinson", role: "Project Manager", progress: 92, completed: 38, opened: 14, overdue: 0 },
  { id: 3, name: "Maria LaGuerta", role: "UI Designer", progress: 88, completed: 29, opened: 9, overdue: 3 },
  { id: 4, name: "Nina Green", role: "Graphic Designer", progress: 72, completed: 44, opened: 23, overdue: 0 },
  { id: 5, name: "Ivan Movchan", role: "Illustrator", progress: 68, completed: 12, opened: 4, overdue: 1 },
];

/* ---------- MAIN COMPONENT ---------- */
export default function ManagerDashboard() {
  const [search, setSearch] = useState("");

  const filtered = members.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      
      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>ATS</h2>
        <p style={styles.menuActive}>Team</p>
        <p style={styles.menu}>Projects</p>
        <p style={styles.menu}>Performance</p>
      </div>

      {/* MAIN */}
      <div style={styles.main}>

        {/* NAVBAR */}
        <div style={styles.navbar}>
          <h2>Team Overview</h2>

          <div style={styles.navRight}>
            <input
              placeholder="Search member..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={styles.search}
            />
            <div style={styles.profile}>M</div>
          </div>
        </div>

        {/* TEAM GRID */}
        <div style={styles.grid}>
          {filtered.map((m) => (
            <div key={m.id} style={styles.card}>
              
              {/* Avatar */}
              <div style={styles.avatar}>
                {m.name.charAt(0)}
              </div>

              <h3 style={styles.name}>{m.name}</h3>
              <p style={styles.role}>{m.role}</p>

              {/* Progress */}
              <div style={styles.progressBar}>
                <div
                  style={{
                    ...styles.progressFill,
                    width: `${m.progress}%`
                  }}
                />
              </div>

              <p style={styles.progressText}>{m.progress}%</p>

              {/* Stats */}
              <div style={styles.stats}>
                <Stat label="Completed" value={m.completed} />
                <Stat label="Opened" value={m.opened} />
                <Stat label="Overdue" value={m.overdue} />
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

/* ---------- STAT ---------- */
interface StatProps {
  label: string;
  value: number;
}

function Stat({ label, value }: StatProps) {
  return (
    <div style={styles.stat}>
      <strong>{value}</strong>
      <p style={styles.statLabel}>{label}</p>
    </div>
  );
}

/* ---------- STYLES ---------- */
const styles: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    height: "100vh",
    background: "#f5f6fa",
    fontFamily: "sans-serif"
  },

  sidebar: {
    width: "220px",
    background: "#0b5ed7",
    color: "#fff",
    padding: "20px"
  },

  logo: {
    marginBottom: "30px"
  },

  menu: {
    margin: "10px 0",
    cursor: "pointer",
    opacity: 0.8
  },

  menuActive: {
    margin: "10px 0",
    padding: "8px",
    borderRadius: "6px",
    background: "#A100FF",
    cursor: "pointer"
  },

  main: {
    flex: 1,
    padding: "20px"
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px"
  },

  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  search: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },

  profile: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    background: "#A100FF",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "15px"
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
  },

  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "#ddd",
    margin: "0 auto 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600
  },

  name: {
    margin: "5px 0"
  },

  role: {
    fontSize: "12px",
    color: "#777",
    marginBottom: "10px"
  },

  progressBar: {
    height: "6px",
    background: "#eee",
    borderRadius: "10px",
    overflow: "hidden"
  },

  progressFill: {
    height: "100%",
    background: "#28a745"
  },

  progressText: {
    fontSize: "12px",
    margin: "5px 0"
  },

  stats: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px"
  },

  stat: {
    textAlign: "center"
  },

  statLabel: {
    fontSize: "10px",
    color: "#777"
  }
};