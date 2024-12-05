import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import Loading from "../../Loading/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateReg = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/"></Navigate>;
};

export default PrivateReg;
