import React from 'react';
import styles from '../BackgroundImage.module.css';
import image from "../assets/review/image.jpg";
import star from "../assets/review/star.svg";
import vector from "../assets/review/vector.png";

const Unreguser = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative">
        <div className={`inset-0 bg-cover bg-center w-full h-[355px] ${styles.backgroundImage2}`} style={{ backgroundSize: 'cover' }}>
          <h1 className="absolute top-0 left-0 right-0 text-center text-white text-4xl font-bold mt-16 md:mt-24">Review</h1>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full md:w-[250px] md:h-[50px]">
              <img src={image} alt="Product" className="w-full h-full object-cover" />
            </div>
            <div className="md:mx-[-90px] lg:mx-[-400px]">
              <div className="">
                <h2>ShoeCorner Nigeria</h2>
              </div>
              <div className="">
                <p>Products</p>
              </div>
              <div className="flex">
                <p>3.5</p>
                <img src={star} alt="Rating star" />
                <p>(15)</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 md:mt-16">
            <div className="col-span-1 text-lg md:text-xl">Tap to Rate:</div>
            <div className="col-span-1 md:col-span-2 flex   w-full">
              <div className="w-12 md:w-20 flex ">
                <img src={vector} alt="Rating star" />
                <img src={vector} alt="Rating star" />
                <img src={vector} alt="Rating star" />
                <img src={vector} alt="Rating star" />
                <img src={vector} alt="Rating star" />
              </div>
            </div>
          </div>
          <h4 className="text-center mt-4 md:mt-8">Indicate the services you're reviewing for</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 justify-items-center mt-5">
            <h3 className="w-full md:w-auto h-20 p-2 border border-gray-300 rounded-lg flex items-center justify-center md:w-[156px]">Adult Shoes</h3>
            <h3 className="w-full md:w-auto h-20 p-2 border border-gray-300 rounded-lg flex items-center justify-center md:w-[156px]">Kiddies shoes</h3>
            <h3 className="w-full md:w-auto h-20 p-2 border border-gray-300 rounded-lg flex items-center justify-center md:w-[156px]">Wholesales</h3>
            <h3 className="w-full md:w-auto h-20 p-2 border border-gray-300 rounded-lg flex items-center justify-center md:w-[156px]">More</h3>
          </div>
          <form className="flex flex-col mt-4">
            <input
              type="text"
              className="border border-gray-300 p-2 w-full h-[200px] p-0 placeholder-top"
              placeholder="Describe your experience (Optional)"
            />
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 w-full md:w-[200px] rounded-md hover:bg-blue-600">Post Review</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Unreguser;
