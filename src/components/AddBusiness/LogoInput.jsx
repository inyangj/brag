import React, { useState, useEffect } from "react";

const LogoInput = ({ handleLogoChange, logo }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // useEffect(() => {
  //   if (logo) {
  //     setSelectedImage(URL.createObjectURL(logo));
  //   }
  // }, [logo]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    handleLogoChange(file);
  };

  return (
    <div className="mx-6 md:mx-16">
      <h4 className="py-4">
        Fill in the details below to add your business on BRAG
      </h4>

      <p className="text-[#F50505] py-2 ">
        * Information is required to complete registration
      </p>
      <div className="flex items-center justify-center border border-gray-300 p-4 w-48 h-48">
        {selectedImage ? (
          <img src={selectedImage} alt="User Logo" className="max-w-full max-h-full" />
        ) : (
          <label htmlFor="logoInput" className="cursor-pointer">
            <div className="text-center">
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
              <p className="text-xs text-gray-500 mt-2">Add Logo</p>
            </div>
            <input
              type="file"
              id="logoInput"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        )}
      </div>
    </div>
  );
};

export default LogoInput;
