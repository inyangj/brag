import React from "react";

function ProfileLogoBox() {
  return (
    <div>
      <div className="flex items-center justify-center border border-gray-300 mx-6 md:mx-16 p-4 w-48 h-48">
        <label htmlFor="logoInput" className="cursor-pointer">
          <div className="text-center">
            <p className="text-xs text-black font-bold text-[24px] mt-2">
              Logo
            </p>
          </div>
          <input
            type="file"
            id="logoInput"
            accept="image/*"
            className="hidden"
            //   onChange={handleLogoChange}
          />
        </label>
      </div>
    </div>
  );
}

export default ProfileLogoBox;
