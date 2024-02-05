import React from "react";

const Input = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  children,
}) => {
  return (
    <div className="mb-4">
      <p className="text-[16px] font-semibold">{children}</p>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border rounded-lg border-gray-300 p-2 w-full"
        required
      />
      <Input
        children={`Business name`}
        type={"text"}
        name="businessName"
        // value={formData.businessName}
        // onChange={handleInputChange}
        placeholder="Add a business name here"
        required={"required"}
      />
      <Input
        children={`Business mail`}
        type={"email"}
        name="email"
        // value={formData.businessName}
        // onChange={handleInputChange}
        placeholder="Add an active business mail here"
        required={"required"}
      />
    </div>
  );
};

export default Input;
