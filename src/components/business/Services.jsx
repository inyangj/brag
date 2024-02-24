import React, { useState } from 'react'
import {Outlet} from 'react-router-dom'


const Services = ({className, styleName, services, onClick}) => {

  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    onClick(service);
  };

  //  const services=[
     
  //       "Snacks",
  //       "Clothings",
  //       "Restaurant",
  //       "Entertainment",
       
  //  ]




  return (
    <div className={`${styleName} `}>
        {services.map((service, index)=>(
            
                <p key={index} className={`border   ${className} ${
            selectedService === service ? 'bg-[#095EDC] text-white' : ''
          }  `} onClick={() => handleServiceClick(service)}>{service}</p>
           
        ))}

    

    </div>
  )
}

export default Services