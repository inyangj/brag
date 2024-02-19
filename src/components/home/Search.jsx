import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faFilter } from '@fortawesome/free-solid-svg-icons'
import axios from '../../utility/Axios';
import { useNavigate } from 'react-router-dom';

const Search = ({className, children}) => {
    const [term, setTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState(null);

    const navigate = useNavigate();

    const onInputChange = async (e) => {
        try {
          setTerm(e.target.value);
          const value = e.target.value;
          if (value) {
            setShowSuggestions(true);
            setIsLoading(true);
    
            const response = await axios.get(
              `/businesses/businessSearch/${value}`
            );
    
      
            setSuggestions(response.data.doc);
          } else {
            setShowSuggestions(false);
            setSuggestions([]);
          }
        } catch (error) {
          console.error(error.response);
        } finally {
          setIsLoading(false);
        }
      };

      const handleSuggestionClick = (suggestion) => {
            // setTerm(suggestion);
            setShowSuggestions(false);
            
            navigate(`/brag/business/${suggestion}`);
          };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setTerm(e.target.value);
            const value = e.target.value;
            if (value) {
              setShowSuggestions(true);
              setIsLoading(true);
      
              const response = await axios.get(
                `/businesses/businessSearch/${value}`
              );
    
      
              setSuggestions(response.data.doc);
            } else {
              setShowSuggestions(false);
              setSuggestions([]);
            }
          } catch (error) {
            console.error(error.response);
          } finally {
            setIsLoading(false);
          }
        
    }

  return (
    <section className='grid justify-center '>
        <form action="" onSubmit={handleSubmit} className='flex items-center  py-4 justify-center :w-[500px] xl:w-[800px]'>
        <div className="relative w-full lg:w-1/2">
        <div className="w-full  flex items-center gap-x-4 bg-white/10 rounded-lg px-3 lg:px-5 py-3 lg:py-4">
        <FontAwesomeIcon title='search' className='text-[#A9A9A9] ' icon={faMagnifyingGlass} />

          <input
            className="w-full bg-transparent shadow-none border-0 outline-0  text-sm "
            type="text"
            placeholder="Search"
            value={term}
            onChange={onInputChange}
          />
        </div>
        {showSuggestions && (
          <ul className="absolute w-full bg-white rounded-b-lg py-2 overflow-y-auto">
            {!isLoading ? (
              suggestions?.map((suggestion, index) => (
                <li
                  key={index}
                  className="cursor-pointer px-4 py-2 hover:bg-white/20 font-heebo"
                  onClick={() => handleSuggestionClick(suggestion.id)}
                >
                  {suggestion.businessName}
                </li>
              ))
            ) : (
              <div className="px-4 py-2 font-heebo">
                <b>Loading...</b>
              </div>
            )}

            {!isLoading && suggestions?.length === 0 ? (
              <h3 className="px-4 py-2 font-heebo">
                <b>No Results!</b>
              </h3>
            ) : null}
          </ul>
        )}
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


// const SearchBar = () => {
//   const router = useRouter();
//   const [term, setTerm] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [suggestions, setSuggestions] = useState(null);

//   const onInputChange = async (e) => {
//     try {
//       setTerm(e.target.value);
//       const value = e.target.value;
//       if (value) {
//         setShowSuggestions(true);
//         setIsLoading(true);

//         const response = await axios.get(
//           `/products/suggestion?search=${value}`
//         );

//         console.log(response.data.data);

//         setSuggestions(response.data.data);
//       } else {
//         setShowSuggestions(false);
//         setSuggestions([]);
//       }
//     } catch (error) {
//       console.error(error.response);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setTerm(suggestion);
//     setShowSuggestions(false);
//     // Optionally, you can automatically submit the form here
//     router.push(`/search-results/${suggestion}`);
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     router.push(`/search-results/${term}`);
//   };

//   return (
//     <form
//       onSubmit={onSubmit}
//       className="flex-1  flex items-center justify-center lg:gap-x-1"
//     >
//       <div className="relative w-full lg:w-1/2">
//         <div className="w-full  flex items-center gap-x-4 bg-white/10 rounded-lg px-3 lg:px-5 py-3 lg:py-4">
//           <Image src={searchIconwhite} alt="search icon" />
//           <input
//             className="w-full bg-transparent shadow-none border-0 outline-0 text-white text-sm "
//             type="text"
//             placeholder="Search for Grocery items"
//             onChange={onInputChange}
//           />
//         </div>
//         {showSuggestions && (
//           <ul className="absolute w-full bg-white rounded-b-lg py-2 overflow-y-auto">
//             {!isLoading ? (
//               suggestions?.map((suggestion, index) => (
//                 <li
//                   key={index}
//                   className="cursor-pointer px-4 py-2 hover:bg-white/20 font-heebo"
//                   onClick={() => handleSuggestionClick(suggestion.name)}
//                 >
//                   {suggestion.name}
//                 </li>
//               ))
//             ) : (
//               <div className="px-4 py-2 font-heebo">
//                 <b>Loading...</b>
//               </div>
//             )}

//             {!isLoading && suggestions.length === 0 ? (
//               <h3 className="px-4 py-2 font-heebo">
//                 <b>No Results!</b>
//               </h3>
//             ) : null}
//           </ul>
//         )}
//       </div>

//       <button
//         type="submit"
//         onClick={(e) => onSubmit(e)}
//         className="cursor-pointer hidden lg:flex items-center gap-x-4 border border-white rounded px-5 py-4"
//       >
//         <Image src={locationIconWhite} alt="location icon" />
//         <span className="capitalize text-xs text-white">location</span>
//       </button>
//     </form>
//   );
// };

// export default SearchBar;
