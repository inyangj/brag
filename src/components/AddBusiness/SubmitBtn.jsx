import React from "react";

const SubmitBtn = ({ handleSubmit, children }) => {
  return (
    <div className="flex justify-end mr-16 my-4">
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-blue-500  text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        {children}
      </button>
    </div>
  );
};

export default SubmitBtn;
