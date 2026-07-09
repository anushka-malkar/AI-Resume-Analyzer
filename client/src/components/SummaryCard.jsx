export default function SummaryCard({ summary }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-3">
        Resume Summary
      </h2>

      <p className="text-gray-700 leading-7">
        {summary}
      </p>
    </div>
  );
}