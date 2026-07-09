import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

export default function ATSCard({ score }) {

  let message = "";
  let color = "";

  if (score >= 80) {
    message = "Excellent Resume";
    color = "#16a34a";
  }

  else if (score >= 60) {
    message = "Good Resume";
    color = "#f59e0b";
  }

  else {
    message = "Needs Improvement";
    color = "#ef4444";
  }

  return (

    <div
      className="bg-white rounded-xl shadow-lg p-6"
    >

      <h2
        className="text-2xl font-bold text-center mb-6"
      >
        ATS Score
      </h2>

      <div
        style={{
          width: "180px",
          margin: "auto"
        }}
      >

        <CircularProgressbar

          value={score}

          text={`${score}%`}

          styles={buildStyles({

            pathColor: color,

            textColor: color,

            trailColor: "#e5e7eb",

            textSize: "18px"

          })}

        />

      </div>

      <h3
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: color
        }}
      >
        {message}
      </h3>

    </div>

  );

}