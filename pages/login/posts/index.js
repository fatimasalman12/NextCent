import React from "react";
import Image from "next/image";
function PostingPage() {
  return (
    <div className="relative w-full h-screen bg-[#ffbd4ac2] overflow-x-hidden">
      <div class="fixed inset-0 bg-[radial-gradient(circle_at_top_left,_#E8EBE6_7%,_transparent_20%)]"></div>
      <div class="fixed inset-0 bg-[radial-gradient(circle_at_bottom_right,_#E8EBE6_7%,_transparent_20%)]"></div>

      <Image
        src={"/images2/the-one.png"}
        alt="Whatever"
        height={400}
        width={400}
        className="fixed top-[-100px] right-[-200px] w-[500px] h-[500px] transform rotate-180 opacity-70"
      />
      <Image
        src={"/images2/g1.png"}
        alt=""
        height={400}
        width={400}
        className="absolute top-20 left-80 w-[250px] h-[250px]"
      />
      {/* this is center component where login form will be */}
      <div className="flex items-center justify-center h-screen w-screen relative">
        <div className="flex flex-col items-center">
         <h1 className="text-[#ef6c00] text-center drop-shadow-md font-semibold text-3xl">Lets Get <span className="pl-1 text-[#EC0B43] drop-shadow-md">Started!</span></h1>
          <input
            className="w-72 h-[43px] px-4 mt-3 rounded-[20px] text-sm text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white opacity-80 caret-blue-600"
            type="text"
            placeholder="Enter your email"
            name="email"
          />
          <input
            className="w-72 h-[43px] px-4 my-2 text-sm rounded-[20px] text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white opacity-80 caret-blue-600"
            type="password"
            placeholder="Enter your password"
            name="password"
          />
          <button  className="w-72 h-[43px] px-4 my-2 text-md rounded-[20px] text-white bg-[#EC0B43] "
          >Login</button>
        </div>
      </div>

      <Image
        src={"/images2/g2.png"}
        alt=""
        height={400}
        width={400}
        className="absolute bottom-20 right-80 w-[250px] h-[250px]"
      />
      <Image
        src={"/images2/the-one.png"}
        alt="Whatever"
        height={400}
        width={400}
        className="fixed bottom-[-100px] left-[-200px] w-[500px] h-[500px] opacity-70"
      />
    </div>
  );
}

export default PostingPage;
