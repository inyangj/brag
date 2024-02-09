import React, { useState } from "react";

function SocialMedia() {
  const [socialMediaHandle, setSocialMediaHandle] = useState("");

  const handleInputChange = (e) => {
    setSocialMediaHandle(e.target.value);
  };
  return (
    <div className="mx-16">
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
          onChange={handleInputChange}
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
  );
}

export default SocialMedia;
