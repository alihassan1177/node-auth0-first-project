import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminRoutes from "./routes/admin";
import NotFound from "./pages/NotFound";
import FrontendRoutes from "./routes/frontend";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/*" element={<FrontendRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
