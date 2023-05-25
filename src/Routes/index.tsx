import { Route, Routes, Navigate } from "react-router-dom";
import { Register } from "../Pages/Register";
import { Login } from "../Pages/Login";
import { Dashboard } from "../Pages/Dashboard";
import { IsOpen } from "../Pages/IsOpen";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/login"} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/:id" element={<Dashboard />} />
      <Route path="/restaurants" element={<IsOpen />} />
    </Routes>
  );
};
export default AllRoutes;
