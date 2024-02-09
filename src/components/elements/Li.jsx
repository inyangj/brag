import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({to, src, alt, children, className, style}) => {
  return (
    <Link to={to} ><li style={style} className={`hover:text-[#095EDC] ${className}`}>{children}</li></Link>
  )
}

export default Li

// <li className={`flex rounded-lg pl-4 py-2 items-center ${className} hover:bg-tertiary_blue`} style={style}><img src={src} alt={alt}/>{children}</li>

