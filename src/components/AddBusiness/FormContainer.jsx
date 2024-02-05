import React, { useState } from "react";
import Form from "./Form";
import SubmitBtn from "./SubmitBtn";

const FormContainer = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    service1: "",
    service2: "",
    service3: "",
    location: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      businessName: "",
      email: "",
      service1: "",
      service2: "",
      service3: "",
      location: "",
      category: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log("Form submitted with data:", formData);

    // Clear the form after submission
    resetForm();
  };

  return (
    <div>
      <Form formData={formData} handleInputChange={handleInputChange} />
      <SubmitBtn handleSubmit={handleSubmit} />
    </div>
  );
};

export default FormContainer;
