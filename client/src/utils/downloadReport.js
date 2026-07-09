import jsPDF from "jspdf";

export default function downloadReport(user, analysis) {

  const pdf = new jsPDF();

  let y = 20;

  pdf.setFontSize(20);
  pdf.text("AI Resume Analysis Report", 20, y);

  y += 20;

  pdf.setFontSize(12);

  pdf.text(`Name : ${user.name}`,20,y);

  y += 10;

  pdf.text(`Email : ${user.email}`,20,y);

  y += 15;

  pdf.setFontSize(16);

  pdf.text(`ATS Score : ${analysis.atsScore}/100`,20,y);

  y += 20;

  pdf.setFontSize(14);

  pdf.text("Summary",20,y);

  y += 10;

  pdf.setFontSize(11);

  const summary = pdf.splitTextToSize(
    analysis.summary,
    170
  );

  pdf.text(summary,20,y);

  y += summary.length*7+10;

  pdf.setFontSize(14);

  pdf.text("Skills",20,y);

  y += 10;

  analysis.skills.forEach(skill=>{
      pdf.text("- "+skill,25,y);
      y+=7;
  });

  y+=10;

  pdf.text("Missing Skills",20,y);

  y+=10;

  analysis.missingSkills.forEach(skill=>{
      pdf.text("- "+skill,25,y);
      y+=7;
  });

  y+=10;

  pdf.text("Strengths",20,y);

  y+=10;

  analysis.strengths.forEach(item=>{
      pdf.text("- "+item,25,y);
      y+=7;
  });

  y+=10;

  pdf.text("Weaknesses",20,y);

  y+=10;

  analysis.weaknesses.forEach(item=>{
      pdf.text("- "+item,25,y);
      y+=7;
  });

  y+=10;

  pdf.text("Suggestions",20,y);

  y+=10;

  analysis.suggestions.forEach(item=>{
      pdf.text("- "+item,25,y);
      y+=7;
  });

  pdf.save("Resume_Analysis_Report.pdf");

}