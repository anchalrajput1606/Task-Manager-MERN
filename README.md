# 📋 Task Manager MERN Application

A full-stack Task Manager Web Application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). The application allows users to securely register, log in, and manage their personal tasks with JWT authentication.

---

## 🚀 Features

### 👤 User Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Logout

### ✅ Task Management
- Add New Task
- View Personal Tasks
- Edit Existing Task
- Delete Task
- Mark Task as Completed

### 🗄 Database
- MongoDB Database
- User-specific Tasks
- Secure Password Hashing using bcrypt

### 🎨 Frontend
- Responsive User Interface
- React Components
- Axios API Integration
- Modern Dashboard Design

---

## 🛠 Technologies Used

### Frontend
- React.js
- React Router DOM
- Axios
- CSS3

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcryptjs

---

## 📁 Project Structure

```
Task-Manager-MERN/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/Task-Manager-MERN.git
```

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## 📸 Screenshots

### Login Page

<img width="956" height="717" alt="image" src="https://github.com/user-attachments/assets/c33ba03e-f275-4253-9540-51c3fc0af680" />


### Register Page

<img width="957" height="807" alt="image" src="https://github.com/user-attachments/assets/ba260d47-7a8c-44a1-a992-4b171fe85056" />


### Dashboard

<img width="935" height="542" alt="image" src="https://github.com/user-attachments/assets/c32ab66a-543f-484b-9d8c-69a8ebca9f1c" />


---

## 📚 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### Tasks

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/tasks | Get All Tasks |
| POST | /api/tasks | Create Task |
| PUT | /api/tasks/:id | Update Task |
| DELETE | /api/tasks/:id | Delete Task |

---



