import React from "react";

const Products = () => {
  return (
    <div className="text-black h-auto mb-20 w-full bg-white px-4 sm:px-6 md:px-12 py-16 sm:py-24 flex flex-col gap-10 items-center">
      <div className="text-2xl sm:text-4xl md:text-5xl text-center sm:text-left mb-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
        <div className="border-l-4 h-10 w-[6px] bg-gradient-to-b from-[#FF9006] via-[#E8007D] to-[#8F00FE]" />
        <p>Our Unique AI Products for Real-World Challenges</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 w-full max-w-7xl">
        {/* Left Content */}
        <div className="flex flex-col gap-6 items-start w-full lg:w-1/2 px-2 sm:px-4">
          <div className="w-24 sm:w-32">
            <img
              src="/Xcelight_black.webp"
              alt="Xcelight logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold">AI Agent</h2>
          <ul className="flex flex-col gap-4 mt-4">
            {Array(3).fill().map((_, idx) => (
              <li key={idx} className="flex items-start gap-3 text-base sm:text-lg">
                <div className="w-5 mt-1">
                  <img
                    src="/Vector2.webp"
                    alt="Bullet point"
                    className="h-full w-full object-contain"
                  />
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, reiciendis.
                </p>
              </li>
            ))}
          </ul>
          <button className="mt-4 px-4 py-2 border border-black rounded-md text-sm sm:text-base">
            Explore Excelight
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 max-w-md hover:scale-95 transition-transform duration-300 px-4 sm:px-0">
          <img
            src="/Frame-1000004792.webp"
            alt="Product visual"
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
