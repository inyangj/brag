import React from 'react'
import {Outlet} from 'react-router-dom'

const Services = ({className, styleName}) => {

   const Services=[
     
        "Snacks",
        "Clothings",
        "Restaurant",
        "Entertainment",
       
   ]




  return (
    <div className={`${styleName} `}>
        {Services.map((service, index)=>(
            
                <p key={index} className={`border   ${className}  `}>{service}</p>
           
        ))}

    

    </div>
  )
}

export default Services