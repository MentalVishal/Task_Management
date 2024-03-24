import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const Auth = useSelector((store) => store.userReducer.isAuth);

  return Auth ? children : <Navigate to={"/login"} />;
};
