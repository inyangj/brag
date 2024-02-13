import React, { useState } from 'react';
import axios from 'axios';
import styles from '../BackgroundImage.module.css';

const Createpassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const url = import.meta.env.VITE_APP_BASE_URL;
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`${url}/users/reset-password`, { // Assuming reset password endpoint
        newPassword 
      });

      console.log('Response:', response);

      console.log('Password reset successfully');
    } catch (error) {
      setError('Failed to reset password');
      console.error('Error resetting password:', error);
    }
  };

  return (
    <div className={`absolute inset-0 bg-cover bg-center ${styles.backgroundImage}`}>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="w-[400px] h-[450px] p-6 bg-gray-300 rounded-tl-[20px] rounded-br-[20px] shadow-md relative">
          <h1 className="text-3xl text-blue-500 font-bold mb-4 text-center">BRAG</h1>
          <p className="font-montserrat text-2xl font-bold text-center">Create a new password</p>
          <p className="font-montserrat text-base font-medium text-center">
            Please create a strong and memorable password
          </p>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <form className="max-w-xs mx-auto mt-8" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="password"
                id="newpasssword"
                name="newpassword"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="p-3 w-full rounded-tl-[5px] rounded-br-[5px]"
              />
            </div>
            <div className="mb-2 relative">
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                placeholder="Confirm new Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
