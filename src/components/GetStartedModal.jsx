import React from 'react'
import { Link } from 'react-router-dom'
import {faClose} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GetStartedModal = ({isOpen, onClose}) => {
    if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div className="bg-white p-8 rounded-lg ">
        <div className='grid place-items-end '>

        <FontAwesomeIcon icon={faClose} className='text-2xl' onClick={() => onClose(false)} />
        </div>

      <h2 className="text-2xl font-bold mb-4 text-center">Welcome!</h2>
      <div className="flex justify-center">
        <Link to={`/login`}
          className="border border-blue-500 text-blue-500 px-7 py-2 rounded-[10px] mr-4"
        //   onClick={() => onClose(!isOpen)}
        >
          Login
        </Link>
        <button
          className="bg-blue-500 text-white px-7 py-2 rounded-[10px]"
        //   onClick={() => onClose(false)}
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
  )
}

export default GetStartedModal