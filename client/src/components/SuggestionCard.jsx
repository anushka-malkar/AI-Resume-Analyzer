export default function SuggestionCard({ suggestions }) {

  return (

    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-4">
        AI Suggestions
      </h2>

      <ul className="space-y-3">

        {suggestions?.map((item, index) => (

          <li
            key={index}
            className="bg-blue-50 p-3 rounded-lg"
          >
            ✅ {item}
          </li>

        ))}

      </ul>

    </div>

  );

}