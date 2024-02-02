import React from "react";
import { useLocation } from "react-router-dom";
import Li from "./elements/Li";

const Nav = () => {
  const location = useLocation();
  const getLinkStyle = (path) => ({
    backgroundColor: location.pathname === path ? "text-[#095EDC]" : "",
  });
  return (
    <nav className="fixed top-0 w-full z-30 bg-white flex justify-between items-center px-6  py-6 md:px-28 md:py-[1.88rem] ">
      <h1 className="font-bold text-2xl md:text-[2.5rem] text-[#095EDC]">
        BRAG
      </h1>
      <ul className="flex gap-2 justify-between items-center text-xs md:text-2xl">
        <Li to="/home" style={getLinkStyle("/home")}>
          Home
        </Li>
        <Li to="/review" style={getLinkStyle("/review")}>
        Review
        </Li>
        <Li to="/business" style={getLinkStyle("/business")}>
        business
        </Li>
        <Li to="/profile" style={getLinkStyle("/profile")}>
        Profile
        </Li>
      </ul>
    </nav>
  );
};

export default Nav;
