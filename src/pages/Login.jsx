import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../BackgroundImage.module.css';

const Login = ({setIsLoggedIn}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const url = import.meta.env.VITE_APP_BASE_URL;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.post(`${url}/users/login`, formData);

      if (response.status === 200) {
        toast.success('Login successful!');
        localStorage.setItem('userData', JSON.stringify(response.data));
        const { refreshToken, ...data } = response.data;
        localStorage.setItem('token', JSON.stringify(refreshToken));
      localStorage.setItem('user', JSON.stringify(data));
      console.log(`User Object ${data}, 
       hasBusiness : ${data.data.hasBusiness}`)

        setIsLoading(false);
        setIsLoggedIn(true);
        navigate('/brag');
      }
    } catch (error) {
      toast.error('Incorrect username or password.');
      setIsLoading(false);
    }
  };

  return (
    <div className={`absolute inset-0 bg-cover bg-center ${styles.backgroundImage}`}>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="w-[400px] h-[500px] p-6 bg-gray-300 rounded-tl-[20px] rounded-br-[20px] shadow-md relative">
          <h1 className="text-3xl text-[#095EDC] font-bold mb-4 text-center">BRAG</h1>
          <p className="font-montserrat text-2xl font-bold leading-10 tracking-wider text-center">Welcome back!</p>
          <p className="font-montserrat text-base font-medium leading-5 tracking-normal text-center text-black">
            Login to see reviews
          </p>
          <form onSubmit={handleLogin} className="max-w-xs mx-auto mt-8">
            <div className="mb-4">
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
                className="p-3 w-full rounded-tl-[5px] rounded-br-[5px]"
              />
              <Link to="/forgotpassword" className="top-20px right-3 text-black text-end">
                Forgot Password?
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="p-3 w-full h-12 bg-[#095EDC] text-white mt-[12%] rounded-md"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Login'}
              </button>
            </div>
            <div className="font-montserrat text-base font-normal leading-5 tracking-normal text-center mt-5">
              Don&apos;t have an account?{' '}
              <Link to="/signup" className="text-[#095EDC] cursor-pointer hover:underline">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
