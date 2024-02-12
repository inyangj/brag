import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faFilter } from '@fortawesome/free-solid-svg-icons'

const Search = ({className, children}) => {
    const [search, setSearch] = useState("")

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        
    }

  return (
    <section className='grid justify-center '>
        <form action="" onSubmit={handleSubmit} className='flex items-center  py-4 justify-center :w-[500px] xl:w-[800px]'>
            <div className=' rounded-l-[10px] bin   flex  items-center p-3 w-full'>
        <input 
        type="text"
        className="outline-none w-full appearance-none"
        placeholder="Search..."
        onChange={handleInputChange}
        value={search}
        />
                <button type='submit'>
                <FontAwesomeIcon title='search' className='text-[#A9A9A9]' icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className='border bin rounded-r-[10px] border-[#A9A9A9] p-3'>
            <FontAwesomeIcon title='search' className='text-[#A9A9A9] ' icon={faFilter} />

            </div>

        </form>

            <button className={`${className} `} onClick={handleSubmit}>
               {children}
            </button> 
    </section>
  )
}

export default Search