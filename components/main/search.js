import React, { useRef } from 'react';
import Image from 'next/image';

function SearchComponent({ onSearch }) {
  const y = useRef(); 
  
  function searchFunction(event) {
    event.preventDefault();
    const enteredValue = y.current.value;
    onSearch(enteredValue);
  }

  return (
    <div className="flex justify-center mb-4 ml-4 mt-4">
      <div className="relative w-96 drop-shadow-xl">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Image src="/images/Search.png" alt="search" width={20} height={20} />
        </div>
        <input 
          type="text" 
          placeholder="Search.." 
          className="w-full h-12 pl-10 pr-4 text-sm text-black placeholder-gray-500 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
          onChange={searchFunction}
          ref={y}
        />
      </div>
    </div>
  );
}

export default SearchComponent;
