import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav style={styles.nav}>
      <h2
        style={styles.logo}
        onClick={() => navigate("/dashboard")}
      >
        AI Resume Analyzer
      </h2>

      <div style={styles.menu}>

        <button
          style={
            location.pathname === "/dashboard"
              ? styles.activeButton
              : styles.button
          }
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>

        <button
          style={
            location.pathname === "/history"
              ? styles.activeButton
              : styles.button
          }
          onClick={() => navigate("/history")}
        >
          Resume History
        </button>

        <button
          style={
            location.pathname === "/profile"
              ? styles.activeButton
              : styles.button
          }
          onClick={() => navigate("/profile")}
        >
          Profile
        </button>

        <button
          style={styles.logoutButton}
          onClick={logout}
        >
          Logout
        </button>

      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#2563eb",
    color: "#fff",
    padding: "15px 30px",
  },

  logo: {
    cursor: "pointer",
    margin: 0,
    fontSize: "24px",
    fontWeight: "bold",
  },

  menu: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },

  button: {
    background: "white",
    color: "#2563eb",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  activeButton: {
    background: "#1e40af",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  logoutButton: {
    background: "#dc2626",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};