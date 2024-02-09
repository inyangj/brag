import React from 'react'
import {useLocation} from 'react-router-dom'

const Hero = () => {
    const location = useLocation()
    const renderContent = () => {
        switch (location.pathname) {
          case "/home":
            return (
              <section className="flex mt-10 bg-[#095EDC2B] justify-center items-center h-[10rem] md:h-[22rem]">
                <h2 className="text-3xl md:text-6xl font-bold">Home Content</h2>
              </section>
            );
          case "/review":
            return (
              <section className="flex mt-10 bg-[#095EDC2B] justify-center items-center h-[10rem] md:h-[22rem]">
                <h2 className="text-3xl md:text-6xl font-bold">Review Content</h2>
              </section>
            );
          case "/business":
            return (
              <section className="flex mt-10 bg-[#095EDC2B] justify-center items-center h-[10rem] md:h-[22rem]">
                <h2 className="text-3xl md:text-6xl font-bold">Business Content</h2>
              </section>
            );
          case "/profile":
            return (
              <section className="flex mt-10 bg-[#095EDC2B] justify-center items-center h-[10rem] md:h-[22rem]">
                <h2 className="text-3xl md:text-6xl font-bold">Profile Content</h2>
              </section>
            );
          default:
            return null; // Default content or no content for other routes
        }
      };

  return (
    <div>{renderContent()}</div>
  )
}

export default Hero