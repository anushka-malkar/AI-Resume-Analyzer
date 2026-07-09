export default function StrengthCard({ strengths }) {

  return (

    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-4">
        Strengths
      </h2>

      <ul className="space-y-3">

        {strengths?.map((item, index) => (

          <li
            key={index}
            className="bg-green-100 p-3 rounded-lg"
          >
            💪 {item}
          </li>

        ))}

      </ul>

    </div>

  );

}