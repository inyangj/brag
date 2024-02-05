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

function AddBusiness() {
  return (
    <div>
      <Nav />
      <Hero />
      <LogoInput />
      <Form />
      <BusinessTime />
      <SocialMedia />
      <div className="grid grid-cols-2 md:grid md:grid-cols-5 gap-4 mx-16">
        {[...Array(5)].map((_, index) => (
          <ImageBox key={index} />
        ))}
      </div>
      <SubmitBtn />
    </div>
  );
}

export default AddBusiness;
