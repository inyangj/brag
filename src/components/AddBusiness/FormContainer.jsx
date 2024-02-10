import React, { useState } from "react";
import Form from "./Form";
import SubmitBtn from "./SubmitBtn";
import axios from "../../utility/Axios";

const FormContainer = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    businessMail: "",
    service1: "",
    service2: "",
    service3: "",
    location: "",
    category: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      businessName: "",
      businessMail: "",
      service1: "",
      service2: "",
      service3: "",
      location: "",
      category: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/businesses/createBusiness", formData);
    } catch (error) {
      console.error("Error creating business:", error);
      // Handle error (e.g., display an error message to the user)
    }
  };
  return (
    <div>
      <Form formData={formData} handleInputChange={handleInputChange} />
      <SubmitBtn handleSubmit={handleSubmit} />
    </div>
  );
};

export default FormContainer;
