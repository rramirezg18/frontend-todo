import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import Unauthorized from "./pages/Unauthorized/Unauthorized";
import DashboardLayout from "./layouts/DashboardLayout";
import Users from "./pages/Users/Users";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
           <DashboardLayout/>
        </ProtectedRoute>
      }
      >
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
      </Route>
      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  );
}

export default App;