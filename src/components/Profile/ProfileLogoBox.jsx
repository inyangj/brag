import React, { useEffect, useState } from "react";
import axios from '../../utility/Axios'
import { toast } from "react-toastify";
import logoUrl from '../../assets/profile/heroimg.png'

function ProfileLogoBox({originalLogo, setOriginalLogo, previewUrl, setPreviewUrl, isEditingLogo, setIsEditingLogo, businessName, id}) {
  const [isSaving, setIsSaving] = useState(false);
  const [logo, setLogo] = useState(null);
  // const [previewUrl, setPreviewUrl] = useState(null);
  


  const handleImageChange = ( e) => {
      const file = e.target.files[0];
      setPreviewUrl(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
        setLogo(file);
      };
      reader.readAsDataURL(file);
    
  };

  const handleEditLogo = () => {
    setIsEditingLogo(true);
    setPreviewUrl(originalLogo);
  };

  const handleCancelEditLogo = () => {
    setIsEditingLogo(false);

  };

  const handleSaveLogo = async (e) => {
    e.preventDefault();
    setOriginalLogo(previewUrl);
    setIsSaving(true);
    const formData  = {
      logo: logo,
      businessName: businessName
    }
    const formDataToSend = new FormData();
    formDataToSend.append("logo", formData.logo);
    formDataToSend.append("businessName", formData.businessName);

    try {
      const response = await axios.patch(
        `/businesses/${id}`,
        formDataToSend
      );
      toast.success("Business logo successfully changed");

      setIsSaving(false);
      setIsEditingLogo(false);
      // navigate("/brag/business");
    
     
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
      setIsSaving(false);
      
    }
  }
  return (
    <div>
    <div className="relative w-48 md:w-52 h-48 md:h-52 border border-gray-300 rounded-lg overflow-hidden">
    {previewUrl && isEditingLogo && (
      <>
        <label htmlFor="fileInput" className="absolute inset-0 flex flex-col items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M13.5 10a.5.5 0 0 1-.5.5h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 .5.5z" />
          </svg>
          <span className="text-gray-400">Add your logo here</span>
        </label>
        <input id="fileInput" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
        <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
        
      </>
    )}
    {(!previewUrl || !isEditingLogo) && (
    <>
    <img src={originalLogo} alt="original" className="w-full h-full object-cover" />

    </>)}
      </div>
      {(!previewUrl || !isEditingLogo) && (
    <>
    <button onClick={handleEditLogo} className=" bg-blue-500 text-white  px-2 py-1 rounded">Edit</button>
    </>)}
    {isEditingLogo && (
      <div className=" flex justify-between items-center w-1/2 md:w-full">
      <button onClick={handleCancelEditLogo} className=" bg-red-500 text-white  px-2 py-1 rounded">Cancel</button>
      <button onClick={handleSaveLogo} className=" bg-blue-500 text-white  px-2 py-1 rounded">{isSaving ? 'Saving...' : 'Save'}</button>
      </div>
      )}
      
  </div>
  );
}

export default ProfileLogoBox;
