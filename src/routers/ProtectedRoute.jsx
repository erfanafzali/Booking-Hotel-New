import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthentiacted } = useAuth();

  useEffect(() => {
    if (!isAuthentiacted) navigate("/login");
  }, [isAuthentiacted, navigate]);

  return isAuthentiacted ? children : null;
}

export default ProtectedRoute;
