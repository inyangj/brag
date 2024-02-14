import React, { useState } from "react";
import Form from "./Form";
import SubmitBtn from "./SubmitBtn";
import axios from "../../utility/Axios";
import LogoInput from "./LogoInput";

const FormContainer = () => {
  const [formData, setFormData] = useState({
    logo: null,
    businessName: "",
    businessMail: "",
    businessCategory: "",
    daysOfOperation: [],
    hoursOfOperation: [],
    services: ["", "", ""],
    location: "",
    phoneNumber: "",
    // category: "",
    // startDay: "",
    // endDay: "",
    // startTime: "",
    // endTime: "",
    instagram: "",
    twitter: "",
    facebook: "",
    image: [],
  });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleServiceChange = (index, value) => {
    const newServices = [...formData.services];
    newServices[index] = value;
    setFormData({ ...formData, services: newServices });
  };

  const resetForm = () => {
    setFormData({
      businessName: "",
      businessMail: "",
      businessCategory: "",
      daysOfOperation: [],
      hoursOfOperation: [],
      services: ["", "", ""],
      location: "",
      phoneNumber: "",
      // category: "",
      // startDay: "",
      // endDay: "",
      // startTime: "",
      // endTime: "",
      instagram: "",
      twitter: "",
      facebook: "",
      image: [],
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          selectedImage: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleLogoChange = (logoUrl) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedImage: logoUrl,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, businessCategory: value });
  };
  















  const [submitBtnText, setSubmitBtnText] = useState("Submit");
  // const url = import.meta.env.VITE_APP_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${url}/businesses/createBusiness`,
        formData,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmIwZGFlYzk2NTM4ZmI2NGUwMGQxYSIsImlhdCI6MTcwNjc3Njg4OCwiZXhwIjoxNzA5MzY4ODg4fQ.gsmFSSvy9AEeUUV56jMpbJqIQQYrFSb6s--t2lv7Fyc",
          },
        }
      );
      setSubmitBtnText("Submitted!");
      resetForm();
    } catch (error) {
      console.error("Error creating business:", error);
      // Handle error (e.g., display an error message to the user)
    }
  };
  return (
    <div>
      <LogoInput handleLogoChange={handleLogoChange} />
      <Form
        handleChange={handleChange}
        handleServiceChange={handleServiceChange}
        handleImageChange={handleImageChange}
        handleCategoryChange={handleCategoryChange}
        formData={formData}
        // handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <SubmitBtn text={submitBtnText} handleSubmit={handleSubmit} />
    </div>
  );
};

export default FormContainer;
