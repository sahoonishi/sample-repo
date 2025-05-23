import React from "react";

const Hero = () => {
  return (
    <div className="relative h-full w-[100vw] no-scrollbar">
      <div className="absolute w-full h-full bg-red-900/20"></div>
      <div className="absolute w-full h-full bg-black/40"></div>
      <div className="h-screen">
        <img
          className="object-cover object-top h-full w-full"
          src="/BG.webp"
          alt=""
        />
      </div>

      {/* Text container */}
      <div
        className="absolute max-w-[80%] md:max-w-[65%] top-52 left-6 md:top-52 md:left-40 text-white text-3xl md:text-5xl
                      sm:top-40 sm:left-4 sm:text-2xl
                      xs:max-w-[90%] xs:left-2 xs:top-32 xs:text-xl"
      >
        <p className="md:leading-16 md:tracking-wide font-light">
          Your Trusted{" "}
          <span className="font-medium">
            AI Development Company <br />
          </span>{" "}
          for pioneering Innovation
        </p>
        <p className="text-sm md:text-2xl mt-4 font-light xs:text-base">
          We empower businesses to create, state of the art digital products and
          platforms incorporating Artificial Intelligence, LLMs, Machine
          learning & new age technologies.
        </p>
        <button className="bg-gradient-to-r from-[#FF9006] via-[#E8007D] to-[#8F00FE] inline-block bg-clip-text text-lg mt-6 sm:text-base xs:text-sm xs:mt-4">
          Get in touch
        </button>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 w-full text-white">
        <div
          className="bg-black/45 flex items-start py-1 justify-between text-lg lg:text-2xl xl:text-3xl px-3 md:px-6
                        flex-wrap sm:gap-4 sm:justify-evenly sm:text-lg"
        >
          <div className="flex gap-1 flex-col max-w-[25%] items-center sm:max-w-[45%] xs:max-w-[90%]">
            <img
            
              src="https://xcelore.com/wp-content/uploads/2025/01/icon.png.webp"
              alt=""
              className="md:size-12 size-6"
            />
            <p className="md:font-[700] font-[300]">15+</p>
            <p className="text-xs md:text-xl font-[300] text-center text-gray-400">
              Global Clients
            </p>
          </div>
          <div className="flex flex-col gap-2 max-w-[25%] items-center sm:max-w-[45%] xs:max-w-[90%]">
            <img
              src="https://xcelore.com/wp-content/uploads/2025/01/Layer_1.png.webp"
              alt=""
              className="md:size-12 size-6"
            />
            <p className="md:font-[700] font-[300]">25+</p>
            <p className="text-xs md:text-xl font-[300] text-center text-gray-400">
              Successful Projects
            </p>
          </div>
          <div className="flex flex-col gap-2 max-w-[25%] text-center items-center sm:max-w-[45%] xs:max-w-[90%]">
            <img
              src="https://xcelore.com/wp-content/uploads/2025/01/Layer_x0020_1.png.webp"
              alt=""
              className="md:size-12 size-6"
            />
            <p className="md:font-[700] font-[300]">50+</p>
            <p className="text-xs line-clamp-2 md:text-xl font-[300] text-center text-gray-400">
              Years of Combined Leadership experience
            </p>
          </div>
          <div className="flex flex-col gap-2 max-w-[25%] items-center sm:max-w-[45%] xs:max-w-[90%]">
            <img
              src="https://xcelore.com/wp-content/uploads/2025/01/Vector4.png.webp"
              alt=""
              className="md:size-12 size-6"
            />
            <p className="md:font-[700] font-[300]">125+</p>
            <p className="text-xs md:text-xl text-center font-[300] text-gray-400">
              Team Members
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
