import { Routes, Route } from "react-router-dom";
import CreateTask from "../../pages/admin/Tasks/CreateTask";
import EditTask from "../../pages/admin/Tasks/EditTask";
import AdminLayout from "../../layouts/Admin";
import Dashboard from "../../pages/admin/Dashboard";
import NotFound from "../../pages/NotFound";
import AllTasks from "../../pages/admin/Tasks/AllTasks";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/tasks" element={<AllTasks />} />
        <Route path="/tasks/create" element={<CreateTask />} />
        <Route path="/tasks/edit/:id" element={<EditTask />} />
        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
  );
}
