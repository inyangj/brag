// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from '../BackgroundImage.module.css';

const Forgotpassword = () => {
  return (
    <div className={`absolute inset-0 bg-cover bg-center ${styles.backgroundImage} `}>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="w-[400px] h-[350px] p-6 bg-gray-300 rounded-tl-[20px] rounded-br-[20px] shadow-md relative">
          <h1 className="text-3xl text-blue-500 font-bold mb-4 text-center">BRAG</h1>
          <p className="font-montserrat text-2xl font-bold leading-10 tracking-wider text-center">Forgot Password?</p>
          <p className="font-montserrat text-base font-medium leading-5 tracking-normal text-left text-black ml-6 mr-6">
            Kindly fill in your registered mail to get a link to reset password
          </p>
          <form className="max-w-xs mx-auto mt-8">
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="p-3 w-full rounded-tl-[5px] rounded-br-[5px]"
              />
            </div>
            <div className="flex items-center justify-center">
            <button
              type="submit"
              className="p-3 w-full h-12 bg-blue-500 text-white mt-[4%] rounded-md"
            >Login
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;