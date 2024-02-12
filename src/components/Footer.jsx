import React from "react";
import { useLocation } from "react-router-dom";
import Li from "./elements/Li";
import mail from "../assets/footer/mail.svg";
import call from "../assets/footer/call.svg";
import insta from "../assets/footer/Insta.svg";
import facebook from "../assets/footer/facebook.svg";

const Footer = () => {
  const location = useLocation();
  const getLinkStyle = (path) => ({
    backgroundColor: location.pathname === path ? "#197ED2" : "",
  });
  return (
    <footer className="bg-[#095EDC2B]">
      <section className=" mt-10 grid md:grid-cols-3 xl:grid-cols-4 gap-10 px-6  py-6 lg:px-12 lg:py-[1.88rem]">
        <div>
          <h3 className="font-bold text-2xl lg:text-[1.875rem] text-[#095EDC]">
            BRAG
          </h3>

          <p className="w-[15rem] mt-4">
            <span className="font-semibold">BRAG </span>aims to revolutionize
            the way businesses manage customer reviews and how users discover
            local businesses based on genuine feedback.
          </p>
        </div>

        <div className="w-fit">
          <h3 className="font-semibold text-2xl lg:text-[1.875rem] ">
            Category
          </h3>

          <ul className="mt-4 grid gap-3">
            <Li to="/review" className={`gap-[0.88rem] hover:text-[#095EDC]`}>
              Review
            </Li>
            <Li to="/explore" className={`gap-[0.88rem] hover:text-[#095EDC]`}>
              Explore
            </Li>
            <Li to="/review" className={`gap-[0.88rem] hover:text-[#095EDC]`}>
              Review
            </Li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-2xl lg:text-[1.875rem] ">
            Contact Us
          </h3>
          <p className="flex gap-2 mt-4 mb-3 lg:mt-[1.875rem] lg:mb-5">
            <img
              src={mail}
              className="w-[1.5rem] h-[1.5rem]"
              alt="email-icon"
            />
            BragForAfrica@gmail.com
          </p>
          <div className="flex items-center gap-2 ">
            <img src={call} className="w-[1.5rem] h-[1.5rem]" alt="call-icon" />
            <div>
              <p className="mb-3">08077445566</p>
              <p>09076554433</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-2xl lg:text-[1.875rem] ">
            Follow Us
          </h3>
          <div className="flex gap-2 mt-4 mb-3 lg:mt-[1.875rem] lg:mb-5">
            <img
              src={insta}
              className="w-[1.5rem] h-[1.5rem]"
              alt="insta-icon"
            />
            <img
              src={facebook}
              className="w-[1.5rem] h-[1.5rem]"
              alt="facebook-icon"
            />
          </div>
        </div>
      </section>
      <div className="border border-[#A9A9A9]"></div>
      <div className="px-6  py-2 lg:px-12 lg:py-[1.88rem]">
        <p className="text-[#A9A9A9] text-xl md:text-2xl text-center ">
          © Copyright, Renaissance Innovation Lab 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
