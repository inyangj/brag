import React from "react";
import profile from "../assets/business/profile.jpeg";

const Business = () => {
  return (
    <div className="bg-red-700">
      {/* <div>
            <p>Please complete your business information on your profile. </p>
            <button></button>
        </div> */}
      <div className="flex items-center gap-8 md:gap-14">
        <img src={profile} className="w-[305px] h-[249px]" alt="profile" />
        <div className="w-full ">
          <div className="text-2xl bg-green-600  ">
            <p>Business Name</p>
            <p className="border">Profile</p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Business;
