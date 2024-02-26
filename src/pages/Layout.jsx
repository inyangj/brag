import React, { useEffect } from "react";
import Nav from "../components/Nav";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="relative font-montserrat">
      <header>
        <Nav />
        
   
      </header>
      <Outlet />
     <Footer />
     
    </div>
  );
};

export default Layout;
