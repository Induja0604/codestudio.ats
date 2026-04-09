import type { CSSProperties } from "react";

/* ---------- TYPES ---------- */
interface Candidate {
  id: number;
  name: string;
  role: string;
  date: string;
  phone: string;
  email: string;
  status: string;
  score: number;
}

/* ---------- DATA ---------- */
const candidates: Candidate[] = [
  {
    id: 1,
    name: "John Doe",
    role: "UI UX Designer",
    date: "07-03-2023",
    phone: "1234567890",
    email: "john@mail.com",
    status: "Pending",
    score: 90
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Frontend Dev",
    date: "08-03-2023",
    phone: "9876543210",
    email: "jane@mail.com",
    status: "Hired",
    score: 95
  }
];

/* ---------- MAIN COMPONENT ---------- */
export default function RecruiterDashboard() {
  return (
    <div style={styles.container}>
      
      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>ATS</h2>
        <p style={styles.menuActive}>Dashboard</p>
        <p style={styles.menu}>Candidates</p>
        <p style={styles.menu}>Jobs</p>
        <p style={styles.menu}>Schedule</p>

        <div style={styles.bottomMenu}>
          <p style={styles.menu}>Settings</p>
          <p style={styles.menu}>Logout</p>
        </div>
      </div>

      {/* MAIN */}
      <div style={styles.main}>

        {/* NAVBAR */}
        <div style={styles.navbar}>
          <input placeholder="Search Candidate" style={styles.search} />

          <div style={styles.navRight}>
            <button style={styles.createBtn}>+ Create Job</button>

            <div style={styles.profile}>
              S
            </div>
          </div>
        </div>

        {/* KPI CARDS */}
        <div style={styles.cardGrid}>
          <Card title="Total Candidates" value="500" />
          <Card title="New Candidates" value="+100" />
          <Card title="Interviews" value="10" />
          <Card title="Hired" value="50" />
        </div>

        {/* TABLE */}
        <div style={styles.tableBox}>
          <div style={styles.tableHeader}>
            <h3>Candidate List</h3>
            <input placeholder="Search..." style={styles.smallSearch} />
          </div>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Role</th>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Phone</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Score</th>
              </tr>
            </thead>

            <tbody>
              {candidates.map((c) => (
                <tr key={c.id}>
                  <td style={styles.td}>{c.name}</td>
                  <td style={styles.td}>{c.role}</td>
                  <td style={styles.td}>{c.date}</td>
                  <td style={styles.td}>{c.phone}</td>
                  <td style={styles.td}>{c.email}</td>
                  <td style={styles.td}>
                    <span style={getStatusStyle(c.status)}>
                      {c.status}
                    </span>
                  </td>
                  <td style={styles.td}>{c.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

/* ---------- CARD ---------- */
interface CardProps {
  title: string;
  value: string;
}

function Card({ title, value }: CardProps) {
  return (
    <div style={styles.card}>
      <p style={styles.cardTitle}>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}

/* ---------- STATUS STYLE ---------- */
function getStatusStyle(status: string): CSSProperties {
  if (status === "Pending") return styles.pending;
  if (status === "Hired") return styles.hired;
  return styles.rejected;
}

/* ---------- STYLES ---------- */
const styles: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "sans-serif",
    background: "#f5f6fa"
  },

  sidebar: {
    width: "220px",
    background: "#111",
    color: "#fff",
    padding: "20px",
    display: "flex",
    flexDirection: "column"
  },

  logo: {
    marginBottom: "30px"
  },

  menu: {
    margin: "10px 0",
    cursor: "pointer",
    color: "#ccc"
  },

  menuActive: {
    margin: "10px 0",
    padding: "8px",
    borderRadius: "6px",
    background: "#A100FF",
    cursor: "pointer"
  },

  bottomMenu: {
    marginTop: "auto"
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

  search: {
    width: "300px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },

  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  createBtn: {
    background: "#A100FF",
    color: "#fff",
    border: "none",
    padding: "10px 14px",
    borderRadius: "6px",
    cursor: "pointer"
  },

  profile: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    background: "#ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "15px",
    marginBottom: "20px"
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)"
  },

  cardTitle: {
    color: "#777",
    fontSize: "14px"
  },

  tableBox: {
    background: "#fff",
    borderRadius: "10px",
    padding: "15px"
  },

  tableHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px"
  },

  smallSearch: {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse"
  },

  th: {
    textAlign: "left",
    padding: "10px",
    background: "#f1f1f1"
  },

  td: {
    padding: "10px",
    borderTop: "1px solid #eee"
  },

  pending: {
    background: "#e3f2fd",
    color: "#1976d2",
    padding: "4px 8px",
    borderRadius: "6px"
  },

  hired: {
    background: "#e8f5e9",
    color: "green",
    padding: "4px 8px",
    borderRadius: "6px"
  },

  rejected: {
    background: "#fde2e2",
    color: "red",
    padding: "4px 8px",
    borderRadius: "6px"
  }
};