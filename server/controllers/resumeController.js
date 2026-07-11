const fs = require("fs");
const pdfParse = require("pdf-parse");
const { analyzeResume } = require("../services/geminiService");
const supabase = require("../config/supabase");

// =======================
// Upload & Analyze Resume
// =======================

const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a PDF resume",
      });
    }
    console.log("Uploaded File:", req.file);
console.log("File Path:", req.file.path);

    const pdfBuffer = fs.readFileSync(req.file.path);

    const pdfData = await pdfParse(pdfBuffer);

    const analysis = await analyzeResume(pdfData.text);

    const { data, error } = await supabase
      .from("resume_history")
      .insert([
        {
          user_id: req.user.id,
          file_name: req.file.originalname,
          ats_score: analysis.atsScore,
          summary: analysis.summary,
          skills: analysis.skills,
          missing_skills: analysis.missingSkills,
          strengths: analysis.strengths,
          weaknesses: analysis.weaknesses,
          suggestions: analysis.suggestions,
        },
      ])
      .select();

    console.log("Saved Data:", data);
    console.log("Supabase Error:", error);

    if (error) {
      throw error;
    }

    res.status(200).json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =======================
// Get Resume History
// =======================

const getResumeHistory = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("resume_history")
      .select("*")
      .eq("user_id", req.user.id)
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    res.status(200).json({
      success: true,
      history: data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// =======================
// Delete Resume
// =======================

const deleteResume = async (req, res) => {
  
  try {
    const { id } = req.params;

    console.log("Decoded JWT:", req.user);
console.log("User ID from JWT:", req.user.id);

    const { data, error } = await supabase
      .from("resume_history")
      .delete()
      .eq("id", id)
      .eq("user_id", req.user.id)
      .select();

    console.log("Deleted Data:", data);
    console.log("Supabase Error:", error);

    if (error) throw error;

    if (!data || data.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Resume not found or does not belong to this user",
      });
    }

    res.json({
      success: true,
      message: "Resume deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// =======================
// Dashboard Statistics
// =======================

const getDashboardStats = async (req, res) => {
  try {

    const { data, error } = await supabase
      .from("resume_history")
      .select("ats_score")
      .eq("user_id", req.user.id);

    if (error) throw error;

    const totalResumes = data.length;

    let highestATS = 0;
    let lowestATS = 0;
    let averageATS = 0;

    if (totalResumes > 0) {

      const scores = data.map(item => item.ats_score);

      highestATS = Math.max(...scores);
      lowestATS = Math.min(...scores);

      averageATS = Math.round(
        scores.reduce((a, b) => a + b, 0) / scores.length
      );

    }

    res.json({
      success: true,
      stats: {
        totalResumes,
        highestATS,
        lowestATS,
        averageATS,
      },
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
module.exports = {
  uploadResume,
  getResumeHistory,
  deleteResume,
  getDashboardStats,
};