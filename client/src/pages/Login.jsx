import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import API from "../services/api";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await API.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

     toast.success("Login Successful 🎉");

      navigate("/dashboard");

    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={container}>
      <div style={card}>

        <div style={{ textAlign: "center" }}>
          <FaUserCircle size={70} color="#2563eb" />

          <h2>AI Resume Analyzer</h2>

          <p>Login to your account</p>
        </div>

        <form onSubmit={loginUser}>

          <input
            style={input}
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            style={input}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button style={button}>
            {loading ? "Logging In..." : "Login"}
          </button>

        </form>

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>

      </div>
    </div>
  );
}

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f5f7fb",
};

const card = {
  width: "420px",
  background: "white",
  padding: "35px",
  borderRadius: "12px",
  boxShadow: "0 0 15px rgba(0,0,0,0.15)",
};

const input = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box",
};

const button = {
  width: "100%",
  padding: "12px",
  marginTop: "20px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
};