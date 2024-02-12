import React from "react";
import HeroImg from "../../assets/profile/heroimg.png";

function ProfileHero() {
  return (
    <div>
      <div
        className="bg-[#095EDC2B] py-[200px] font-semibold text-[32px]"
        style={{
          backgroundImage: `url(${HeroImg})`,
        }}
      >
        <h2
          className="flex justify-center items-center text-white
        "
        >
          Profile{" "}
        </h2>
      </div>
    </div>
  );
}

export default ProfileHero;
