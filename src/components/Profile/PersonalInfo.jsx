import React from "react";

function PersonalInfo({profile, phone}) {
  return (
    <div>
      <h2 className="mt-12 mx-6 md:mx-16 font-bold">PERSONAL INFO</h2>
      <form className="mx-6 md:mx-16">
        <div className="mb-4">
          <p className="text-[16px] font-semibold">Name</p>
          <input
            type="text"
            name="Name"
            value={profile.fullName}
            // onChange={handleInputChange}
            placeholder="Add a business name here"
            className="border rounded-lg border-gray-300 p-2 w-full"
            readOnly
          />
        </div>
        <div className="mb-4">
          <p className="text-[16px] font-semibold">Email</p>
          <input
            type="email"
            name="mail"
            value={profile.email}
            // onChange={handleInputChange}

            className="border rounded-lg border-gray-300 p-2 w-full"
            readOnly
          />
        </div>
        <div className="mb-4">
          <p className="text-[16px] font-semibold">Phone Number</p>
          <input
            type="tel"
            name="phone"
            value={phone}
            // onChange={handleInputChange}
            className="border rounded-lg border-gray-300 p-2 w-full"
            readOnly
          />
        </div>
        {/* <div className="mb-4">
          <p className="text-[16px] font-semibold">Date of Birth</p>
          <input
            type="text"
            name="date"
            // value={formData.businessName}
            // onChange={handleInputChange}
            className="border rounded-lg border-gray-300 p-2 w-full"
            required
          />
        </div> */}
      </form>
    </div>
  );
}

export default PersonalInfo;
