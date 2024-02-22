import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import FrontendLayout from "../../layouts/Frontend";

export default function FrontendRoutes() {
  return (
    <Routes>
      <Route element={<FrontendLayout />}>
        <Route index exact element={<Home />} />
      </Route>
    </Routes>
  );
}
