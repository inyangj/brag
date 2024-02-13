import React from "react";
import towers from "../../assets/profile/towers.png";

function Hero() {
  return (
    <div
      className=" py-[200px] font-semibold text-[32px]"
      style={{
        backgroundImage: `url(${towers})`,
      }}
    >
      <h2 className="flex justify-center items-center text-white">
        Add your business{" "}
      </h2>
    </div>
  );
}

export default Hero;
