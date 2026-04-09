import { useState } from "react";
import type { ChangeEvent, CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import axios from "axios";

interface Form {
  name: string;
  email: string;
  password: string;
  role: string;
}

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    password: "",
    role: "" // ✅ default empty
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
  try {
    await api.post("/auth/signup", form);

    alert("You signed up successfully ✅");
    navigate("/login");

  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400 || error.response?.status === 409) {
        alert("You already have an account with this email ⚠️");
      } else {
        alert("Something went wrong ❌");
      }
    } else {
      alert("Unexpected error ❌");
    }
  }
};

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account ✨</h2>
        <p style={styles.subtitle}>Join Code Studio ATS</p>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={styles.input}
        />

        {/* Password with toggle */}
        <div style={{ position: "relative", width: "100%" }}>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={handleChange}
            style={styles.input}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              fontSize: "12px",
              color: "#ff4da6",
              fontWeight: "600"
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        {/* Role dropdown */}
        <div style={{ position: "relative", marginBottom: "15px" }}>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            style={styles.select}
          >
            <option value="">Select role</option>
            <option value="Admin">Admin</option>
            <option value="Recruiter">Recruiter</option>
            <option value="Delivery Manager">Delivery Manager</option>
            <option value="Finance/HR Ops">Finance/HR Ops</option>
          </select>
          <span style={styles.dropdownArrow}>▼</span>
        </div>

        <button onClick={submit} style={styles.button}>
          Signup
        </button>

        <p style={styles.text}>
          Already have account?{" "}
          <span style={styles.link} onClick={() => navigate("/login")}>
            Login
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
    background: "linear-gradient(135deg, #a100ff, #ff4da6)"
  },
  card: {
    background: "#fff",
    padding: "35px",
    borderRadius: "15px",
    width: "340px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    textAlign: "center"
  },
  title: {
    color: "#a100ff",
    marginBottom: "10px",
    fontWeight: "600"
  },
  subtitle: {
    fontSize: "13px",
    color: "#777",
    marginBottom: "15px"
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    border: "1px solid #eee",
    borderRadius: "8px",
    outline: "none",
    fontSize: "14px"
  },
  select: {
    width: "100%",
    padding: "12px",
    border: "1px solid #eee",
    borderRadius: "8px",
    outline: "none",
    fontSize: "14px",
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    cursor: "pointer",
    backgroundColor: "#fff"
  },
  dropdownArrow: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    color: "#ff4da6",
    fontSize: "12px"
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(135deg, #a100ff, #ff4da6)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    marginTop: "10px"
  },
  link: {
    color: "#ff4da6",
    cursor: "pointer",
    fontWeight: "500"
  },
  text: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#555"
  }
};