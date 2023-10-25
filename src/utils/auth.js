import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const isAuth = () => {
  const { userType } = useAuth();
  // Use navigate to redirect user to sign in page
  const navigate = useNavigate();

  if (!userType) {
    navigate("/inicio-sesion");
  }
};
