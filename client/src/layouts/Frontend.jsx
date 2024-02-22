import { Outlet } from "react-router-dom";
import Header from "../components/Frontend/Header";
import { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../assets/frontend/css/main.css";

export default function FrontendLayout() {
  useEffect(()=>{
    //  document.createElement('link')
  }, [])

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
