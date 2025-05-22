import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="max-w-screen-[1920px] mx-auto h-auto">
      <Header />
      
      <Outlet />
      
      <Footer />
    </div>
  );
}

export default App;
