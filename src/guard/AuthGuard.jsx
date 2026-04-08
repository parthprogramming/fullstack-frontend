import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../context/authContext";
import { useNotification } from "../context/notificationContext";

const AuthGuard = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const { showNotification } = useNotification();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      showNotification("Please login first !!");
      navigate("/login?message=Please login first", { replace: true });
    }
  }, [isLoggedIn])

  return <>{children}</>;
};

export default AuthGuard;
