# AI Resume Analyzer 🚀

An AI-powered Resume Analyzer that analyzes resumes and provides ATS score, skills analysis, strengths, weaknesses and improvement suggestions using Artificial Intelligence.

## Features

- Resume Upload (PDF)
- AI Resume Analysis
- ATS Score Prediction
- Skill Extraction
- Strength Analysis
- Weakness Detection
- AI Suggestions
- User Authentication
- Resume History
- Download Report

## Tech Stack

### Frontend
- React.js
- Vite
- CSS
- Axios

### Backend
- Node.js
- Express.js
- JWT Authentication
- Multer

### Database
- Supabase

### AI
- Google Gemini AI


## Project Structure

```
AI-Resume-Analyzer

├── client
│   ├── src
│   ├── components
│   ├── pages
│   └── services
│
└── server
    ├── controllers
    ├── routes
    ├── middleware
    ├── services
    └── config
```


## Installation

Clone the repository:

```
git clone https://github.com/anushka-malkar/AI-Resume-Analyzer.git
```


## Frontend Setup

```
cd client
```

Install dependencies:

```
npm install
```

Run:

```
npm run dev
```


## Backend Setup

Open another terminal:

```
cd server
```

Install dependencies:

```
npm install
```

Run:

```
npm run dev
```


## Environment Variables

Create `.env` inside server folder:

```
SUPABASE_URL=
SUPABASE_KEY=
JWT_SECRET=
GEMINI_API_KEY=
```


## Future Improvements

- AI Interview Preparation
- Job Recommendation System
- Resume Matching
- LinkedIn Profile Analyzer
- Cloud Deployment

## 📸 Screenshots

### 🔐 Login Page
![Login Page](screenshots/login.png)

### 📝 Register Page
![Register Page](screenshots/register.png)

### 📊 Dashboard
![Dashboard](screenshots/dashboard.png)

### 📄 Resume Analyzer
![Resume Analyzer](screenshots/analyzer.png)

# 🏗️ System Architecture

![Architecture Diagram](screenshots/architecture.png)

# 📂 Project Structure

```text
AI-Resume-Analyzer
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── config
│   │   └── supabase.js
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   └── resumeController.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── resumeRoutes.js
│   │
│   ├── uploads
│   │
│   ├── server.js
│   └── package.json
│
├── screenshots
│   ├── login.png
│   ├── register.png
│   ├── dashboard.png
│   ├── analyzer.png
│   └── architecture.png
│
├── README.md
└── .gitignore
```

## Author

Anushka Malkar