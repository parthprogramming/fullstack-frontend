import { replace, useNavigate } from "react-router-dom";
import useStore from "./context/store";
import { useEffect } from "react";

const AuthGuard = ({ children }) => {
  const { isLoggedIn } = useStore();
  const navigate = useNavigate();

  console.log(isLoggedIn)

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login?message=Please login first",{replace:true});
    }
  }, [isLoggedIn])

  return <>{children}</>;
};

export default AuthGuard;
