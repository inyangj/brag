import { useState } from "react";
import styles from "../BackgroundImage.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.post("/api/forgot-password", { email });

      if (response.status === 200) {
        toast.success("Password reset email sent!");
        setIsLoading(false);
        setShowModal(true);
      } else {
        toast.error("Failed to send password reset email.");
      }
    } catch (error) {
      toast.error("Failed to send password reset email.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={`absolute inset-0 bg-cover bg-center ${styles.backgroundImage} `}>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="w-[400px] h-[350px] p-6 bg-gray-300 rounded-tl-[20px] rounded-br-[20px] shadow-md relative">
          <h1 className="text-3xl text-blue-500 font-bold mb-4 text-center">BRAG</h1>
          <p className="font-montserrat text-2xl font-bold leading-10 tracking-wider text-center">Forgot Password?</p>
          <p className="font-montserrat text-base font-medium leading-5 tracking-normal text-left text-black ml-6 mr-6">
            Kindly fill in your registered mail to get a link to reset password
          </p>
          <form onSubmit={handleSubmit} className="max-w-xs mx-auto mt-8">
            <div className="mb-4">
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Email"
                className="p-3 w-full rounded-tl-[5px] rounded-br-[5px]"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="p-3 w-full h-12 bg-blue-500 text-white mt-[4%] rounded-md"
              >
                {isLoading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-8 rounded-md shadow-md text-center">
              <p className="text-lg font-semibold">
                Password reset email sent!
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

export default Forgotpassword;