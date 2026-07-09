export default function WeaknessCard({ weaknesses }) {

  return (

    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-4">
        Weaknesses
      </h2>

      <ul className="space-y-3">

        {weaknesses?.map((item, index) => (

          <li
            key={index}
            className="bg-red-100 p-3 rounded-lg"
          >
            ❌ {item}
          </li>

        ))}

      </ul>

    </div>

  );

}