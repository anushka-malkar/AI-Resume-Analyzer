import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";

export default function History() {
  const navigate = useNavigate();

  const [history, setHistory] = useState([]);
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  useEffect(() => {
    const filtered = history.filter((item) =>
      item.file_name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredHistory(filtered);
  }, [search, history]);

  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/resume/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setHistory(res.data.history);
      setFilteredHistory(res.data.history);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteResume = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resume?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await API.delete(`/resume/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Resume deleted successfully!");

      fetchHistory();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete resume.");
    }
  };

  const getBadgeColor = (score) => {
    if (score >= 80) return "#16a34a";
    if (score >= 60) return "#f59e0b";
    return "#dc2626";
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "1100px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "38px",
            fontWeight: "bold",
            color: "#1e3a8a",
            marginBottom: "25px",
          }}
        >
          📂 Resume History
        </h1>

        <input
          type="text"
          placeholder="🔍 Search by Resume Name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            marginBottom: "30px",
            fontSize: "16px",
          }}
        />

        {loading ? (
          <h2>Loading...</h2>
        ) : filteredHistory.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              background: "white",
              padding: "60px",
              borderRadius: "15px",
              boxShadow: "0 5px 20px rgba(0,0,0,.1)",
            }}
          >
            <h2 style={{ fontSize: "28px" }}>
              📄 No Resume History Found
            </h2>

            <p
              style={{
                marginTop: "15px",
                color: "#666",
              }}
            >
              Upload your first resume to begin AI analysis.
            </p>
          </div>
        ) : (
          filteredHistory.map((item) => (
            <div
              key={item.id}
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "15px",
                marginBottom: "25px",
                boxShadow: "0 5px 20px rgba(0,0,0,.1)",
              }}
            >
              <h2
                style={{
                  fontSize: "24px",
                  marginBottom: "15px",
                }}
              >
                📄 {item.file_name}
              </h2>

              <span
                style={{
                  background: getBadgeColor(item.ats_score),
                  color: "white",
                  padding: "8px 15px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                }}
              >
                ATS Score : {item.ats_score}%
              </span>

              <p
                style={{
                  marginTop: "18px",
                  color: "#555",
                }}
              >
                Uploaded :
                {" "}
                {new Date(item.created_at).toLocaleString()}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  marginTop: "20px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  onClick={() =>
                    navigate("/dashboard", {
                      state: {
                        analysis: {
                          atsScore: item.ats_score,
                          summary: item.summary,
                          skills: item.skills,
                          missingSkills: item.missing_skills,
                          strengths: item.strengths,
                          weaknesses: item.weaknesses,
                          suggestions: item.suggestions,
                        },
                      },
                    })
                  }
                  style={{
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    padding: "12px 20px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  View Analysis
                </button>

                <button
                  onClick={() => deleteResume(item.id)}
                  style={{
                    background: "#dc2626",
                    color: "white",
                    border: "none",
                    padding: "12px 20px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}