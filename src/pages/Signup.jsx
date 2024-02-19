import { useState } from "react";
import styles from "../BackgroundImage.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const url = import.meta.env.VITE_APP_BASE_URL;

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!formData.fullname || !formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    const data = {
      fullName: formData.fullname,
      email: formData.email,
      password: formData.password,
    };

    try {
      setIsLoading(true);
      const response = await axios.post(`${url}/users/signup`, data);

      if (response.status === 201) {
        toast.success("Registration successful!");
        localStorage.setItem("userData", response.data);
        setIsLoading(false);
        setShowModal(true);
      } else {
        toast.error("Registration unsuccessful.");
      }
    } catch (error) {
      toast.error("Registration failed.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
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
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} 
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="p-3 w-full rounded-tl-[5px] rounded-br-[5px] mt-3"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 focus:outline-none"
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />  
                </button>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="p-3 w-full h-12 bg-[#095EDC] text-white mt-[5%] rounded-md"
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
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-8 rounded-md shadow-md text-center">
              <p className="text-lg font-semibold">
                Check your email for verification link
              </p>
              <button
                onClick={closeModal}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
