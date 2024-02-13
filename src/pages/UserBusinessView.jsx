import React from 'react'
import Services from '../components/business/Services';
import Images from '../components/business/Images';
import { Outlet } from "react-router-dom";
import profile from "../assets/business/profile.jpeg";
import ServiceReview from './ServiceReviews';


const UserBusinessView = () => {
  return (
    <div className="px-6  py-6 lg:px-12 lg:py-[1.88rem] mt-20">
        <section className="md:flex items-center gap-8 md:gap-14">
          <img src={profile} className="w-[305px] h-[249px]" alt="profile" />
          <div className=" pt-5  grid gap-5">
            <h4>Business name</h4>
            <p>ShoeCorner Nigeria</p>
            <h4>review</h4>
            <p>Business email</p>
            <h4>Business phonenumber</h4>
          </div>
        </section>

        <section className="grid gap-5 md:gap-10">
          <h2 className="text-xl md:text-2xl font-medium mt-8">Services</h2>
          <Services
            styleName={`grid gap-5 md:gap-10`}
            className={`border-[#A9A9A9] text-2xl rounded-[10px] py-4 pl-8 `}
            services={["Snacks", "Clothings", "Restaurant", "Entertainment"]}
          />
        </section>
        <section className="my-[43px]">
          <Images />
        </section>
        <section>
          <h2 className="text-xl rounded-[10px] text-[#095EDC] font-medium mx-auto border w-fit shadow-sm mb-7 p-3 md:p-5">
            Reivews
          </h2>

          <Services
            styleName={`flex justify-center items-center flex-wrap gap-5 md:gap-[53px]`}
            services={["Snacks", "Clothings", "Restaurant", "Entertainment"]}
            className={` py-4 px-3 rounded-[10px] text-[#095EDC] border-[#095EDC] `}
          />
          
          <ServiceReview />
        </section>
    </div>
  )
}

export default UserBusinessView