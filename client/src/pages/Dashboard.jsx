import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import API from "../services/api";

import Navbar from "../components/Navbar";
import ResumeUpload from "../components/ResumeUpload";
import ATSCard from "../components/ATSCard";
import SummaryCard from "../components/SummaryCard";
import SkillsCard from "../components/SkillsCard";
import StrengthCard from "../components/StrengthCard";
import WeaknessCard from "../components/WeaknessCard";
import SuggestionCard from "../components/SuggestionCard";
import StatsCards from "../components/StatsCards";
import ATSChart from "../components/ATSChart";

import downloadReport from "../utils/downloadReport";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();

 const [analysis, setAnalysis] = useState(
  location.state?.analysis || null
);
const [stats, setStats] = useState({

  totalResumes: 0,
  highestATS: 0,
  lowestATS: 0,
  averageATS: 0,
});
const [history, setHistory] = useState([]);

useEffect(() => {
  fetchStats();
  fetchHistory();
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
  }
};
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        <div className="flex justify-between items-center mb-8">

          <div>

            <div
  style={{
    background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
    color: "white",
    padding: "35px",
    borderRadius: "18px",
    marginBottom: "30px",
  }}
>
  <h1
    style={{
      fontSize: "38px",
      marginBottom: "10px",
    }}
  >
    👋 Welcome Back, {user?.name}
  </h1>

  <p
    style={{
      fontSize: "18px",
      opacity: 0.9,
    }}
  >
    Analyze your resume with AI and improve your ATS score.
  </p>
</div>

          </div>

          <Link
            to="/history"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Resume History
          </Link>

        </div>

        <ResumeUpload
  setAnalysis={(data) => {
    setAnalysis(data);

    fetchStats();

    fetchHistory();
  }}
/>
        <StatsCards stats={stats} />
        <ATSChart history={history} />

       <h2
  style={{
    fontSize: "30px",
    marginTop: "40px",
    marginBottom: "25px",
    color: "#1e3a8a",
  }}
>
  ⭐ Latest Resume Analysis
</h2>
 {analysis && (

          <div className="flex gap-4 mt-6 mb-6">

            <button
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              onClick={() => downloadReport(user, analysis)}
            >
              Download PDF Report
            </button>

          </div>

        )}

        {analysis && (

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8"
          >

            <ATSCard score={analysis.atsScore} />

            <SummaryCard summary={analysis.summary} />

            <SkillsCard
              title="Skills Found"
              skills={analysis.skills}
              color="#16a34a"
            />

            <SkillsCard
              title="Missing Skills"
              skills={analysis.missingSkills}
              color="#dc2626"
            />

            <StrengthCard strengths={analysis.strengths} />

            <WeaknessCard weaknesses={analysis.weaknesses} />

            <SuggestionCard suggestions={analysis.suggestions} />

          </motion.div>

        )}

      </div>
    </>
  );
}