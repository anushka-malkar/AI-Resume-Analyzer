import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUserPlus,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import API from "../services/api";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await API.post("/auth/register", formData);

      toast.success(res.data.message);

      navigate("/");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={container}>
      <div style={card}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <FaUserPlus
            size={75}
            color="#2563eb"
          />

          <h1
            style={{
              marginTop: "10px",
            }}
          >
            Create Account
          </h1>

          <p style={{ color: "#666" }}>
            Register to AI Resume Analyzer
          </p>
        </div>

        <form onSubmit={registerUser}>
          <input
            style={input}
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            style={input}
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div style={{ position: "relative" }}>
            <input
              style={input}
              type={
                showPassword ? "text" : "password"
              }
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <span
              style={eye}
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>
          </div>

          <button
            style={button}
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "Register"}
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "25px",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/"
            style={{
              color: "#2563eb",
              fontWeight: "bold",
            }}
          >
            Login
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
  background:
    "linear-gradient(135deg,#eff6ff,#dbeafe)",
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