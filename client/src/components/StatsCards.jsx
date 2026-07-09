export default function StatsCards({ stats }) {
  return (
   <div
  className="grid grid-cols-1 md:grid-cols-4 gap-6"
  style={{ marginBottom: "35px" }}
>

      <div className="bg-white shadow-lg rounded-xl p-6 text-center">
        <h2 className="text-lg font-semibold">
          📄 Total Resumes
        </h2>

        <p className="text-4xl font-bold text-blue-600 mt-3">
          {stats.totalResumes}
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 text-center">
        <h2 className="text-lg font-semibold">
          ⭐ Highest ATS
        </h2>

        <p className="text-4xl font-bold text-green-600 mt-3">
          {stats.highestATS}%
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 text-center">
        <h2 className="text-lg font-semibold">
          📈 Average ATS
        </h2>

        <p className="text-4xl font-bold text-yellow-600 mt-3">
          {stats.averageATS}%
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 text-center">
        <h2 className="text-lg font-semibold">
          📉 Lowest ATS
        </h2>

        <p className="text-4xl font-bold text-red-600 mt-3">
          {stats.lowestATS}%
        </p>
      </div>

    </div>
  );
}