import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Profile } from "./pages/Profile";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { useSelector } from "react-redux";
import { RootState } from "./app/store.ts";

export const App = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile id={user?.data.id} />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
