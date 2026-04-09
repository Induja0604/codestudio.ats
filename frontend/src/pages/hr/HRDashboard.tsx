import type { CSSProperties } from "react";

/* ---------- TYPES ---------- */
interface Activity {
  id: number;
  name: string;
  role: string;
  status: string;
}

/* ---------- DATA ---------- */
const activities: Activity[] = [
  { id: 1, name: "Sahenaj Noor", role: "Frontend Dev", status: "Pending" },
  { id: 2, name: "Subhash Kail", role: "React JS", status: "In Progress" },
  { id: 3, name: "Prakash Jha", role: "Angular", status: "In Progress" },
  { id: 4, name: "Sangeeta Kaur", role: "Angular", status: "Completed" }
];

/* ---------- MAIN ---------- */
export default function HRDashboard() {
  return (
    <div style={styles.container}>

      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>HR Zone</h2>
        <p style={styles.menuActive}>Dashboard</p>
        <p style={styles.menu}>Employees</p>
        <p style={styles.menu}>Payroll</p>
        <p style={styles.menu}>Reports</p>
      </div>

      {/* MAIN */}
      <div style={styles.main}>

        {/* NAVBAR */}
        <div style={styles.navbar}>
          <input placeholder="Search..." style={styles.search} />

          <div style={styles.navRight}>
            <span>📥</span>
            <div style={styles.profile}>H</div>
          </div>
        </div>

        {/* KPI CARDS */}
        <div style={styles.grid}>
          <Card title="Total Employees" value="2,578" />
          <Card title="Payroll Summary" value="₹12.5L" />
          <Card title="Project Cost" value="₹8.2L" />
          <Card title="Monthly Expense" value="₹3.4L" />
        </div>

        {/* CHART-LIKE CARDS */}
        <div style={styles.grid2}>
          <Box title="Attendance Rate">
            <p>Online: 70%</p>
            <p>Leave: 20%</p>
            <p>Sick: 10%</p>
          </Box>

          <Box title="Employee Distribution">
            <p>Remote: 60%</p>
            <p>Hybrid: 25%</p>
            <p>Office: 15%</p>
          </Box>

          <Box title="Performance">
            <p>Great: 50%</p>
            <p>Good: 26%</p>
            <p>Average: 18%</p>
            <p>Poor: 6%</p>
          </Box>
        </div>

        {/* ACTIVITY FEED */}
        <div style={styles.activityBox}>
          <h3>Employee Activity</h3>

          {activities.map((a) => (
            <div key={a.id} style={styles.activityItem}>
              <div>
                <strong>{a.name}</strong>
                <p style={styles.small}>{a.role}</p>
              </div>

              <span style={getStatusStyle(a.status)}>
                {a.status}
              </span>
            </div>
          ))}
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

/* ---------- BOX ---------- */
interface BoxProps {
  title: string;
  children: React.ReactNode;
}

function Box({ title, children }: BoxProps) {
  return (
    <div style={styles.box}>
      <h4>{title}</h4>
      <div style={{ marginTop: "10px" }}>{children}</div>
    </div>
  );
}

/* ---------- STATUS ---------- */
function getStatusStyle(status: string): CSSProperties {
  if (status === "Completed") return styles.green;
  if (status === "In Progress") return styles.orange;
  return styles.gray;
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
    background: "#e9f7ef",
    padding: "20px"
  },

  logo: {
    marginBottom: "20px",
    color: "#2ecc71"
  },

  menu: {
    margin: "10px 0",
    cursor: "pointer"
  },

  menuActive: {
    margin: "10px 0",
    padding: "8px",
    background: "#2ecc71",
    color: "#fff",
    borderRadius: "6px"
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
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },

  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

  profile: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    background: "#2ecc71",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "15px",
    marginBottom: "20px"
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
  },

  cardTitle: {
    color: "#777",
    fontSize: "14px"
  },

  grid2: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "15px",
    marginBottom: "20px"
  },

  box: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px"
  },

  activityBox: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px"
  },

  activityItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px solid #eee"
  },

  small: {
    fontSize: "12px",
    color: "#777"
  },

  green: {
    background: "#e8f5e9",
    color: "green",
    padding: "4px 8px",
    borderRadius: "6px"
  },

  orange: {
    background: "#fff3cd",
    color: "#856404",
    padding: "4px 8px",
    borderRadius: "6px"
  },

  gray: {
    background: "#eee",
    padding: "4px 8px",
    borderRadius: "6px"
  }
};