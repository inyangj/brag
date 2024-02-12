import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Hero from "../assets/Hero.png";
import Search from "../components/home/Search";
import FeaturedBusiness from "../components/home/FeaturedBusiness";
import tick from "../assets/business/tick.svg";
import AboutUs from "../components/home/AboutUs";

const Home = () => {
  return (
    <div className="relative ">
      <header>
        <Nav />
        <section className="flex flex-col md:flex-row-reverse mt-10 bg-[#095EDC2B] justify-center md:gap-10 items-center px-6  py-6 lg:pl-12 lg:px-0 xl:pl-28 lg:py-[1.88rem] ">
          <img src={Hero} alt="home" className=" my-10 md:w-[300px] lg:w-1/2 " />
          <div className="my-10">
            <h2 className="text-3xl xl:text-6xl font-bold xl:mb-5 ">
              Looking for the best places around you?
            </h2>
            <p className="text-xl xl:text-3xl pt-3 mb-4">
              We pride ourselves on providing impartial and authentic reviews.
              Our community of users shares their genuine experiences, ensuring
              you get the most accurate information.
            </p>
            <button className="bg-[#095EDC] text-white px-4 py-2 rounded text-lg hover:bg-blue-600 font-semibold focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              Get Started
            </button>
          </div>
        </section>
      </header>
      <main>
        <section className="">
          <Search />
          <div className="px-6 py-6 lg:px-12 lg:py-[1.88rem] xl:px-28">
          <FeaturedBusiness productsToShow={4} />

          </div>
          <AboutUs />
        </section>
        <div className="p-5 bin rounded-[50px] mx-6  my-6 lg:mx-12 xl:mx-28 lg:my-[1.88rem]">
          <section className="pt-10 bg-[#095EDC2B] justify-center items-center  grid rounded-[50px] px-6  py-10 md:py-10 xl:py-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold  text-[#095EDC]  ">
              Get Started With <span className="text-[#095EDC]">BRAG</span>
            </h3>
            <p className="text-lg md:text-2xl xl:text-3xl md:w-[600px] xl:w-[750px] mt-[20px] mb-[40px] md:mt-[35px] md:mb-[55px]">
              Discover new and exicting places around you and get the best
              services from vendors
            </p>
            <Link
              to="/signup"
              className="bg-[#095EDC] text-white px-7 py-3 rounded-[10px] text-lg hover:bg-blue-600 font-semibold focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mx-auto lg:w-[260px] "
            >
              SignUp
            </Link>
          </section>
        </div>
        <section className="mx-6  my-6 lg:mx-12 lg:mt-[45px] lg:mb-[169px] xl:mx-28 grid gap-10">
          <h3 className="text-2xl md:text-3xl font-bold  text-[#095EDC] text-center ">
            Benefits
          </h3>
          <div className="grid gap-5 md:gap-10">
            <div className="flex flex-col md:flex-row  md:justify-center md:items-center gap-5 md:gap-10 lg:gap-20 xl:gap-32">
              <p className="text-lg md:text-2xl flex gap-3 items-center">
                <img src={tick} alt="tick" />
                Genuine experiences
              </p>
              <p className="text-lg md:text-2xl flex gap-3 items-center">
                <img src={tick} alt="tick" />
                Most accurate information
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-5 md:gap-10 lg:gap-20 xl:gap-32">
              <p className="text-lg md:text-2xl flex gap-3 items-center">
                <img src={tick} alt="tick" />
                Wide reach to target audience
              </p>
              <p className="text-lg md:text-2xl flex gap-3 items-center">
                <img src={tick} alt="tick" />
                Impartial and authentic reviews
              </p>
            </div>
          </div>
          <Link
              to="/signup"
              className="bg-[#095EDC] text-white px-7 py-3 rounded-[10px] text-lg hover:bg-blue-600 font-semibold focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mx-auto text-center lg:w-[260px]"
            >
              SignUp
            </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
