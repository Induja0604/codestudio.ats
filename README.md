# Code Studio ATS – Authentication & Role-Based Access (RBAC)

##  Project Overview

This project implements a secure Authentication and Role-Based Access Control (RBAC) system for the Code Studio ATS application.

It supports multiple user roles with different permissions and dashboards using JWT-based authentication.

---

##  Tech Stack

* **Frontend:** React 18
* **Backend:** Node.js + Express
* **Database:** MongoDB (Mongoose)
* **Authentication:** JSON Web Token (JWT)

---

##  User Roles

* **Admin**

  * Manage users (activate/deactivate)

* **Recruiter**

  * Access "My Requirements"

* **Delivery Manager**

  * Access "Team Overview"

* **Finance / HR Ops**

  * Read-only access

---

##  Features

### 1. Signup

* Fields:

  * Name
  * Email
  * Password
  * Confirm Password
  * Role
* Validations:

  * Email format validation
  * Strong password enforcement
  * Duplicate email check
* Password stored securely using hashing

---

### 2. Login

* Fields:

  * Email
  * Password
* Features:

  * JWT token generation (1-hour expiry)
  * Token contains:

    * userId
    * email
    * role
* Handles invalid credentials

---

### 3. Dashboards

* Role-based dashboards:

  * Admin → User management
  * Recruiter → My Requirements
  * Delivery Manager → Team Overview
  * Finance/HR → Read-only view

---

### 4. Security

#### Backend

* JWT Authentication Middleware
* Role-based Authorization Middleware

#### Frontend

* Protected Routes
* Redirection:

  * Not logged in → Login page
  * Unauthorized access → 403 Page

---

### 5. Logout

* Clears JWT token
* Redirects to login page

---

---

##  Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/code-studio-ats.git
cd code-studio-ats
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm start
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Project Structure

```
code-studio-ats/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── controllers/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   └── App.jsx
```

---

##  API Endpoints

### Auth Routes

* `POST /api/auth/signup`
* `POST /api/auth/login`

### Admin Routes

* `GET /api/users`
* `PATCH /api/users/:id/status`

---

##  Middleware

* **authMiddleware**

  * Verifies JWT token

* **roleMiddleware**

  * Restricts access based on user role

---

##  Example JWT Payload

```json
{
  "userId": "123456",
  "email": "user@example.com",
  "role": "Admin"
}
```

---

##  Deliverables

* ✔ Full working code (Frontend + Backend)
* ✔ Secure authentication system
* ✔ Role-based dashboards
* ✔ Protected routes
* ✔ No runtime errors

---

##  Future Enhancements

* Refresh tokens
* Email verification
* Password reset functionality
* Audit logs for admin actions

---

## Author

**Induja Narnavaram**

---
