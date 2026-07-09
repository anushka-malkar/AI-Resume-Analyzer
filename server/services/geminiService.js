const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const analyzeResume = async (resumeText) => {
  const prompt = `
You are an ATS Resume Analyzer.

Analyze the resume below and return ONLY valid JSON.

{
  "atsScore": 0,
  "summary": "",
  "skills": [],
  "missingSkills": [],
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}

Resume:
${resumeText}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  let text = response.text.trim();

  // Remove markdown code fences if Gemini adds them
  text = text.replace(/```json/g, "").replace(/```/g, "").trim();

  return JSON.parse(text);
};

module.exports = {
  analyzeResume,
};