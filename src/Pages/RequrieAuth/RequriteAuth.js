import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../Firebase.init";
import Loding from "../Loding/Loding";

const RequriteAuth = ({ children }) => {
  const [user, loding] = useAuthState(auth);
  const location = useLocation();
  if (loding) {
    return <Loding></Loding>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequriteAuth;
