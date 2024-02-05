// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import styles from "../BackgroundImage.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const url= import.meta.env.VITE_APP_BASE_URL;

  const handleSignup = async (e) => {
    e.preventDefault();


      const data = {
        fullName: formData.fullname,
        email: formData.email,
        password: formData.password,
      };
      console.log(data);

      try {
        setIsLoading(true);
        const response = await axios.post(`${url}/users/signup`, data);

        if (response.status === 201) {
          toast.success("Registration successful!");
          localStorage.setItem("userData", response.data);
          setIsLoading(false);
          navigate("/");
        } else {
          toast.error("Registration unsuccessful.");
        }
      } catch (error) {
        toast.error("Registration failed.");
      }
    
  };
  return (
    <div
      className={`absolute inset-0 bg-cover bg-center ${styles.backgroundImage} `}
    >
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="w-[400px] h-[500px] p-6 bg-gray-300 rounded-tl-[20px] rounded-br-[20px] shadow-md relative">
          <h1 className="text-3xl text-blue-500 font-bold mb-4 text-center">
            BRAG
          </h1>
          <p className="font-montserrat text-2xl font-bold leading-10 tracking-wider text-center">
            Hello!
          </p>
          <p className="font-montserrat text-base font-medium leading-5 tracking-normal text-center text-black">
            SignUp to see reviews
          </p>
          <form onSubmit={handleSignup} className="max-w-xs mx-auto mt-8">
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
                placeholder="Name"
                className="p-3 w-full rounded-tl-[5px] rounded-br-[5px]"
              />
            </div>
            <div className="mb-2 relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="p-3 w-full rounded-tl-[5px] rounded-br-[5px]"
              />
            </div>
            <div className="mb-2 relative">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="p-3 w-full rounded-tl-[5px] rounded-br-[5px] mt-3"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="p-3 w-full h-12 bg-blue-500 text-white mt-[5%] rounded-md"
              >
                {isLoading ? "Loading..." : "Sign Up"}
              </button>
            </div>
            <div className="font-montserrat text-base font-normal leading-5 tracking-normal text-center mt-5">
              Have an account?{" "}
              <span className="text-blue-500 cursor-pointer hover:underline">
                {" "}
                <Link to="/login"> Login </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
