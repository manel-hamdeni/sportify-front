# 🏋️ Sportify — Gym Management Frontend

> Modern React frontend for a complete gym management system.
>
> 🔗 **Backend Repository:** [salle-sport-backend](https://github.com/manel-hamdeni/salle-sport-backend)

---

## 📌 About The Project

Sportify is a full-featured gym management web application. It allows admins to manage the gym, coaches to track sessions, and clients to subscribe to training sessions — all in one platform.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React.js |
| Language | JavaScript (ES6+) |
| HTTP Client | Axios |
| Routing | React Router |
| State | React Hooks |
| Styling | CSS3 |

---

## ✨ Features

- 🔐 **Authentication** — Register / Login with JWT
- 👤 **Role-based dashboards** — Admin, Coach, Client, Internaute
- 📅 **Session Planning** — View, join, and leave gym sessions
- 💬 **Internal Messaging** — Send and receive messages between users
- 🔔 **Notifications** — Real-time notification system
- 🏢 **Gym Info** — View gym details and available coaches
- 📊 **Admin Statistics** — User and session stats

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- Backend running on `http://localhost:5000`

### Installation

```bash
# Clone the repository
git clone https://github.com/manel-hamdeni/sportify-front.git
cd sportify-front

# Install dependencies
npm install

# Create .env file
REACT_APP_API_URL=http://localhost:5000

# Start the app
npm start
```

The app will run on `http://localhost:3000`

---

## 🔗 Connection with Backend

This frontend communicates with the [salle-sport-backend](https://github.com/manel-hamdeni/salle-sport-backend) REST API.

Make sure the backend is running before starting the frontend.

```
Frontend (React)  ←→  Backend API (Node/Express)  ←→  Database (MongoDB)
   :3000                    :5000                         Atlas
```

---

## 👤 User Roles

| Role | Access |
|---|---|
| `admin` | Full management — users, planning, gym |
| `coach` | View sessions and client profiles |
| `client` | Join sessions, manage subscription |
| `internaute` | Browse gym info and coaches |

---

## 👩‍💻 Author

**Manel Hamdeni** — 3rd Year Fullstack Developer Student @ ISET Zaghouan

[![LinkedIn](https://img.shields.io/badge/LinkedIn-manel--hamdeni-blue)](https://www.linkedin.com/in/manel-hamdeni-ba0281377/)
[![GitHub](https://img.shields.io/badge/GitHub-manel--hamdeni-black)](https://github.com/manel-hamdeni)
