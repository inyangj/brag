import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Li from "./elements/Li";
import useAuth from "../hooks/useAuth";

const Nav = ({ className }) => {
  const location = useLocation();
  // const [hasBusiness, setHasBusiness] = useState(false);

  const hasBusiness = JSON.parse(sessionStorage.getItem("hasBusiness"));
  const { hasBusinessUpdated } = useAuth();

  

  const getLinkStyle = (path) => ({
    backgroundColor: location.pathname === path ? "text-[#095EDC]" : "",
  });

  return (
    <nav
      className={`fixed top-0 h-[100px] w-full z-30  bg-white flex justify-between items-center px-6  py-6 lg:px-12 xl:px-28  lg:py-[1.88rem] ${className}`}
    >
      <h1 className="text-[#095EDC] font-bold text-[20px] md:text-[32px] ">BRAG</h1>
      <ul className="flex gap-2 md:gap-11 justify-between items-center text-xs md:text-[24px]">
        <Li to="/brag" style={getLinkStyle("/brag")}>
          Home
        </Li>
        {/* <Li to="" style={getLinkStyle("/review")}>
        Review
        </Li> */}
        <Li to="/brag/business" style={getLinkStyle("/brag/business")}>
          {hasBusiness || hasBusinessUpdated ? "My Business" : "Add Business"}
        </Li>
        <Li to="/profile" style={getLinkStyle("/profile")}>
          Profile
        </Li>
      </ul>
    </nav>
  );
};

export default Nav;
