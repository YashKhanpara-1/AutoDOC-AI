# 🤖 AutoDOC AI

> **AI-Powered Autonomous Document Generation Platform**

AutoDOC AI is a full-stack AI application that automates professional document creation using Large Language Models (LLMs). Users can describe their requirements in natural language, and the AI generates well-structured, editable DOCX documents through a multi-step autonomous workflow.

---

## ✨ Features

- 🤖 AI-powered document generation
- 📝 Creates professional DOCX documents
- ⚡ FastAPI REST backend
- 🎨 Modern Next.js frontend
- 🔄 Multi-step AI agent workflow
- 📄 Editable Word document export
- 🔐 Secure environment variable management
- 🚀 Clean and modular project architecture

---

## 🏗️ Architecture

```text
                 User
                   │
                   ▼
        Next.js Frontend (React)
                   │
            REST API Requests
                   │
                   ▼
          FastAPI Backend
                   │
      ┌────────────┴────────────┐
      │                         │
      ▼                         ▼
 Planner Agent            Reviewer Agent
      │                         │
      └────────────┬────────────┘
                   ▼
            Groq Llama 3 LLM
                   │
                   ▼
          DOCX Document Generator
                   │
                   ▼
          Generated Document
```

---

## 🛠️ Tech Stack

### Backend

- Python
- FastAPI
- LangGraph
- Groq (Llama 3)
- python-docx

### Frontend

- Next.js
- React
- TypeScript
- CSS

### AI

- Autonomous AI Agent Workflow
- Prompt Engineering
- LLM-based Content Generation

---

## 📂 Project Structure

```text
AutoDOC-AI/
│
├── backend/
│   ├── app/
│   ├── requirements.txt
│   ├── .env.example
│   └── .gitignore
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   └── package.json
│
├── README.md
├── LICENSE
└── .gitignore
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/YashKhanpara-1/AutoDOC-AI.git
```

```bash
cd AutoDOC-AI
```

---

### Backend Setup

```bash
cd backend
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file

```env
APP_NAME=AutoDoc AI
APP_VERSION=1.0.0

GROQ_API_KEY=your_api_key_here

MODEL_NAME=llama-3.3-70b-versatile
```

Run the backend

```bash
uvicorn app.main:app --reload
```

---

### Frontend Setup

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## 📡 API

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/generate` | Generate AI document |
| GET | `/health` | Health check |

---

## 📸 Screenshots

### Home Page

> _Coming Soon_

### Generated Document

> _Coming Soon_

---

## 🚀 Future Enhancements

- PDF export support
- Multiple document templates
- Authentication
- Document history
- Cloud storage integration
- Drag & drop file upload
- Multi-language document generation
- AI-powered document editing

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Submit a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Yash Khanpara**

GitHub: https://github.com/YashKhanpara-1

---

⭐ If you found this project helpful, consider giving it a star!
