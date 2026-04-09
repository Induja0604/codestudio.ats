import Layout from "../../components/layout/Layout";
import type { CSSProperties } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const users: User[] = [
  { id: 1, name: "induja", email: "induja@mail.com", role: "Admin", status: "Active" },
  { id: 2, name: "John", email: "john@mail.com", role: "Recruiter", status: "Inactive" },
  { id: 3, name: "Alice", email: "Alice@mail.com", role: "HR", status: "Active" },
  { id: 4, name: "Bob", email: "bob@mail.com", role: "Delivery Manager", status: "Inactive" },
  { id: 5, name: "Eve", email: "eve@mail.com", role: "Admin", status: "Active" }

];

export default function AdminDashboard() {
  return (
    <Layout>
      <div style={styles.container}>
        {/* HEADER */}
        <div style={styles.header}>
          <h2>Users</h2>
          <button style={styles.addBtn}>+ Add User</button>
        </div>

        {/* CARDS */}
        <div style={styles.cardGrid}>
          <Card title="Active Users" value="100" />
          <Card title="Inactive Users" value="20" />
          <Card title="Admins" value="5" />
          <Card title="Recruiters" value="10" />
        </div>

        {/* SEARCH */}
        <input placeholder="Search..." style={styles.input} />

        {/* TABLE */}
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Role</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td style={styles.td}>{u.name}</td>
                  <td style={styles.td}>{u.email}</td>
                  <td style={styles.td}>{u.role}</td>
                  <td style={styles.td}>
                    <span
                      style={
                        u.status === "Active"
                          ? styles.active
                          : styles.inactive
                      }
                    >
                      {u.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
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
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}

/* ---------- STYLES ---------- */
const styles: Record<string, CSSProperties> = {
  container: {
    padding: "10px"
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px"
  },

  addBtn: {
    background: "#A100FF",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer"
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "15px",
    marginBottom: "20px"
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 5px 10px rgba(0,0,0,0.05)"
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },

  tableWrapper: {
    background: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 5px 10px rgba(0,0,0,0.05)"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse"
  },

  th: {
    textAlign: "left",
    padding: "12px",
    background: "#f1f1f1"
  },

  td: {
    padding: "12px",
    borderTop: "1px solid #eee"
  },

  active: {
    background: "#d4f8e8",
    color: "green",
    padding: "4px 8px",
    borderRadius: "6px"
  },

  inactive: {
    background: "#fde2e2",
    color: "red",
    padding: "4px 8px",
    borderRadius: "6px"
  }
};