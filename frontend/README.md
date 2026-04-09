# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


# 🚀 Code Studio ATS (Applicant Tracking System)

A full-stack **Role-Based ATS (Applicant Tracking System)** built with:

* ⚛️ React 18 (TypeScript)
* 🌐 Node.js + Express
* 🍃 MongoDB (Local with Mongo Shell)
* 🔐 JWT Authentication
* 🎨 Accenture-themed UI (Inline CSS)

---

# 📁 Project Structure

```
code-studio-ats/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── authController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── roleMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── layout/
│   │   │       └── Layout.tsx
│   │   ├── context/
│   │   │   ├── AuthContext.tsx
│   │   │   └── AuthProvider.tsx
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   │   ├── Login.tsx
│   │   │   │   └── Signup.tsx
│   │   │   ├── admin/
│   │   │   │   └── AdminDashboard.tsx
│   │   │   ├── recruiter/
│   │   │   │   └── RecruiterDashboard.tsx
│   │   │   ├── manager/
│   │   │   │   └── ManagerDashboard.tsx
│   │   │   └── hr/
│   │   │       └── HRDashboard.tsx
│   │   ├── routes/
│   │   │   ├── AppRoutes.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│
└── README.md
```

---

# 🔐 Features

## Authentication

* Signup with Name, Email, Password, Role
* Login with JWT (1-hour expiry)
* Password hashing using bcrypt

## Role-Based Access (RBAC)

* Admin
* Recruiter
* Delivery Manager
* Finance/HR (Read-only)

## Dashboards

* 👑 Admin → Manage users
* 👨‍💼 Recruiter → Hiring pipeline
* 📊 Delivery Manager → Team overview
* 💰 HR → Analytics (read-only)

## Security

* JWT-based authentication
* Protected routes
* Role-based authorization

---

# ⚙️ Backend Setup

## 1️⃣ Navigate to backend

```bash
cd backend
```

## 2️⃣ Install dependencies

```bash
npm install
```

## 3️⃣ Create `.env` file

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/ats_db
JWT_SECRET=your_secret_key
```

## 4️⃣ Start MongoDB (Local)

Make sure MongoDB is running:

```bash
mongod
```

Then open mongo shell:

```bash
mongosh
```

## 5️⃣ Create Database

```js
use ats_db

db.createCollection("users")

db.users.insertOne({
  name: "Test User",
  email: "test@mail.com",
  password: "$2a$10$examplehashedpassword",
  role: "Admin",
  active: true
})
```

## 6️⃣ Run backend

```bash
npm run dev
```

Server will run at:

```
http://localhost:5000
```

---

# 🎨 Frontend Setup

## 1️⃣ Navigate to frontend

```bash
cd frontend
```

## 2️⃣ Install dependencies

```bash
npm install
```

## 3️⃣ Start frontend

```bash
npm run dev
```

App runs at:

```
http://localhost:5173
```

---

# 🔄 Application Flow

## Signup

* User selects role
* Data saved in MongoDB

## Login

* JWT token generated
* User + role stored in localStorage

## Routing

* Admin → `/admin`
* Recruiter → `/recruiter`
* Manager → `/manager`
* HR → `/hr`

---

# 🔐 Protected Routes

* Unauthorized users → redirected to Login
* Wrong role → access denied

---

# 🎨 UI Design

* Accenture Theme (#A100FF)
* Minimal & corporate layout
* Sidebar + Navbar
* Cards, tables, dashboards
* Fully responsive

---

# 🧪 Test Credentials

```
Email: test@mail.com
Password: (your hashed password equivalent)
Role: Admin
```

---

# 🚀 Future Enhancements

* User management (activate/deactivate)
* Role assignment by admin
* Real-time dashboard data
* Charts integration (Recharts)
* Notifications system
* Profile management

---

# 👨‍💻 Author

Developed as a **full-stack ATS system with RBAC**.

---

# ⭐ Notes

* Uses **local MongoDB (no Atlas)**
* Inline CSS (no Tailwind dependency)
* TypeScript-safe frontend (no errors)

---
