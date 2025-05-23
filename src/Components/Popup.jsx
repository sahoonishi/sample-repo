import React from 'react'
import { IoMdClose } from "react-icons/io";
const Popup = () => {
  return (
    <div className='fixed right-10 bottom-0  max-w-[350px] z-40  text-black  animate-bounce'>
      <div className='flex gap-4 justify-center items-center' >
        <div className='bg-white py-6 px-8 rounded-lg'>Hi there, I can answer your queries & schedule meetings to contact Xcelore.</div>
        <div className='rounded-full border-4 border-gray-300 p-2 bg-gradient-to-bl from-[#0087f5] to-[#e100ff]'><IoMdClose fill='white' className='text-3xl font-bold' /></div>
      </div>
    </div>
  )
}

export default Popup
