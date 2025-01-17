import React from 'react'

function Input(props) {
  return (
   <>
   <input
   type= {props.type}
   className="block ml-[27px] w-72 h-[43px] px-4 my-3 text-sm text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
   name={props.name}
   placeholder={props.placeholder}
   ref={props.ref}/>
   </>
  )
}

export default Input

