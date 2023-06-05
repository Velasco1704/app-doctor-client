import { Navigate } from "react-router-dom";
import { PropsProtectedRoute } from "../interface/props/PropsProtectedRoute.interface";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export const ProtectedRoute: React.FC<PropsProtectedRoute> = ({ children }) => {
  const { user } = useSelector((state: RootState) => state.user);
  return user ? children : <Navigate to="/login" />;
};
