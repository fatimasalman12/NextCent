import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
// import Button from "../ui/button";

function Modal(props) {
  const [cardDetails, setCardDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const id = props.cardId;
  const router = useRouter();
  useEffect(() => {
    if (props.isOpen && props.cardId) {
      fetch("/api/blogs/" + id)
        .then((res) => res.json())
        .then((data) => {
          setCardDetails(data.BlogObj);
          setLoading(false);
        })
        .catch((error) =>
          console.error("Failed to fetch card details:", error)
        );
    }
  }, [props.isOpen, props.cardId]);

   function ViewBlog(){
    router.push("/login/homepage/"+id); 
   }
  if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-[#f1e9e9] rounded-lg p-6 max-w-[700px] mx-auto shadow-lg relative">
        <button
          onClick={props.onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <Image
            className="bg-[#d67070] rounded-md"
            src={"/images/X.png"}
            alt=""
            height={20}
            width={20}
          />
        </button>
        {cardDetails ? (
          <>
            <h2 className="text-lg text-[#424242] font-bold mb-2">
              {cardDetails.title}
            </h2>
            <p className="text-sm text-gray-700">{cardDetails.content}</p>
            <div className="flex">
              <div className="border rounded-lg bg-[#C1E1C1] px-2 py-1 m-2">
                <p className=" text-gray-900 text-sm">
                  Author: {cardDetails.author}
                </p>
              </div>
              <div className="border rounded-lg bg-[rgb(221,183,210)] px-2 py-1 m-2">
                <p className="text-gray-900 text-sm">
                  Published: {cardDetails.date}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap ml-1">
              {cardDetails.tags.map((tag, index) => (
                <span
                  key={index}
                  className="mx-1 my-1 px-2 py-1 text-[12px] bg-[#d9dfe3] max-w-max rounded font-semibold text-[#7281a3]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="ml-2 mt-3">
                <button onClick={ViewBlog} className="px-2 py-1 bg-[#e5cb73] rounded-md text-sm text-white" >
                  Explore </button>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Modal;
