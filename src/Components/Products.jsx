import React from "react";

const Products = () => {
  return (
    <div className="text-black h-auto mb-20 w-screen bg-white px-12 py-32 flex gap-6 flex-col items-center">
      <div className="text-black text-5xl mb-20 flex items-center gap-6 ">
        <div className="border-l-4  h-[45px] w-[9px] "></div>
        Our Unique AI products for Real-World Challenges
      </div>
      <div className="flex justify-evenly items-center">
        <div className="flex flex-col gap-4 items-start">
          <div className="w-[20%]">
            <img src="/Xcelight_black.webp" alt="" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl">AI Agent</h1>
          <ul className="mt-6">
            <li className="text-xl items-start gap-3 flex">
              <div className="w-[2%] mt-2 "><img src="/Vector2.webp" alt="" className="h-full w-full object-contain" /></div>
              <p className=""> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
              reiciendis.</p>
              
            </li>
            <li className="text-xl items-start gap-3 flex">
              <div className="w-[2%] mt-2 "><img src="/Vector2.webp" alt="" className="h-full w-full object-contain" /></div>
              <p className=""> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
              reiciendis.</p>
              
            </li>
            <li className="text-xl items-start gap-3 flex">
              <div className="w-[2%] mt-2 "><img src="/Vector2.webp" alt="" className="h-full w-full object-contain" /></div>
              <p className=""> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
              reiciendis.</p>
              
            </li>
          </ul>

          <button className="p-3 border border-black rounded-md" >Explore Excelight</button>
        </div>

        <div className="h-full w-[40%] hover:scale-90 transition-all duration-300">
          <img
            src="/Frame-1000004792.webp"
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
