import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function ATSChart({ history }) {
  const data = history.map((item, index) => ({
    name: `Resume ${index + 1}`,
    ats: item.ats_score,
  }));

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">

      <h2
  style={{
    fontSize: "28px",
    marginBottom: "25px",
    color: "#1e3a8a",
  }}
>
  📈 ATS Score Trend
</h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="ats"
            stroke="#2563eb"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}