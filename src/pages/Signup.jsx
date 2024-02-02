// eslint-disable-next-line no-unused-vars
import React from 'react';

const Signup = () => {
  return (
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/src/assets/login and signup/unsplash.jpg")' }}>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="w-[400px] h-[500px] p-6 bg-gray-300 rounded-tl-[20px] rounded-br-[20px] shadow-md relative">
          <h1 className="text-3xl text-blue-500 font-bold mb-4 text-center">BRAG</h1>
          <p className="font-montserrat text-2xl font-bold leading-10 tracking-wider text-center">Hello!</p>
          <p className="font-montserrat text-base font-medium leading-5 tracking-normal text-center text-black">
            SignUp to see reviews
          </p>
          <form className="max-w-xs mx-auto mt-8">
            <div className="mb-4">
              <input
                type="name"
                id="name"
                name="name"
                placeholder="Name"
                className="p-3 w-full rounded-tl-[5px] rounded-br-[5px]"
              />
            </div>
            <div className="mb-2 relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="p-3 w-full rounded-tl-[5px] rounded-br-[5px]"
              />
            </div>
            <div className="mb-2 relative">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="p-3 w-full rounded-tl-[5px] rounded-br-[5px] mt-3"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="p-3 w-full h-12 bg-blue-500 text-white mt-[5%] rounded-md"
              >
                SignUp
              </button>
            </div>
            <div className="font-montserrat text-base font-normal leading-5 tracking-normal text-center mt-5">
              Have an account? <span className="text-blue-500 cursor-pointer hover:underline">Login</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
