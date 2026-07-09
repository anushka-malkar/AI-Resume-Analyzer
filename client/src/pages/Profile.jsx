import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

export default function Profile() {

  const user = JSON.parse(localStorage.getItem("user"));

  const [stats, setStats] = useState({
    totalResumes: 0,
    highestATS: 0,
    averageATS: 0,
    lowestATS: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {

      const token = localStorage.getItem("token");

      const res = await API.get("/resume/stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStats(res.data.stats);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto mt-10">

        <div className="bg-white shadow-xl rounded-xl p-8">

          <h1 className="text-4xl font-bold mb-8">
            👤 My Profile
          </h1>

          <div className="space-y-5 text-xl">

            <p>
              <strong>Name :</strong> {user.name}
            </p>

            <p>
              <strong>Email :</strong> {user.email}
            </p>

            <hr />

            <p>
              <strong>Total Resumes :</strong> {stats.totalResumes}
            </p>

            <p>
              <strong>Highest ATS :</strong> {stats.highestATS}%
            </p>

            <p>
              <strong>Average ATS :</strong> {stats.averageATS}%
            </p>

            <p>
              <strong>Lowest ATS :</strong> {stats.lowestATS}%
            </p>

          </div>

        </div>

      </div>

    </>
  );
}