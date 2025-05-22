import React from "react";

const Footer = () => {
  return (
    <div className="text-white w-full flex flex-col py-20 px-6 sm:px-10 md:px-20 gap-16 bg-black">

      {/* Top Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-4">
        {/* Column 1 */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="font-bold text-lg mb-4">Services</p>
          <p>Ai/Ml Engineering</p>
          <p>Large Language Models</p>
          <p>Computer Vision</p>
          <p>Advance Analytics</p>
          <p>Consumer Internet</p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="font-bold text-lg mb-4">Industries</p>
          <p>Healthcare</p>
          <p>Manufacturing</p>
          <p>Education Tech</p>
          <p>Retail & E-commerce</p>
          <p>Aviation</p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="font-bold text-lg mb-4">AI Products</p>
          <p>Exei</p>
          <p>Xcelight</p>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="font-bold text-lg mb-4">About</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blogs</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 px-0">
        <p className="text-center sm:text-left">© Xcelore 2025. All rights reserved</p>
        <p className="text-center sm:text-right">Social icons</p>
      </div>
    </div>
  );
};

export default Footer;
