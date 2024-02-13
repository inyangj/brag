import styles from '../BackgroundImage.module.css';
import image from "../assets/review/image.jpg";
import vector from "../assets/review/vector.png";

const Reguser = () => {
return (
    <div className="overflow-hidden">
    <div className="relative">
        <div className={`inset-0 bg-cover bg-center w-full h-[355px] ${styles.backgroundImage2}`} style={{ backgroundSize: 'cover' }}>
        <h1 className="absolute top-0 left-0 right-0 text-center text-white text-4xl font-bold mt-16 md:mt-24">Review</h1>
        </div>
        <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:flex md:items-center">
            <div className="w-full md:w-[250px] md:h-[150px]">
            <img src={image} alt="Product" className="w-full h-full object-cover" />
            </div>
            <div className="md:ml-4 mt-2">
            <div>
                <h2>Okonu Deborah</h2>
            </div>
            <div>
                <p>Tap a star to rate</p>
            </div>
            <div className="flex">
    <img src={vector} alt="Rating star" className="w-10 h-10" />
    <img src={vector} alt="Rating star" className="w-10 h-10" />
    <img src={vector} alt="Rating star" className="w-10 h-10" />
    <img src={vector} alt="Rating star" className="w-10 h-10" />
    <img src={vector} alt="Rating star" className="w-10 h-10" />
    </div>
            </div>
</div>
        <h4 className="text-center mt-4 md:mt-8 font-montserrat text-2xl md:text-3xl font-medium leading-10 md:leading-12">Indicate the services you're reviewing for</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center mt-5" style={{ gap: '0' }}>
    <button className="w-full h-20 p-2 border border-gray-300 rounded-lg flex items-center font-medium justify-center md:w-[120px] bg-white text-[#095EDC] focus:outline-none hover:bg-blue-500 hover:text-white transition-colors duration-300">Adult Shoes</button>
    <button className="w-full h-20 p-2 border border-gray-300 rounded-lg flex items-center font-medium justify-center md:w-[120px] bg-white text-[#095EDC] focus:outline-none hover:bg-blue-500 hover:text-white transition-colors duration-300">Kiddies shoes</button>
    <button className="w-full h-20 p-2 border border-gray-300 rounded-lg flex items-center font-medium justify-center md:w-[120px] bg-white text-[#095EDC] focus:outline-none hover:bg-blue-500 hover:text-white transition-colors duration-300">Wholesales</button>
    <button className="w-full h-20 p-2 border border-gray-300 rounded-lg flex items-center font-medium justify-center md:w-[120px] bg-white text-[#095EDC] focus:outline-none hover:bg-blue-500 hover:text-white transition-colors duration-300">More</button>
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

export default Reguser;
