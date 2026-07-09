import { useState } from "react";
import API from "../services/api";
import Loader from "./Loader";
import { toast } from "react-toastify";

export default function ResumeUpload({ setAnalysis }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadResume = async () => {
    if (!file) {
      toast.error("Please select a PDF resume.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await API.post("/resume/upload", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setAnalysis(res.data.analysis);

      toast.success("Resume analyzed successfully! 🎉");

    } catch (err) {
      toast.error(
        err.response?.data?.message || "Resume upload failed."
      );
    } finally {
      setLoading(false);
    }
  };

return (
  <div
    style={{
      background: "#fff",
      padding: "30px",
      borderRadius: "15px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      marginBottom: "30px",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "28px",
        marginBottom: "20px",
      }}
    >
      📄 Upload Your Resume
    </h2>

    <p
      style={{
        color: "#666",
        marginBottom: "20px",
      }}
    >
      Upload your PDF resume and get an AI-powered ATS analysis.
    </p>

    <input
      type="file"
      accept=".pdf"
      onChange={(e) => setFile(e.target.files[0])}
      style={{
        marginBottom: "20px",
      }}
    />

    <br />

    {file && (
      <p
        style={{
          color: "#16a34a",
          fontWeight: "bold",
          marginBottom: "15px",
        }}
      >
        Selected File: {file.name}
      </p>
    )}

    {loading ? (
      <div>
        <Loader />

        <p
          style={{
            fontWeight: "bold",
            marginTop: "15px",
          }}
        >
          🤖 AI is analyzing your resume...
        </p>
      </div>
    ) : (
      <button
        onClick={uploadResume}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "14px 30px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "17px",
          fontWeight: "bold",
        }}
      >
        🚀 Analyze Resume
      </button>
    )}
  </div>
);
}