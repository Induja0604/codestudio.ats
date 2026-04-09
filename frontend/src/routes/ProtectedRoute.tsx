import { useContext } from "react";
import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { AuthContext } from "../context/AuthContext";

interface Props {
  children: ReactNode;
  role: string;
}

export default function ProtectedRoute({ children, role }: Props) {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <Navigate to="/login" />;
  }

  const { user } = authContext;

  
  if (!user) {
    return <Navigate to="/login" />;
  }


  if (user.role !== role) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}