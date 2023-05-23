import { Route, Routes } from "react-router-dom";
import { Register } from "../Pages/Register";

const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<Register />} />
  </Routes>
);
export default AllRoutes;
