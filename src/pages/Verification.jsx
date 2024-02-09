// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from '../BackgroundImage.module.css';

const verification = () => {
return (
    <div className={`absolute inset-0 bg-cover bg-center ${styles.backgroundImage} `}>
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="w-[400px] h-[270px] p-6 bg-gray-300 rounded-tl-[20px] rounded-br-[20px] shadow-md relative">
        <h1 className="text-3xl text-blue-500 font-bold mb-4 text-center">BRAG</h1>
        <p className="font-montserrat text-2xl font-bold leading-10 tracking-wider text-center">Verification Successful</p>
        <p className="font-montserrat text-2xl text-center">
        Login to continue</p>
            <div className="flex items-center justify-center">
            <button
            type="submit"
            className="p-3 w-[50%] h-12 bg-blue-500 text-white mt-[8%] rounded-md"
            >Login
            </button>
        </div>
        
        </div>
    </div>
    </div>
);
};

export default verification;