import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-resume-analyzer-eq9f.onrender.com/api",
});

export default API;