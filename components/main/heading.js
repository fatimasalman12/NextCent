import React from 'react'
import Image from 'next/image'

function Heading() {
  return (
    <div className='p-3'>
      <h1 className="flex text-white drop-shadow-xl font-bold text-lg px-3 py-3 space-x-2"><Image className="mx-2 w-[25px] h-[20px]" src="/images/icon.png" width={10} height={10} alt="logo"/> NextCent </h1>
    </div>
  )
}

export default Heading