import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {faClose} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LogoutModal = ({isOpen, onClose}) => {
    if (!isOpen) return null

    const navigate = useNavigate()

     const handleLogout = () => {
    
    localStorage.clear();
    navigate('/')

  
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div className="bg-white p-8 rounded-lg ">
        {/* <div className='grid place-items-end '>

        <FontAwesomeIcon icon={faClose} className='text-2xl' onClick={() => onClose(false)} />
        </div> */}

      <h2 className="text-2xl font-bold mb-4 text-center">Do you want to Logout?</h2>
      <div className="flex justify-between items-center">
        <button
          className="bg-blue-500 text-white px-7 py-2 rounded-[10px]"
            onClick={handleLogout}
        >
          Yes
        </button>
        <button 
          className="border border-blue-500 text-blue-500 px-7 py-2 rounded-[10px] mr-4"
          onClick={() => onClose(false)}
        >
          No
        </button>
      </div>
    </div>
  </div>
  )
}

export default LogoutModal