import { Routes, Route } from "react-router-dom";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";

import Admin from "../pages/admin/AdminDashboard";
import Recruiter from "../pages/recruiter/RecruiterDashboard";
import Manager from "../pages/manager/ManagerDashboard";
import HR from "../pages/hr/HRDashboard";

import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute role="Admin">
            <Admin />
          </ProtectedRoute>
        }
      />

      <Route
        path="/recruiter"
        element={
          <ProtectedRoute role="Recruiter">
            <Recruiter />
          </ProtectedRoute>
        }
      />

      <Route
        path="/manager"
        element={
          <ProtectedRoute role="Delivery Manager">
            <Manager />
          </ProtectedRoute>
        }
      />

      <Route
        path="/hr"
        element={
          <ProtectedRoute role="Finance/HR Ops">
            <HR />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}