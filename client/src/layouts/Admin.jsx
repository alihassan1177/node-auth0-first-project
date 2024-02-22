import { Outlet } from "react-router-dom";
import Header from "../components/Admin/Header";
import Sidebar from "../components/Admin/Sidebar";
import "../assets/admin/css/styles.min.css";
import "../assets/admin/libs/jquery/dist/jquery.min.js"
import "../assets/admin/libs/bootstrap/dist/js/bootstrap.bundle.min.js"
// import "../assets/admin/js/sidebarmenu.js"
import "../assets/admin/js/app.min.js"
import "../assets/admin/libs/apexcharts/dist/apexcharts.min.js"
import "../assets/admin/libs/simplebar/dist/simplebar.js"

export default function AdminLayout() {
  return (
    <>
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <Sidebar />
        <div className="body-wrapper">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}
