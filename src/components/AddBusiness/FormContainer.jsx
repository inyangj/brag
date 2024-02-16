import React, { useEffect, useState } from "react";
import Form from "./Form";
import SubmitBtn from "./SubmitBtn";
import axios from "../../utility/Axios";
import { toast } from "react-toastify";
import LogoInput from "./LogoInput";

const FormContainer = () => {
  const [formData, setFormData] = useState({
    user: "",
    logo: null,
    businessName: "",
    businessMail: "",
    businessCategory: "",
    daysOfOperation: [],
    hoursOfOperation: [],
    services: ["", "", ""],
    location: "",
    phoneNumber: "",
    instagram: "",
    twitter: "",
    facebook: "",
    image: [],
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const fileSelectedHandler = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
      setFormData((prevFormData) => ({
        ...prevFormData,
        logo: file,
      }));
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const id = user?.data.id;
    setFormData({ ...formData, user: id });
  }, []);

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
      logo: [],
      instagram: "",
      twitter: "",
      facebook: "",
      image: [],
    });
  };

  const [selectedFiles, setSelectedFiles] = useState([
    null,
    null,
    null,
    null,
    null,
  ]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles[index] = file;
    setSelectedFiles(newSelectedFiles);

    const newFormDataImages = newSelectedFiles.filter((file) => file !== null);
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: newFormDataImages,
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

  const handleStartDayChange = (e) => {
    const startDay = e.target.value;
    const updatedDaysOfOperation = [...formData.daysOfOperation];
    updatedDaysOfOperation[0] = startDay;
    setFormData({ ...formData, daysOfOperation: updatedDaysOfOperation });
  };

  const handleEndDayChange = (e) => {
    const endDay = e.target.value;
    const updatedDaysOfOperation = [...formData.daysOfOperation];
    updatedDaysOfOperation[1] = endDay;
    setFormData({ ...formData, daysOfOperation: updatedDaysOfOperation });
  };

  const handleStartTimeChange = (e) => {
    const startTime = e.target.value;
    const updatedHoursOfOperation = [...formData.hoursOfOperation];
    updatedHoursOfOperation[0] = startTime;
    setFormData({ ...formData, hoursOfOperation: updatedHoursOfOperation });
  };

  const handleEndTimeChange = (e) => {
    const endTime = e.target.value;
    const updatedHoursOfOperation = [...formData.hoursOfOperation];
    updatedHoursOfOperation[1] = endTime;
    setFormData({ ...formData, hoursOfOperation: updatedHoursOfOperation });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData", formData);

    const formDataToSend = new FormData();


    formData.daysOfOperation.forEach((day, index) => {
      formDataToSend.append(`daysOfOperation[]`, day);
    });
    
    formData.hoursOfOperation.forEach((hour, index) => {
      formDataToSend.append(`hoursOfOperation[]`, hour);
    });
    
    formData.services.forEach((service, index) => {
      formDataToSend.append(`services`, service);
    });
    
    formData.image.forEach((image, index) => {
      formDataToSend.append(`image`, image);
    });
    

    formDataToSend.append("logo", formData.logo);
    formDataToSend.append("user", formData.user);
    formDataToSend.append("businessName", formData.businessName);
    formDataToSend.append("businessMail", formData.businessMail);
    formDataToSend.append("businessCategory", formData.businessCategory);
    formDataToSend.append("location", formData.location);

    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("instagram", formData.instagram);
    formDataToSend.append("twitter", formData.twitter);
    formDataToSend.append("facebook", formData.facebook);

    try {
      const response = await axios.post(
        `/businesses/createBusiness`,
        formDataToSend
      );
      console.log("response", response);
      if (response.status === 201) {
        toast.success("Business created successfully");
        resetForm();
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <div className="mx-6 md:mx-16">
        <h4 className="py-4">
          Fill in the details below to add your business on BRAG
        </h4>

        <p className="text-[#F50505] py-2 ">
          * Information is required to complete registration
        </p>
      </div>

      <Form
        handleChange={handleChange}
        handleServiceChange={handleServiceChange}
        handleImageChange={handleImageChange}
        handleCategoryChange={handleCategoryChange}
        handleStartDayChange={handleStartDayChange}
        handleEndDayChange={handleEndDayChange}
        handleStartTimeChange={handleStartTimeChange}
        handleEndTimeChange={handleEndTimeChange}
        formData={formData}
        setFormData={setFormData}
        previewUrl={previewUrl}
        selectedFile={selectedFile}
        selectedFiles={selectedFiles}
        fileSelectedHandler={fileSelectedHandler}
        // handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      {/* <SubmitBtn text={submitBtnText} handleSubmit={handleSubmit} /> */}
    </div>
  );
};

export default FormContainer;
