import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";

export default function History() {
  const navigate = useNavigate();

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/resume/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setHistory(res.data.history);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const deleteResume = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this resume?"
  );

  if (!confirmDelete) return;

  try {

    const token = localStorage.getItem("token");

    await API.delete(`/resume/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success("Resume deleted successfully!");

    fetchHistory();

  } catch (error) {

    console.log(error);

    toast.error("Failed to delete resume.");

  }

};

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto mt-10 px-5">

        <h1 className="text-4xl font-bold mb-8">
          Resume History
        </h1>

        {loading ? (
          <h2 className="text-xl">Loading...</h2>
        ) : history.length === 0 ? (
          <h2 className="text-xl">No Resume History Found</h2>
        ) : (
          <div className="space-y-6">

            {history.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg p-6"
              >

                <h2 className="text-2xl font-bold">
                  📄 {item.file_name}
                </h2>

                <p className="mt-3">
                  ATS Score :
                  <span className="font-bold text-green-600">
                    {" "}
                    {item.ats_score}%
                  </span>
                </p>

                <p className="mt-2">
                  Uploaded :
                  {" "}
                  {new Date(item.created_at).toLocaleString()}
                </p>

                <div className="flex gap-4 mt-5">

  <button
    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
    onClick={() =>
      navigate("/dashboard", {
        state: {
          analysis: {
            atsScore: item.ats_score,
            summary: item.summary,
            skills: item.skills,
            missingSkills: item.missing_skills,
            strengths: item.strengths,
            weaknesses: item.weaknesses,
            suggestions: item.suggestions,
          },
        },
      })
    }
  >
    View Analysis
  </button>

  <button
    className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
    onClick={() => deleteResume(item.id)}
  >
    Delete
  </button>

</div>

              </div>

            ))}

          </div>
        )}
      </div>
    </>
  );
}