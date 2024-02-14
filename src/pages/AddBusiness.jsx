import React from "react";
import Nav from "../components/AddBusiness/Nav";
import Hero from "../components/AddBusiness/Hero";
import LogoInput from "../components/AddBusiness/LogoInput";
import Form from "../components/AddBusiness/Form";
import BusinessTime from "../components/AddBusiness/BusinessTime";
import SocialMedia from "../components/AddBusiness/SocialMedia";
import ImageBox from "../components/AddBusiness/ImageBox";
import FormContainer from "../components/AddBusiness/FormContainer";
import SubmitBtn from "../components/AddBusiness/SubmitBtn";
import Category from "../components/AddBusiness/Category";

function AddBusiness() {
  return (
    <div>
      <Nav />
      <Hero />
      {/* <LogoInput /> */}
      <FormContainer />

      {/* <div className="grid grid-cols-2 mx-6 md:grid md:grid-cols-5 lg:grid-cols-3 md:gap-4 md:mx-16 xl:grid-cols-5 ">
        {[...Array(5)].map((_, index) => (
          <ImageBox key={index} />
        ))}
      </div> */}
      {/* <SubmitBtn /> */}
    </div>
  );
}

export default AddBusiness;
