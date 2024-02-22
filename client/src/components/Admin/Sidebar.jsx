import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="left-sidebar">
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          {/* <a href="./index.html" className="text-nowrap logo-img">
          <img src="../assets/images/logos/dark-logo.svg" width="180" alt="" />
        </a> */}
          <div
            className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
            id="sidebarCollapse"
          >
            <i className="ti ti-x fs-8"></i>
          </div>
        </div>

        <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">Home</span>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link"
                to="/admin"
                aria-expanded="false"
                end
              >
                <span>
                  <i className="ti ti-layout-dashboard"></i>
                </span>
                <span className="hide-menu">Dashboard</span>
              </NavLink>
            </li>

            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">Tasks</span>
            </li>
            <li className="sidebar-item">
              <NavLink
                className="sidebar-link"
                to="/admin/tasks"  
                end
              >
                <span>
                  <i className="ti ti-layout-dashboard"></i>
                </span>
                <span className="hide-menu">Manage Tasks</span>
              </NavLink>
            </li>

            <li className="sidebar-item">
              <NavLink
                className="sidebar-link"
                to="/admin/tasks/create"  
                end
              >
                <span>
                  <i className="ti ti-layout-dashboard"></i>
                </span>
                <span className="hide-menu">Add new Task</span>
              </NavLink>
            </li>

          </ul>
        </nav>
      </div>
    </aside>
  );
}
