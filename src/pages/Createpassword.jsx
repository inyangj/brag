// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from '../BackgroundImage.module.css';

const Createpassword = () => {
  return (
    <div className={`absolute inset-0 bg-cover bg-center ${styles.backgroundImage} `}>
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="w-[400px] h-[450px] p-6 bg-gray-300 rounded-tl-[20px] rounded-br-[20px] shadow-md relative">
        <h1 className="text-3xl text-blue-500 font-bold mb-4 text-center">BRAG</h1>
        <p className="font-montserrat text-2xl font-bold text-center">Create a new password</p>
        <p className="font-montserrat text-base font-medium text-center">
          Please create a strong and memorable password
        </p>
        <form className="max-w-xs mx-auto mt-8">
          <div className="mb-4">
            <input
              type="password"
              id="newpasssword"
              name="newpassword"
              placeholder="New password"
              className="p-3 w-full rounded-tl-[5px] rounded-br-[5px]"
            />
          </div>
          <div className="mb-2 relative">
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              placeholder="Confirm new Password"
              className="p-3 w-full rounded-tl-[5px] rounded-br-[5px]"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="p-3 w-full h-12 bg-blue-500 text-white mt-[12%] rounded-md"
            >
            Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Createpassword;