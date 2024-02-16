import React from 'react'
import {Outlet} from 'react-router-dom'

const Services = ({className, styleName, services, onClick}) => {

  //  const services=[
     
  //       "Snacks",
  //       "Clothings",
  //       "Restaurant",
  //       "Entertainment",
       
  //  ]




  return (
    <div className={`${styleName} `}>
        {services?.map((service, index)=>(
            
                <p key={index} className={`border   ${className}  `} onClick={() => onClick(service)}>{service}</p>
           
        ))}

    

    </div>
  )
}

export default Services