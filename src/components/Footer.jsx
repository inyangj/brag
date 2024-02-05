import React from 'react'
import { useLocation } from 'react-router-dom'
import Li from './elements/Li'


const Footer = () => {


    const location = useLocation();
    const getLinkStyle = (path) => ({
        backgroundColor: location.pathname === path ? '#197ED2' : '',
      });
  return (
    <footer className="bg-[#095EDC2B] mt-10">
    <div>
    <h3 className="font-bold text-2xl md:text-[2.5rem] text-[#095EDC]">BRAG</h3>

    <p><span className="font-semibold">BRAG </span>aims to revolutionize the way businesses manage customer reviews and how users discover local businesses based on genuine feedback.</p>
    </div>

    <div>
    <h3 className="font-bold text-2xl md:text-[2.5rem] text-[#095EDC]">Category</h3>

    <ul>
        <Li
              to="/review"
              style={getLinkStyle('/review')}
              className={`gap-[0.88rem] hover:text-[#095EDC]`}
              
            >
             Review
            </Li>
        <Li
              to="/explore"
              style={getLinkStyle('/explore')}
              className={`gap-[0.88rem] hover:text-[#095EDC]`}
              
            >
             Explore
            </Li>
        <Li
              to="/review"
              style={getLinkStyle('/review')}
              className={`gap-[0.88rem] hover:text-[#095EDC]`}
              
            >
             Review
            </Li>
    </ul>
      
    </div>
    
  </footer>
  )
}

export default Footer