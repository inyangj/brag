import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import ProfileHero from "../components/Profile/ProfileHero";
import PersonalInfo from "../components/Profile/PersonalInfo";
import Buttons from "../components/Profile/Buttons";
import ProfileForm from "../components/Profile/ProfileForm";
import axios from '../utility/Axios'
import LogoutModal from "../components/LogoutModal";
import ProfileSkeleton from "../utility/Loader";

function ProfilePage() {
  const [business, setBusiness] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const users = JSON.parse(localStorage.getItem("user"));
  
  const getMyBusiness = async () => {
    try {
      const response = await axios.get(`businesses/my-business/business`);
      setBusiness(response.data.data);
    
      
      
    }
    catch (error) {
      console.error(error);
    }finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getMyBusiness();
  }, []);

  // if (!business || business.length === 0) {
  //   return <ProfileSkeleton />;
  // }

  const lastBusiness = business[business.length - 1];
;
  // const {
  //   id,
  //   phoneNumber,
  // } = lastBusiness;
  return (
    <div>
      <Nav />
      <ProfileHero />
      <PersonalInfo profile={users?.data} phone={lastBusiness?.phoneNumber}/>
      {isLoading ? (
        <ProfileSkeleton />
      ) : lastBusiness ? (
        <ProfileForm business={lastBusiness} />
      ) : (
        <div className="text-center text-gray-600">No business created yet</div>
      )}


      <div className=" bottom-0 left-0 w-full flex justify-end p-4">
        <button onClick={() => setIsModalOpen(true)} className="border border-red-500 text-red-500 px-4 py-2 rounded">
          Logout
        </button>
      </div>
      <LogoutModal isOpen={isModalOpen} onClose={setIsModalOpen} />
    </div>
  );
}

export default ProfilePage;
