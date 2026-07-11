import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function ATSChart({ history }) {
  const data = history.map((item, index) => ({
    name: `Resume ${index + 1}`,
    ats: item.ats_score,
  }));

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "30px",
        borderRadius: "18px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        marginTop: "40px",
        marginBottom: "40px",
      }}
    >
      <h2
        style={{
          fontSize: "30px",
          color: "#1e3a8a",
          marginBottom: "10px",
        }}
      >
        📈 ATS Score Trend
      </h2>

      <p
        style={{
          color: "#666",
          marginBottom: "25px",
        }}
      >
        Compare your ATS score across all uploaded resumes.
      </p>

      {data.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            color: "#666",
            fontSize: "18px",
          }}
        >
          📄 No resume history available yet.
          <br />
          Upload your first resume to see the chart.
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={380}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="5 5" />

            <XAxis dataKey="name" />

            <YAxis domain={[0, 100]} />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="ats"
              name="ATS Score"
              stroke="#2563eb"
              strokeWidth={4}
              dot={{
                r: 6,
                fill: "#2563eb",
              }}
              activeDot={{
                r: 8,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}