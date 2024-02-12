import React, { useState } from "react";
import profile from "../assets/business/profile.jpeg";
import TextRender from "../components/business/TextRender";
import Services from "../components/business/Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Images from "../components/business/Images";
import { Outlet } from "react-router-dom";
import ServiceReview from "./ServiceReviews";

const Business = () => {
  const [copied, setCopied] = useState(false);

  const id = "jddhsjkcdhkhsdk";

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  return (
    <div>
      <section className="flex mt-10 bg-[#095EDC2B] justify-center items-center h-[10rem] md:h-[22rem]">
        <h2 className="text-3xl md:text-6xl font-bold">Business Content</h2>
      </section>

      <div className="px-6  py-6 lg:px-12 lg:py-[1.88rem] ">
        {/* <div>
            <p>Please complete your business information on your profile. </p>
            <button></button>
        </div> */}
        <section className="md:flex items-center gap-8 md:gap-14">
          <img src={profile} className="w-[305px] h-[249px]" alt="profile" />
          <div className="w-full pt-5 grid gap-5 md:gap-10">
            <TextRender
              title={`Business name`}
              content={`ShoeCorner Nigeria`}
            />
            <TextRender title={`Business category`} content={`Products`} />
          </div>
        </section>

        <section className="grid gap-5 md:gap-10">
          <h2 className="text-2xl font-medium">Services</h2>
          <Services
            styleName={`grid gap-5 md:gap-10`}
            className={`border-[#A9A9A9] text-2xl rounded-[10px] py-4 pl-8 `}
          />
          <div className=" ">
            <button className="bg-[#095EDC] text-white py-5 px-3 rounded-[10px] text-2xl">
              + Add more services
            </button>

            <p className=" text-lg md:text-2xl mt-9 mb-2">
              Share this links to get reviews from customers
            </p>
            <div className="flex items-center gap-2 ">
              <p className="text-[#095EDC] md:text-xl">
                http://localhost:5173/business/{id}
              </p>
              <CopyToClipboard
                text={`http://localhost:5173/brag/review/${id}`}
                onCopy={handleCopy}
              >
                <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
              </CopyToClipboard>
            </div>
          </div>
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
            className={` py-4 px-3 rounded-[10px] text-[#095EDC] border-[#095EDC] `}
          />
          <Outlet />
          {/* <ServiceReview /> */}
        </section>
      </div>
    </div>
  );
};

export default Business;
