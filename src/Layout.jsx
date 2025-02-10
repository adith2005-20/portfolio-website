import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Header />
      <div
        className="dot-matrix-bg min-h-screen"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
