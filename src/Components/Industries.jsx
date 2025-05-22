import React from 'react'
import Slider from '../Reusable/Slider'

const Industries = () => {
  return (
    <div className=' max-w-[1800px] mx-auto mb-20'>
      <div className=' flex flex-col items-center gap-6'>
        <h1 className='text-5xl font-[100]'>
            <span className='bg-gradient-to-r from-[#FF9006] via-[#E8007D] to-[#8F00FE] font-[600] text-transparent inline-block bg-clip-text ' >Industries</span> we work with
        </h1>
        <p className='text-lg'>Tailored Solutions for Diverse Industries</p>
        <Slider/>
      </div>
    </div>
  )
}

export default Industries
