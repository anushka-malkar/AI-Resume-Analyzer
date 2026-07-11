export default function StatsCards({ stats }) {
  const cards = [
    {
      title: "Total Resumes",
      value: stats.totalResumes,
      icon: "📄",
      color: "#2563eb",
      bg: "#dbeafe",
    },
    {
      title: "Highest ATS",
      value: `${stats.highestATS}%`,
      icon: "🏆",
      color: "#16a34a",
      bg: "#dcfce7",
    },
    {
      title: "Average ATS",
      value: `${stats.averageATS}%`,
      icon: "📊",
      color: "#f59e0b",
      bg: "#fef3c7",
    },
    {
      title: "Lowest ATS",
      value: `${stats.lowestATS}%`,
      icon: "📉",
      color: "#dc2626",
      bg: "#fee2e2",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "25px",
        marginBottom: "40px",
      }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            background: "#fff",
            borderRadius: "18px",
            padding: "25px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            textAlign: "center",
            transition: "0.3s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow =
              "0 12px 30px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 8px 20px rgba(0,0,0,0.08)";
          }}
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              margin: "0 auto 18px",
              borderRadius: "50%",
              background: card.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
            }}
          >
            {card.icon}
          </div>

          <h3
            style={{
              fontSize: "18px",
              color: "#555",
              marginBottom: "15px",
            }}
          >
            {card.title}
          </h3>

          <h2
            style={{
              fontSize: "38px",
              color: card.color,
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            {card.value}
          </h2>

          <p
            style={{
              color: "#777",
              fontSize: "14px",
            }}
          >
            Updated automatically
          </p>
        </div>
      ))}
    </div>
  );
}