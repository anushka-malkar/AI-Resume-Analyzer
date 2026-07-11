import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import API from "../services/api";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
      toast.error(
        err.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={container}>
      <div style={card}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <FaUserCircle size={75} color="#2563eb" />

          <h1 style={{ marginTop: "10px" }}>
            AI Resume Analyzer
          </h1>

          <p style={{ color: "#666" }}>
            Login to continue
          </p>
        </div>

        <form onSubmit={loginUser}>
          <input
            style={input}
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div style={{ position: "relative" }}>
            <input
              style={input}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              style={eye}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            style={button}
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "25px",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#2563eb",
              fontWeight: "bold",
            }}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

const container = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg,#eff6ff,#dbeafe)",
  padding: "20px",
};

const card = {
  width: "100%",
  maxWidth: "430px",
  background: "#fff",
  padding: "35px",
  borderRadius: "18px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
};

const input = {
  width: "100%",
  padding: "14px",
  marginTop: "18px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box",
};

const eye = {
  position: "absolute",
  right: "15px",
  top: "33px",
  cursor: "pointer",
  color: "#555",
};

const button = {
  width: "100%",
  padding: "14px",
  marginTop: "25px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "17px",
  fontWeight: "bold",
};