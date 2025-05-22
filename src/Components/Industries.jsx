import React from 'react';
import Slider from '../Reusable/Slider';

const Industries = () => {
  return (
    <div className="max-w-[1800px] mx-auto mb-20 px-4 sm:px-6 md:px-10">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
          <span className="bg-gradient-to-r from-[#FF9006] via-[#E8007D] to-[#8F00FE] font-semibold text-transparent inline-block bg-clip-text">
            Industries
          </span>{" "}
          we work with
        </h1>
        <p className="text-base sm:text-lg">Tailored Solutions for Diverse Industries</p>
        <div className="w-full">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Industries;
