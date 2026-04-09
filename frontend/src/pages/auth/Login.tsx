import { useState, useContext } from "react";
import type { ChangeEvent, CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error("AuthContext missing");

  const { setUser } = authContext;

  const login = async () => {
    const res = await api.post("/auth/login", { email, password });

    const { token, user } = res.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    setUser(user);

    // Role-based redirect
    if (user.role === "Admin") navigate("/admin");
    else if (user.role === "Recruiter") navigate("/recruiter");
    else if (user.role === "Delivery Manager") navigate("/manager");
    else navigate("/hr");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
         <h2 style={styles.title}>Welcome Back 👋</h2>
         <p style={styles.subtitle}>Login to continue</p>

        <input
          placeholder="Email"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          style={styles.input}
        />

        {/* <input
          type="password"
          placeholder="Password"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          style={styles.input}
        /> */}
        <div style={{ position: "relative" }}>
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    onChange={(e: ChangeEvent<HTMLInputElement>) =>
      setPassword(e.target.value)
    }
    style={styles.input}
  />

  <span
    onClick={() => setShowPassword(!showPassword)}
    style={{
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      fontSize: "12px",
      color: "#A100FF",
      fontWeight: "bold"
    }}
  >
    {showPassword ? "Hide" : "Show"}
  </span>
</div>
        

        <button onClick={login} style={styles.button}>
          Login
        </button>

        {/* 🔥 SIGNUP LINK */}
        <p style={styles.text}>
          Don't have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/")}>
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #A100FF, #6A5ACD)"
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "320px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  title: {
    color: "#A100FF"
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px"
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#A100FF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  text: {
    marginTop: "10px",
    fontSize: "14px"
  },
  link: {
    color: "#A100FF",
    cursor: "pointer",
    fontWeight: "bold"
  }
};








