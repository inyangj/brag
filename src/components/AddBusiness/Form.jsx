import React from "react";
import Input from "../element/Input";

const Form = ({ formData, handleInputChange }) => {
  return (
    <form className="mx-16">
      <div className="mb-4">
        <p className="text-[16px] font-semibold">Business name</p>
        <input
          type="text"
          name="businessName"
          // value={formData.businessName}
          // onChange={handleInputChange}
          placeholder="Add a business name here"
          className="border rounded-lg border-gray-300 p-2 w-full"
          required
        />
      </div>

      <div className="mb-4">
        <p className="text-[16px] font-semibold">Business mail</p>
        <input
          type="text"
          name="email"
          // value={formData.email}
          // onChange={handleInputChange}
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
          // value={formData.service1}
          // onChange={handleInputChange}
          placeholder="Shoes"
          className="border rounded-lg border-gray-300 p-2 w-full"
          required
        />
        <input
          type="text"
          name="service2"
          // value={formData.service2}
          // onChange={handleInputChange}
          placeholder="Kiddies footies"
          className="border rounded-lg border-gray-300 p-2 mt-2 w-full"
          required
        />
        <input
          type="text"
          name="service3"
          // value={formData.service3}
          // onChange={handleInputChange}
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
          // value={formData.location}
          // onChange={handleInputChange}
          placeholder="e.g Port harcourt"
          className="border rounded-lg border-gray-300 p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <p className="text-[16px] font-semibold">Business category</p>
        <input
          type="text"
          name="category"
          // value={formData.category}
          // onChange={handleInputChange}
          placeholder="e.g makeup and beauty"
          className="border rounded-lg border-gray-300 p-2 w-full"
          required
        />
      </div>
    </form>
  );
};

export default Form;
