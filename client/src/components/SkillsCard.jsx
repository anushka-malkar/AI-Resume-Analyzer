export default function SkillsCard({
  title,
  skills,
  color,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-xl font-bold mb-4">
        {title}
      </h2>

      <div className="flex flex-wrap gap-3">

        {skills?.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded-full text-white"
            style={{
              background: color,
            }}
          >
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
}