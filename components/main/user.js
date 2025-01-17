import React from "react";

function UserName() {
  return (
    <div>
      <section class="flex justify-center items-center">
        <button
          href="/"
          class="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#eee9e9] text-white hover:-translate-y-2 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
        >
          <img src="/images/Add user.png"></img>
          <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-[#666666] group-hover:text-sm group-hover:translate-y-9 duration-700">
            UserName
          </span>
        </button>
      </section>
    </div>
  );
}

export default UserName;
