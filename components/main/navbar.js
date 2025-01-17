import React from "react";
import Heading from "./heading";
import Image from "next/image";
import { useRouter } from "next/router";
import UserName from "./user";

function HeaderComponent() {
  
  const router = useRouter();
  function Homepage(){
    router.push("/login/homepage"); 
  }
  function MyPostsPage(){
    router.push("/login/homepage"); // will change it later to the correct path 
  }
  function ExplorePage(){
    router.push("/login/homepage"); 
  }
  return (
    <div className="flex">
      <div>
        <Heading />
      </div>
      <div className="flex justify-center w-[150px] h-[40px] border rounded-lg drop-shadow-xl mt-[25px] ml-[440px] bg-[#eee9e9]">
        <ul className="flex items-center">
          <div className="p-2 hover:scale-110 hover:shadow-lg hover:rounded-lg hover:bg-[#d9dfe3] transition-transform duration-300">
            <li className="mx-2 w-[17px] h-[17px]" onClick={Homepage}
            ><Image src={"/images/Home.png"} alt="home" height={20} width={20} /></li>
          </div>
          <div className="p-2 hover:scale-110 hover:shadow-lg hover:rounded-lg hover:bg-[#d9dfe3] transition-transform duration-300">
            <li className="mx-2 w-[15px] h-[15px]" onClick={MyPostsPage}><Image src={"/images/Document 2.png"} alt="document" height={16} width={16} /></li>
          </div>
          <div className="p-2 hover:scale-110 hover:shadow-lg hover:rounded-lg hover:bg-[#d9dfe3] transition-transform duration-300">
            <li className="mx-2 w-[17px] h-[17px]" onClick={ExplorePage}><Image src={"/images/Category.png"} alt="category" height={20} width={20} /></li>
          </div>
        </ul>
      </div>
      <div className="ml-[500px] mt-[25px]">
        <UserName/>
      </div>
    </div>
  );
}

export default HeaderComponent;
