import React from "react";

const Cards = () => {
  return (
    <div className="text-white w-full bg-black px-4 sm:px-8 md:px-12 lg:px-20 py-20 flex flex-col items-center gap-10">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
        Powered by AI, we Build Strong Foundations for Intelligent Solutions.
      </h2>

      <p className="text-center text-sm sm:text-base md:text-xl max-w-[90%] md:max-w-[60%]">
        At Xcelore, our expertise spans the entire product lifecycle, from concept to deployment.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-[#1F1B29] border border-white rounded-xl flex flex-col p-4 sm:p-6 lg:p-8 gap-6"
          >
            <img
              src="https://xcelore.com/wp-content/uploads/2025/01/Icon1.png.webp"
              alt="Icon"
              className="w-12 h-12"
            />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">AI/ML Engineering</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, repellat?
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
