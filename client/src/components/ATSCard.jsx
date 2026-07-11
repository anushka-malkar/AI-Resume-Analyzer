import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

export default function ATSCard({ score }) {
  let message = "";
  let color = "";
  let tips = "";

  if (score >= 80) {
    message = "🎉 Excellent Resume";
    color = "#16a34a";
    tips = "Your resume is highly optimized and ATS-friendly.";
  } else if (score >= 60) {
    message = "👍 Good Resume";
    color = "#f59e0b";
    tips = "Your resume is good, but a few improvements can increase your ATS score.";
  } else {
    message = "⚠ Needs Improvement";
    color = "#ef4444";
    tips = "Your resume needs more relevant keywords and stronger formatting.";
  }

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "18px",
        padding: "30px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        textAlign: "center",
        transition: "0.3s",
      }}
    >
      <h2
        style={{
          fontSize: "30px",
          marginBottom: "25px",
          color: "#1e3a8a",
        }}
      >
        📊 ATS Resume Score
      </h2>

      <div
        style={{
          width: "200px",
          margin: "0 auto",
        }}
      >
        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={buildStyles({
            pathColor: color,
            textColor: color,
            trailColor: "#e5e7eb",
            strokeLinecap: "round",
            textSize: "18px",
          })}
        />
      </div>

      <h3
        style={{
          marginTop: "25px",
          color: color,
          fontSize: "24px",
        }}
      >
        {message}
      </h3>

      <p
        style={{
          marginTop: "15px",
          color: "#555",
          fontSize: "16px",
          lineHeight: "1.6",
        }}
      >
        {tips}
      </p>

      <div
        style={{
          marginTop: "25px",
          background: "#f8fafc",
          borderRadius: "12px",
          padding: "15px",
        }}
      >
        <h4
          style={{
            marginBottom: "10px",
            color: "#1e40af",
          }}
        >
          💡 AI Recommendation
        </h4>

        <p
          style={{
            color: "#666",
            lineHeight: "1.5",
          }}
        >
          Increase relevant technical skills, use measurable achievements,
          and include keywords matching the job description to improve your
          ATS score.
        </p>
      </div>
    </div>
  );
}