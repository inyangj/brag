import React from "react";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="relative">
      <header>
        <Nav />
        <section className="flex mt-10 bg-[#095EDC2B]  justify-center items-center h-[10rem] md:h-[22rem]">
          <h2 className="text-3xl md:text-6xl font-bold">My Business</h2>
        </section>
      </header>
      <Outlet />
     <Footer />
    </div>
  );
};

export default Layout;
