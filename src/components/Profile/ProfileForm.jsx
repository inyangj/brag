import React, { useState } from 'react'
import ProfileLogoBox from './ProfileLogoBox'
import logoUrl from '../../assets/profile/heroimg.png'
import Services from '../business/Services';
import TextRender from '../business/TextRender';
import InfoField from './InfoField';
import Images from '../business/Images';

const ProfileForm = ({business}) => {
  const {
    id,
    slug,
    businessName,
    businessMail,
    businessCategory,
    image,
    location,
    phoneNumber,
    instagram,
    twitter,
    facebook,
    user,
    logo,
    services,
    daysOfOperation,
    hoursOfOperation,

  } = business;

  const [originalLogo, setOriginalLogo] = useState(logo.logoUrl);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isEditingLogo, setIsEditingLogo] = useState(false)
 

  return (
    <form className="mx-6 md:mx-16" >

  

  <h2 className="mt-12  my-2 font-bold">BUSINESS INFO</h2>
  <section className="md:flex items-center gap-8 md:gap-14">

  <ProfileLogoBox id={id}  businessName={businessName} isEditingLogo={isEditingLogo} setIsEditingLogo={setIsEditingLogo} previewUrl={previewUrl} setPreviewUrl={setPreviewUrl} originalLogo={originalLogo} setOriginalLogo={setOriginalLogo}/>
       
        <div className="w-full pt-5 grid gap-5">
        <InfoField label={`Business name`} value={businessName} />
        <InfoField label={`Business email`} value={businessMail} />
        <InfoField label={`Business category`} value={businessCategory} />
        </div>
      </section>

      <section className="grid gap-5 md:gap-10">
        <h2 className="text-[16px] font-semibold">Services</h2>
        <Services
          styleName={`grid gap-5 md:gap-10`}
          className={`border-[#A9A9A9] text-2xl rounded-[10px] py-4 pl-8 `}
          services={services}
        />
      </section>

      <div className="w-full pt-5 grid gap-5">
          <InfoField label={`Location`} value={location} />
          {/* <InfoField label={`Business category`} value={businessCategory} /> */}
        </div>

      <h2 className="text-[16px] font-semibold">Days of Operation</h2>
      <div className=" pt-2 flex items-center gap-5 md:gap-10">
          <InfoField  value={daysOfOperation[0]} />
          <div className='border w-11 h-0 mb-5'></div>
          <InfoField  value={daysOfOperation[1]} />
        </div>

      <h2 className="text-[16px] mt-5 font-semibold">Hours of Operation</h2>
      <div className=" pt-2 flex items-center gap-5 md:gap-10">
          <InfoField  value={hoursOfOperation[0]} />
          <div className='border w-11 h-0 mb-5'></div>
          <InfoField  value={hoursOfOperation[1]} />
        </div>
      <div className=" pt-2 grid gap-5">
      <h2 className="text-[16px] mt-5 font-semibold">Social Media Handles</h2>
          <InfoField label={`Instagram`}  value={instagram} />
          <InfoField label={`Twitter`}  value={twitter} />
          <InfoField label={`Facebook`}  value={facebook} />
        </div>

        <section className="my-[43px] ">
        <Images images={image} />
      </section>


    
      
  
 
   
    

  </form>
  )
}

export default ProfileForm