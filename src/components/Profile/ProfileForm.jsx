import React from 'react'

const ProfileForm = () => {
  return (
    <form className="mx-6 md:mx-16" >
    <div className="relative mb-6 md:mx-16 mx-6 w-40 md:w-48 h-40 md:h-48 border border-gray-300 rounded-lg overflow-hidden">
    {!previewUrl && (
      <>
        <label htmlFor="fileInput" className="absolute inset-0 flex flex-col items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M13.5 10a.5.5 0 0 1-.5.5h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 .5.5z" />
          </svg>
          <span className="text-gray-400">Add your logo here</span>
        </label>
        <input id="fileInput" type="file" onChange={fileSelectedHandler} className="hidden" />
      </>
    )}
    {previewUrl && <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />}
    {/* <button  className="absolute bottom-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">Upload</button> */}
  </div>
 
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
          {/* {categoryOptions.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))} */}
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
               value={formData.daysOfOperation[0]}

              className="pl-8 pr-2 py-2 block  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              {/* {daysOptions.map((day, index) => (
                <option key={index} value={day}>
                  {day}
                </option>
              ))} */}
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
               value={formData.daysOfOperation[1]}
              className="pl-8 pr-2 py-2 block  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              {/* {daysOptions.map((day, index) => (
                <option key={index} value={day}>
                  {day}
                </option>
              ))} */}
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
                value={formData.hoursOfOperation[0]}
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
                 v
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
          id="instagram"
          name="instagram"
          value={formData.instagram}
          placeholder="@jdfhjd"
          className="border rounded-lg border-gray-300 p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <p className="text-[16px] font-semibold">Twitter</p>
        <input
          type="text"
          name="twitter"
          value={formData.twitter}
          placeholder="@jdfhjd"
          className="border rounded-lg border-gray-300 p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <p className="text-[16px] font-semibold">Facebook</p>
        <input
         type="text"
         name="facebook"
         value={formData.facebook}
          placeholder="@jdfhjd"
          className="border rounded-lg border-gray-300 p-2 w-full"
          required
        />
      </div>
    </div>

    <div className="grid gap-4 grid-cols-2 md:grid-cols-5 lg:gap-6">
    {[...Array(5)].map((_, index) => (
    <div key={index} className="flex items-center justify-center bg-[#D9D9D9] border border-gray-300 p-4 w-32 h-32 md:w-48 md:h-48 ">
      <label htmlFor={`image${index + 1}`} className="">
        {selectedFiles[index] ? (
          <img
            src={URL.createObjectURL(selectedFiles[index])}
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
        id={`image${index + 1}`}
        accept="image/*"
        className="hidden"
        onChange={(e) => handleImageChange(index, e)}
      />
    </div>
  ))}
    </div>
    <SubmitBtn text={submitBtnText}  />

    {/* <div className="flex justify-end mr-16 my-4">
      <button
        type="submit"
        className="bg-blue-500  text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Submit
      </button>
    </div> */}
  </form>
  )
}

export default ProfileForm