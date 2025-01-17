// components/SuccessMessage.js
import React from 'react';
import Image from 'next/image';

function SuccessMessage() {
  return (
<div className='ml-[1050px] mt-[-60px]'>
<div className="flex flex-col gap-2 w-60 sm:w-72 text-[10px] sm:text-xs z-50">
  <div
    className="error-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#edeef3] px-[10px]"
  >
    <div className="flex gap-2">
      <div className="text-[#58d68d] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
       <Image src={"/images/Check.png"} alt="check" height={25} width={25}></Image>
      </div>
      <div>
        <p className="text-black">Login Successful</p>
        <p className="text-gray-500">Redirecting to home page.</p>
      </div>
    </div>
    <button
      className="text-gray-600 hover:bg-gray-300 p-1 rounded-md transition-colors ease-linear"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        ></path>
      </svg>
    </button>
  </div>
</div>
</div>

  );
}

export default SuccessMessage;
