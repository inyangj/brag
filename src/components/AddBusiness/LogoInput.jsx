// LogoBox.js

import React, { useState } from "react";

const LogoInput = () => {
  const [logo, setLogo] = useState(null);

  const handleLogoChange = (e) => {
    const selectedLogo = e.target.files[0];
    setLogo(URL.createObjectURL(selectedLogo));
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
        {logo ? (
          <img src={logo} alt="User Logo" className="max-w-full max-h-full" />
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
              onChange={handleLogoChange}
            />
          </label>
        )}
      </div>
    </div>
  );
};

export default LogoInput;
