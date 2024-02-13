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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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

  const [submitBtnText, setSubmitBtnText] = useState("Submit");
  const url = import.meta.env.VITE_APP_BASE_URL;

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
      <Form
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <SubmitBtn text={submitBtnText} handleSubmit={handleSubmit} />
    </div>
  );
};

export default FormContainer;
