import React from "react";
import Image from "next/image";

function UserComponent() {
  return (
    <div className="bg-white flex flex-col text-gray-700 p-5 justify-center items-center h-screen">
      <div>
        <div className="mx-3 mb-2">
          <h1 className="font-semibold text-[25px] mt-2">Users</h1>
        </div>
        <div className="flex">
          <div className="mx-3">
            <div className="relative w-[270px]">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Image
                  src="/images/Search.png"
                  alt="search"
                  width={20}
                  height={20}
                />
              </div>
              <input
                type="text"
                placeholder="Search users"
                className="w-full h-12 pl-10 pr-4 text-sm text-black placeholder-gray-500 border border-gray-300 rounded-sm bg-white focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
              />
            </div>
          </div>
          <div className="">
            <ul className="flex space-x-2">
              <div className="items-center bg-white hover:bg-blue-400 hover:text-white text-black p-3 rounded-lg">
                <li className="text-sm">Reputation</li>
              </div>
              <div className="items-center bg-white hover:bg-blue-400 hover:text-white text-black p-3 rounded-lg">
                <li className="text-sm">New users</li>
              </div>
              <div className="items-center bg-white hover:bg-blue-400 hover:text-white text-black p-3 rounded-lg">
                <li className="text-sm">Voters</li>
              </div>
              <div className="items-center bg-white hover:bg-blue-400 hover:text-white text-black p-3 rounded-lg">
                <li className="text-sm">Editors</li>
              </div>
              <div className="items-center bg-white hover:bg-blue-400 hover:text-white text-black p-3 rounded-lg">
                <li className="text-sm">Moderators</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto p-4">
          <div className="hover:border-blue-700">
            <div className="flex p-3 h-[170px] w-[280px] bg-white mx-2 rounded-lg hover:drop-shadow-md hover:border border-blue-400">
              <Image
                className="h-[90px] w-[90px] mt-4 ml-2"
                src="/images2/i1.png"
                alt="img1"
                width={50}
                height={50}
              />
              <div>
                <h1 className="text-black font-semibold text-lg mt-10 ml-3">
                  Lelah Nichols
                </h1>
                <p className="text-sm text-gray-700 ml-3">Troy, MI</p>
                <div className="flex mt-2">
                  <p className="mx-1 my-1 px-2 py-1 text-[12px] bg-[#eceff1] max-w-max rounded-xl text-[#6e87c2]">
                    clothes
                  </p>
                  <p className="mx-1 my-1 px-2 py-1 text-[12px] bg-[#eceff1] max-w-max rounded-xl text-[#6e87c2]">
                    stem
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hover:border-blue-700">
            <div className="flex p-3 h-[170px] w-[280px] bg-white mx-2 rounded-lg hover:drop-shadow-md hover:border border-blue-400">
              <Image
                className="h-[90px] w-[90px] mt-4 ml-2"
                src="/images2/i2.png"
                alt="img1"
                width={50}
                height={50}
              />
              <div>
                <h1 className="text-black font-semibold text-lg mt-10 ml-3">
                  Jesus Weiss
                </h1>
                <p className="text-sm text-gray-700 ml-3">Fort Worth, TX</p>
                <div className="flex mt-2">
                  <p className="mx-1 my-1 px-2 py-1 text-[12px] bg-[#eceff1] max-w-max rounded-xl text-[#6e87c2]">
                    headset
                  </p>
                  <p className="mx-1 my-1 px-2 py-1 text-[12px] bg-[#eceff1] max-w-max rounded-xl text-[#6e87c2]">
                    gadget
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hover:border-blue-700">
            <div className="flex p-3 h-[170px] w-[280px] bg-white mx-2 rounded-lg hover:drop-shadow-md hover:border border-blue-400">
              <Image
                className="h-[90px] w-[90px] mt-4 ml-2"
                src="/images2/i3.png"
                alt="img1"
                width={50}
                height={50}
              />
              <div>
                <h1 className="text-black font-semibold text-lg mt-10 ml-3">
                  Lelah Nichols
                </h1>
                <p className="text-sm text-gray-700 ml-3">Troy, MI</p>
                <div className="flex mt-2">
                  <p className="mx-1 my-1 px-2 py-1 text-[12px] bg-[#eceff1] max-w-max rounded-xl text-[#6e87c2]">
                    clothes
                  </p>
                  <p className="mx-1 my-1 px-2 py-1 text-[12px] bg-[#eceff1] max-w-max rounded-xl text-[#6e87c2]">
                    stem
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hover:border-blue-700">
            <div className="flex p-3 h-[170px] w-[280px] bg-white mx-2 rounded-lg hover:drop-shadow-md hover:border border-blue-400">
              <Image
                className="h-[90px] w-[90px] mt-4 ml-2"
                src="/images2/i4.png"
                alt="img1"
                width={50}
                height={50}
              />
              <div>
                <h1 className="text-black font-semibold text-lg mt-10 ml-3">
                  Lelah Nichols
                </h1>
                <p className="text-sm text-gray-700 ml-3">Troy, MI</p>
                <div className="flex mt-2">
                  <p className="mx-1 my-1 px-2 py-1 text-[12px] bg-[#eceff1] max-w-max rounded-xl text-[#6e87c2]">
                    clothes
                  </p>
                  <p className="mx-1 my-1 px-2 py-1 text-[12px] bg-[#eceff1] max-w-max rounded-xl text-[#6e87c2]">
                    stem
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hover:border-blue-700">
            <div className="flex p-3 h-[170px] w-[280px] bg-white mx-2 rounded-lg hover:drop-shadow-md hover:border border-blue-400">
              <Image
                className="h-[90px] w-[90px] mt-4 ml-2"
                src="/images2/i5.png"
                alt="img1"
                width={50}
                height={50}
              />
              <div>
                <h1 className="text-black font-semibold text-lg mt-10 ml-3">
                  Lelah Nichols
                </h1>
                <p className="text-sm text-gray-700 ml-3">Troy, MI</p>
                <div className="flex mt-2">
                  <p className="mx-1 my-1 px-2 py-1 text-[12px] bg-[#eceff1] max-w-max rounded-xl text-[#6e87c2]">
                    clothes
                  </p>
                  <p className="mx-1 my-1 px-2 py-1 text-[12px] bg-[#eceff1] max-w-max rounded-xl text-[#6e87c2]">
                    stem
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hover:border-blue-700">
            <div className="flex p-3 h-[170px] w-[280px] bg-white mx-2 rounded-lg hover:drop-shadow-md hover:border border-blue-400">
              <Image
                className="h-[90px] w-[90px] mt-4 ml-2"
                src="/images2/i6.png"
                alt="img1"
                width={50}
                height={50}
              />
              <div>
                <h1 className="text-black font-semibold text-lg mt-10 ml-3">
                  Lelah Nichols
                </h1>
                <p className="text-sm text-gray-700 ml-3">Troy, MI</p>
                <div className="flex mt-2">
                  <p className="mx-1 my-1 px-2 py-1 text-[12px] bg-[#eceff1] max-w-max rounded-xl text-[#6e87c2]">
                    clothes
                  </p>
                  <p className="mx-1 my-1 px-2 py-1 text-[12px] bg-[#eceff1] max-w-max rounded-xl text-[#6e87c2]">
                    stem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserComponent;
