import React from "react";

const Footer = () => {
  return (
    <div className="text-white w-full flex flex-col py-32 gap-20 mx-auto bg-black">

      <div className="w-full flex justify-evenly gap-2">
        <div className="flex-col gap-4 flex items-center">
          <p className="bold text-lg mb-8">Services</p>
          <p>Ai/Ml Engineering</p>
          <p>Large Language Models</p>
          <p>Computer Vision</p>
          <p>Advance Analytics</p>
          <p>Consumer Internet</p>
        </div>
        <div className="flex-col gap-4 flex items-center">
          <p className="bold text-lg mb-8">Industries</p>
          <p>Healthcare</p>
          <p>Manufacturing</p>
          <p>Education Tech</p>
          <p>Retail & E-commerce</p>
          <p>Aviation</p>
        </div>
        <div className="flex-col gap-4 flex items-center">
          <p className="bold text-lg mb-8">AI Products</p>
          <p>Exei</p>
          <p>Xcelight</p>
        </div>
                <div className="flex-col gap-4 flex items-center">
          <p className="bold text-lg mb-8">About</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Blogs</p>
        </div>
      </div>

      <div className="w-full flex justify-between px-40 mx-auto">
        <p>© Xcelore 2025. All rights reserved</p>
        <p>Social icons</p>
      </div>

    </div>
  );
};

export default Footer;
