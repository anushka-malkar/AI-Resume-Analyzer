import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import { FaUserPlus } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

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

      // Success Toast
      toast.success(res.data.message || "Registration Successful 🎉");

      // Wait 1.5 seconds before navigating
      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (err) {

      // Error Toast
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

        <div style={{ textAlign: "center" }}>
          <FaUserPlus size={70} color="#2563eb" />
          <h2>Create Account</h2>
          <p>Register to AI Resume Analyzer</p>
        </div>

        <form onSubmit={registerUser}>

          <input
            style={input}
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

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

          <button
            style={{
              ...button,
              opacity: loading ? 0.7 : 1,
            }}
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>

        </form>

        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Already have an account?{" "}
          <Link to="/">Login</Link>
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
  fontWeight: "bold",
};