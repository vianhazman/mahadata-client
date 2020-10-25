import React from "react";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import MobileLayout from "./layouts/MobileLayout";
// import TopBar from "./components/TopBar";

function App() {
  const isMobile = window.screen.width < 400;
  return <div>{isMobile ? <MobileLayout /> : <DashboardLayout />}</div>;
}

export default App;
