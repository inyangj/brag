import React from "react";
import Nav from "../components/AddBusiness/Nav";
import Hero from "../components/Profile/Hero";
import PersonalInfo from "../components/Profile/PersonalInfo";
import Form from "../components/AddBusiness/Form";

function ProfilePage() {
  return (
    <div>
      <Nav />
      <Hero />
      <PersonalInfo />
      <div>
        <h2 className="mx-16 mt-6 font-bold">Business Info</h2>
        <Form />
      </div>
    </div>
  );
}

export default ProfilePage;
