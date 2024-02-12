import React from "react";
import Input from "../element/Input";

const Form = ({ formData, handleInputChange }) => {
  console.log({ formData });
  return (
    <form className="mx-6 md:mx-16">
      <div className="mb-4">
        <label htmlFor="businessName" className="text-[16px] font-semibold">
          Business Name:
        </label>

        <input
          type="text"
          name="businessName"
          id="businessName"
          value={formData.businessName}
          onChange={handleInputChange}
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
          onChange={handleInputChange}
          placeholder="Add an active business mail here"
          className="border rounded-lg border-gray-300 p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <p className="text-[16px] font-semibold">Services</p>
        <input
          type="text"
          name="service1"
          id="service1"
          value={formData.service1}
          onChange={handleInputChange}
          placeholder="Shoes"
          className="border rounded-lg border-gray-300 p-2 w-full"
          required
        />
        <input
          type="text"
          name="service2"
          id="service2"
          value={formData.service2}
          onChange={handleInputChange}
          placeholder="Kiddies footies"
          className="border rounded-lg border-gray-300 p-2 mt-2 w-full"
          required
        />
        <input
          type="text"
          name="service3"
          id="service3"
          value={formData.service3}
          onChange={handleInputChange}
          placeholder="Add more services"
          className="border rounded-lg border-gray-300 p-2 mt-2 w-full"
          required
        />
      </div>

      <div className="mb-4">
        <p className="text-[16px] font-semibold">Location</p>
        <input
          type="text"
          name="location"
          id="location"
          value={formData.location}
          onChange={handleInputChange}
          placeholder="e.g Port harcourt"
          className="border rounded-lg border-gray-300 p-2 w-full"
          required
        />
      </div>
    </form>
  );
};

export default Form;
