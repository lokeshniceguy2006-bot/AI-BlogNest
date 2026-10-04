Sure 👍 Here is a **professional README.md** for your **AI BlogNest API** project. You can copy this directly into GitHub.

````markdown
# AI BlogNest API

AI BlogNest is an AI-powered blog and document management web application. It allows users to create, manage, and organize blog content and documents with the help of Artificial Intelligence.

## 🚀 Live Project

**Frontend:**  
https://ai-blognest.onrender.com/

**Backend API:**  
https://ai-blognest-api-7.onrender.com/

**GitHub Repository:**  
https://github.com/lokeshniceguy2006-bot/AI-BlogNest/

---

## 📌 Project Overview

AI BlogNest provides a simple platform for creating and managing blog content.

The application combines a web-based frontend with a backend REST API. The backend handles authentication, blog management, document management, and AI-powered content generation.

The main goal of this project is to make blog creation easier by allowing users to generate and manage content from a single platform.

---

## ✨ Features

### 🔐 User Authentication
- User registration
- User login
- JWT-based authentication
- Secure password handling
- Protected API routes

### 📝 Blog Management
- Create new blogs
- View blogs
- Edit existing blogs
- Delete blogs
- Search and manage blog content

### 🤖 AI Blog Generation
- Enter a blog topic
- Generate blog content using AI
- Generate titles and content
- Edit AI-generated content before saving

### 📄 Document Management
- Create documents
- Edit documents
- Save documents
- View documents
- Delete documents

### 🔎 Search
- Search blog content
- Find documents easily
- Retrieve relevant content through API requests

### 🌐 REST API
The backend provides REST API endpoints for communication between the frontend, backend, database, and AI services.

---

## 🏗️ System Architecture

```text
                    ┌──────────────────────┐
                    │      USER / BROWSER  │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      FRONTEND        │
                    │   HTML / CSS / JS    │
                    └──────────┬───────────┘
                               │
                         REST API / JSON
                               │
                               ▼
                    ┌──────────────────────┐
                    │       BACKEND        │
                    │   Node.js + Express  │
                    └───────┬───────┬──────┘
                            │       │
                            ▼       ▼
                   ┌────────────┐ ┌──────────────┐
                   │  MongoDB   │ │   Gemini AI  │
                   │  Database  │ │  AI Service  │
                   └────────────┘ └──────────────┘
````

---

## 🛠️ Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* REST API

### Database

* MongoDB
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcrypt

### Artificial Intelligence

* Google Gemini API

### Deployment

* Render

### Development Tools

* Visual Studio Code
* Git
* GitHub
* Postman

---

## 📂 Project Structure

```text
AI-BlogNest/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── create-blog.html
│   ├── documents.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── api.js
│       ├── auth.js
│       ├── blog.js
│       └── document.js
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Blog.js
│   │   └── Document.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── blogRoutes.js
│   │   ├── documentRoutes.js
│   │   └── aiRoutes.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── blogController.js
│   │   ├── documentController.js
│   │   └── aiController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   └── server.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🔗 API Endpoints

### Authentication

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login user          |

### Blogs

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | `/api/blogs`     | Get all blogs       |
| GET    | `/api/blogs/:id` | Get a specific blog |
| POST   | `/api/blogs`     | Create a blog       |
| PATCH  | `/api/blogs/:id` | Update a blog       |
| DELETE | `/api/blogs/:id` | Delete a blog       |

### AI

| Method | Endpoint                | Description              |
| ------ | ----------------------- | ------------------------ |
| POST   | `/api/ai/generate-blog` | Generate AI blog content |

### Documents

| Method | Endpoint             | Description     |
| ------ | -------------------- | --------------- |
| GET    | `/api/documents`     | Get documents   |
| POST   | `/api/documents`     | Create document |
| PATCH  | `/api/documents/:id` | Update document |
| DELETE | `/api/documents/:id` | Delete document |

### Health Check

```text
GET /api/health
```

Used to check whether the backend server is running.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/lokeshniceguy2006-bot/AI-BlogNest.git
```

### 2. Open the project

```bash
cd AI-BlogNest
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create environment variables

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

### 5. Start the server

```bash
npm start
```

For development:

```bash
npm run dev
```

---

## 🔒 Environment Variables

Never upload your real API keys or passwords to GitHub.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
```

The real `.env` file should be included in `.gitignore`.

---

## 🧪 API Testing

The API can be tested using:

* Postman
* Thunder Client
* Browser
* Frontend application

Example health check:

```text
GET /api/health
```

Expected response:

```json
{
  "success": true,
  "message": "AI BlogNest API is running"
}
```

---

## 🔄 Application Flow

```text
User
  ↓
Frontend
  ↓
REST API
  ↓
Express Backend
  ↓
Authentication / Validation
  ↓
MongoDB
  ↓
Gemini AI
  ↓
Generated / Stored Content
  ↓
Frontend
  ↓
User
```

---

## 🎯 Project Objectives

* Provide an easy-to-use blogging platform.
* Reduce the effort required to create blog content.
* Provide AI-assisted content generation.
* Provide secure user authentication.
* Store and manage blogs using a database.
* Provide document management functionality.
* Demonstrate full-stack web development and REST API integration.

---

## 👨‍💻 Developer

**L. Lokesh**

BCA – Computer Applications

AI BlogNest is developed as an academic full-stack web application project.

---

## 📜 License

This project is created for educational and academic purposes.

```

### ⚠️ One important thing

**Don't paste this README yet if those folders/endpoints don't actually exist in your GitHub project.** Your screenshot currently shows only a basic structure. We should first make the **actual backend match the README**, otherwise your evaluator may click an API endpoint that doesn't exist.

If your goal is **“AI BlogNest API perfect ready”**, the next step should be **updating the actual backend code**, not just the README.
```
