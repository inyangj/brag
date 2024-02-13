import React from "react";
import Nav from "../components/AddBusiness/Nav";
import ProfileHero from "../components/Profile/ProfileHero";
import PersonalInfo from "../components/Profile/PersonalInfo";
import Form from "../components/AddBusiness/Form";
import Category from "../components/AddBusiness/Category";
import BusinessTime from "../components/AddBusiness/BusinessTime";
import SocialMedia from "../components/AddBusiness/SocialMedia";
import ImageBox from "../components/AddBusiness/ImageBox";
import FormContainer from "../components/AddBusiness/FormContainer";
import LogoInput from "../components/AddBusiness/LogoInput";
import ProfileLogoBox from "../components/Profile/ProfileLogoBox";
import Buttons from "../components/Profile/Buttons";

function ProfilePage() {
  return (
    <div>
      <Nav />
      <ProfileHero />
      <PersonalInfo />
      <FormContainer />
      <Buttons />

      {/* <div>
        <h2 className="mx-6 md:mx-16 mt-6 font-bold">Business Info</h2>
        <ProfileLogoBox />
        <FormContainer />
      </div>
      <Category />
      <BusinessTime />
      <SocialMedia />
      <div className="grid grid-cols-2 mx-6 md:grid md:grid-cols-5 lg:grid-cols-3 md:gap-4 md:mx-16 xl:grid-cols-5 ">
        {[...Array(5)].map((_, index) => (
          <ImageBox key={index} />
        ))}
      </div> */}
    </div>
  );
}

export default ProfilePage;
