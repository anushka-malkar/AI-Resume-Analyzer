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

## 🔐 Authentication APIs


### 1. Register User

**Method:**

```
POST
```

**Endpoint:**

```
/api/auth/register
```

**Description:**

Creates a new user account in the application.


**Request Body:**

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "password": "123456"
}
```


**Response:**

```json
{
  "success": true,
  "message": "User registered successfully"
}
```

---

### 2. Login User

**Method:**

```
POST
```

**Endpoint:**

```
/api/auth/login
```

**Description:**

Authenticates the user and generates JWT token.


**Request Body:**

```json
{
  "email": "john@gmail.com",
  "password": "123456"
}
```


**Response:**

```json
{
  "success": true,
  "token": "JWT_TOKEN"
}
```

---

## 📄 Resume APIs


### Upload Resume


**Method:**

```
POST
```


**Endpoint:**

```
/api/resume/upload
```


**Description:**

Uploads a resume PDF and analyzes resume content using AI.


**Authorization:**

```
Bearer JWT Token
```


**Request Type:**

```
multipart/form-data
```


**Form Data:**

```
resume : resume.pdf
```


**Response:**

```json
{
  "success": true,
  "message": "Resume analyzed successfully"
}
```
# ⚙️ Installation Guide
## 1. Clone Repository


```bash
git clone https://github.com/anushka-malkar/AI-Resume-Analyzer.git
```

Example:

```bash
git clone https://github.com/yourusername/AI-Resume-Analyzer.git
```
## 2. Open Project Folder


```bash
cd AI-Resume-Analyzer
```
# 🔙 Backend Setup


## Navigate to server folder

```bash
cd server
```


## Install dependencies

```bash
npm install
```
## Create .env file


Inside the server folder create:

```
.env
```


Add the following:


```env
PORT=5000

SUPABASE_URL=your_supabase_url

SUPABASE_KEY=your_supabase_key

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key
```
## Start Backend Server


```bash
npm run dev
```


Backend will run on:

```
http://localhost:5000
```
# 🎨 Frontend Setup


Open a new terminal:


Navigate to client folder:

```bash
cd client
```


Install packages:

```bash
npm install
```


Start React application:

```bash
npm run dev
```


Frontend will run on:

```
http://localhost:5173
```
## Author

Anushka Malkar