// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from '../BackgroundImage.module.css';

const Unreguser = () => {
  return (
    <div className="relative">
      <div className={`absolute inset-0 bg-cover bg-center h-[355px] ${styles.backgroundImage2}`}>
        <h1 className="absolute inset-0 flex justify-center items-center text-white text-4xl font-bold">Review</h1>
      </div>
    </div>
    
  );
};

export default Unreguser;
