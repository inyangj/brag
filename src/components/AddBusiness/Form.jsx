import React, { useState } from "react";
import Input from "../element/Input";
import LogoInput from "./LogoInput";

const Form = ({
  formData,
  handleChange,
  handleImageChange,
  handleServiceChange,
  handleCategoryChange,


  handleSubmit,
  selectedStartDay,
  handleStartDayChange,
  selectedEndDay,
  handleEndDayChange,
  selectedStartTime,
  handleStartTimeChange,
  selectedEndTime,
  handleEndTimeChange,
}) => {
  const [socialMediaHandle, setSocialMediaHandle] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const categoryOptions = [
    "Beauty products",
    "Hair and makeup",
    "Snacks",
    "Clothings",
    "Restaurant",
    "Entertainment",
    "Accessories",
    "Services",
    "Others",
  ];

  const daysOptions = [
    "Select Day",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const hoursOptions = [
    "Select Time",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
  ];

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       setSelectedImage(reader.result);
  //     };

  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <form className="mx-6 md:mx-16" onSubmit={handleSubmit}>
   
      <div className="mb-4">
        <label htmlFor="businessName" className="text-[16px] font-semibold">
          Business Name:
        </label>

        <input
          type="text"
          name="businessName"
          id="businessName"
          value={formData.businessName}
          onChange={handleChange}
          placeholder="Add a business name here"
          className="border rounded-lg border-gray-300 p-2 w-full"
          required
        />
      </div>

      <div className="mb-4">
        <p className="text-[16px] font-semibold">Business mail</p>
        <input
          type="text"
          name="businessMail"
          id="businessMail"
          value={formData.businessMail}
          onChange={handleChange}
          placeholder="Add an active business mail here"
          className="border rounded-lg border-gray-300 p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
    <p className="text-[16px] font-semibold">Services</p>
    {formData.services.map((service, index) => (
      <input
        key={index}
        type="text"
        value={service}
        onChange={(e) => handleServiceChange(index, e.target.value)}
        placeholder={`Service ${index + 1}`}
        className="border rounded-lg border-gray-300 p-2 mt-2 w-full"
        required
      />
    ))}
  </div>

      <div className="mb-4">
        <p className="text-[16px] font-semibold">Location</p>
        <input
          type="text"
          name="location"
          id="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="e.g Port harcourt"
          className="border rounded-lg border-gray-300 p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <p className="text-[16px] font-semibold">Phone Number</p>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Add phone number here"
          className="border rounded-lg border-gray-300 p-2 w-full"
          required
        />
      </div>

      <div className="mb-4">
        <p className="text-[16px] font-semibold">Business category</p>
        <div className="flex items-center">
          <label htmlFor="category"></label>
          <select
        id="businessCategory"
        name="businessCategory"
        value={formData.businessCategory}
        onChange={handleCategoryChange}
        placeholder="e.g makeup and beauty"
        className="border rounded-lg border-gray-300 p-2 w-full"
      >
            {categoryOptions.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <p className="text-[16px] font-semibold mb-4">Hours of operation</p>
        <div className="grid grid-cols-2 gap-4 mt-4 mb-4 ">
          <div>
            <label
              htmlFor="startDay"
              className="block text-sm font-medium text-gray-600"
            ></label>
            <div className="relative">
              <select
                id="startDay"
                name="startDay"
                value={selectedStartDay}
                onChange={handleStartDayChange}
                className="pl-8 pr-2 py-2 block  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              >
                {daysOptions.map((day, index) => (
                  <option key={index} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="endDay"
              className="block text-sm font-medium text-gray-600"
            ></label>
            <div className="relative">
              <select
                id="endDay"
                name="endDay"
                value={selectedEndDay}
                onChange={handleEndDayChange}
                className="pl-8 pr-2 py-2 block  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              >
                {daysOptions.map((day, index) => (
                  <option key={index} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="startTime"
              className="block text-sm font-medium text-gray-600"
            ></label>
            <div className="relative">
              <select
                id="startTime"
                name="startTime"
                value={selectedStartTime}
                onChange={handleStartTimeChange}
                className="pl-8 pr-2 py-2 block  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              >
                {hoursOptions.map((hour, index) => (
                  <option key={index} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="endTime"
              className="block text-sm font-medium text-gray-600"
            ></label>
            <div className="relative">
              <select
                id="endTime"
                name="endTime"
                value={selectedEndTime}
                onChange={handleEndTimeChange}
                className="pl-8 pr-2 py-2 block  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              >
                {hoursOptions.map((hour, index) => (
                  <option key={index} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-[16px] font-semibold mt-4">Social media handles</p>
        <div className="mb-4">
          <label
            htmlFor="socialMediaHandle"
            className="block text-sm font-medium text-gray-600"
          >
            Instagram
          </label>
          <input
            type="text"
            id="socialMediaHandle"
            name="field1"
            value={socialMediaHandle}
            onChange={(e) => setSocialMediaHandle(e.target.value)}
            placeholder="@jdfhjd"
            className="border rounded-lg border-gray-300 p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <p className="text-[16px] font-semibold">Twitter</p>
          <input
            type="text"
            name="field1"
            placeholder="@jdfhjd"
            className="border rounded-lg border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <p className="text-[16px] font-semibold">Facebook</p>
          <input
            type="text"
            name="field1"
            placeholder="@jdfhjd"
            className="border rounded-lg border-gray-300 p-2 w-full"
            required
          />
        </div>
      </div>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-5 lg:gap-6">
        <div className="flex items-center justify-center bg-[#D9D9D9] border border-gray-300 p-4 w-32 h-32 md:w-48 md:h-48 ">
          <label htmlFor="image" className="">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                className="w-24 h-24 object-cover rounded-md"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="mx-auto h-8 w-8 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            )}
            <p className="text-xs text-gray-500 mt-2">Add Image here</p>
          </label>
          <input
            type="file"
            id="image1"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        <div className="flex items-center justify-center bg-[#D9D9D9] border border-gray-300 p-4 w-32 h-32 md:w-48 md:h-48 ">
          <label htmlFor="image" className="">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                className="w-24 h-24 object-cover rounded-md"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="mx-auto h-8 w-8 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            )}
            <p className="text-xs text-gray-500 mt-2">Add Image here</p>
          </label>
          <input
            type="file"
            id="image2"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        <div className="flex items-center justify-center bg-[#D9D9D9] border border-gray-300 p-4 w-32 h-32 md:w-48 md:h-48 ">
          <label htmlFor="image" className="">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                className="w-24 h-24 object-cover rounded-md"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="mx-auto h-8 w-8 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            )}
            <p className="text-xs text-gray-500 mt-2">Add Image here</p>
          </label>
          <input
            type="file"
            id="image3"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        <div className="flex items-center justify-center bg-[#D9D9D9] border border-gray-300 p-4 w-32 h-32 md:w-48 md:h-48 ">
          <label htmlFor="image" className="">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                className="w-24 h-24 object-cover rounded-md"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="mx-auto h-8 w-8 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            )}
            <p className="text-xs text-gray-500 mt-2">Add Image here</p>
          </label>
          <input
            type="file"
            id="image4"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        <div className="flex items-center justify-center bg-[#D9D9D9] border border-gray-300 p-4 w-32 h-32 md:w-48 md:h-48 ">
          <label htmlFor="image" className="">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                className="w-24 h-24 object-cover rounded-md"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="mx-auto h-8 w-8 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            )}
            <p className="text-xs text-gray-500 mt-2">Add Image here</p>
          </label>
          <input
            type="file"
            id="image5"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
      </div>

      {/* <div className="flex justify-end mr-16 my-4">
        <button
          type="submit"
          className="bg-blue-500  text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit
        </button>
      </div> */}
    </form>
  );
};

export default Form;
