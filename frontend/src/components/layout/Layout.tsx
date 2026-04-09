import { useContext, useState } from "react";
import type { ReactNode, CSSProperties } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Layout({ children }: { children: ReactNode }) {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error("AuthContext missing");

  const { user } = authContext;

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div style={styles.container}>
      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>ATS</h2>

        <p style={styles.menuItem}>Dashboard</p>
        <p style={styles.menuItem}>Users</p>
        <p style={styles.menuItem}>Reports</p>
      </div>

      {/* MAIN */}
      <div style={styles.main}>
        {/* NAVBAR */}
        <div style={styles.navbar}>
          {/* Left */}
          <div>
            <h3 style={styles.title}>Dashboard</h3>
            {user && (
              <p style={styles.userInfo}>
                {user.name} ({user.role})
              </p>
            )}
          </div>

          {/* Right */}
          <div style={styles.right}>
            {/* 📥 Notification */}
            <div
              style={styles.icon}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#eee")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              📥
            </div>

            {/* 👤 Profile */}
            <div
              style={styles.profile}
              onClick={() => setShowMenu(!showMenu)}
            >
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            {/* Dropdown */}
            {showMenu && (
              <div style={styles.dropdown}>
                <p style={styles.dropdownItem}>{user?.name}</p>
                <p style={styles.dropdownItem}>{user?.role}</p>

                <hr />

                <p
                  style={styles.logout}
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = "/login";
                  }}
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CONTENT */}
        <div style={styles.content}>{children}</div>
      </div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    background: "#F5F6FA"
  },

  sidebar: {
    width: "220px",
    background: "#fff",
    height: "100vh",
    padding: "20px",
    boxShadow: "2px 0 10px rgba(0,0,0,0.05)"
  },

  logo: {
    color: "#A100FF",
    marginBottom: "20px"
  },

  menuItem: {
    margin: "10px 0",
    cursor: "pointer",
    color: "#333"
  },

  main: {
    flex: 1
  },

  navbar: {
    height: "60px",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    borderBottom: "2px solid #A100FF",
    position: "relative"
  },

  title: {
    margin: 0,
    fontSize: "18px"
  },

  userInfo: {
    fontSize: "12px",
    color: "#666"
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    position: "relative"
  },

  icon: {
    fontSize: "18px",
    padding: "6px",
    borderRadius: "50%",
    cursor: "pointer"
  },

  profile: {
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    background: "#A100FF",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontWeight: 600
  },

  dropdown: {
    position: "absolute",
    top: "60px",
    right: "0",
    background: "#fff",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    padding: "10px",
    width: "160px",
    zIndex: 10
  },

  dropdownItem: {
    margin: "5px 0",
    fontSize: "14px"
  },

  logout: {
    color: "#A100FF",
    cursor: "pointer",
    fontWeight: 600,
    marginTop: "5px"
  },

  content: {
    padding: "20px"
  }
};