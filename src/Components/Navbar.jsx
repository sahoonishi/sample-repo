import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const ref = useRef();
  

  document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementsByTagName("nav");

  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 10) {
        // nav.classList.add("scrolled");
        ref.classList.add("scrolled")
      } else {
        nav.classList.remove("scrolled");
      }
    });
  });

  return (
    <nav ref={ref} id="nav" className="scrolled bg-black md:bg-black text-white flex items-center w-screen box-border justify-between md:justify-start z-10 gap-6  md:gap-20 px-3 py-4 md:px-16 md:py-6 fixed top-0">


      <div>
        <div className="w-full h-[30px] md:h-[50px]">
          <img src="/cropped-log-w.png" alt="" className=" object-contain h-full w-full" />
        </div>
        </div>
      


      <div className="md:flex hidden justify-end gap-10 w-full items-center text-md">
        <Link to="/">Home</Link>
        <Link to="/">Our offerings</Link>
        <Link to="/">AI Products</Link>
        <Link to="/">Accelerators</Link>
        <Link to="/">Blogs</Link>
        <Link to="/">About us</Link>
        <Link to="/carrer">Carrer</Link>
        <Link className=" bg-gradient-to-r from-[#FF9006] via-[#E8007D] to-[#8F00FE]  px-6 rounded-md py-3" to="/">Contact Us</Link>
      </div>

      <Link className="bg-gradient-to-r from-[#FF9006] via-[#E8007D] to-[#8F00FE] md:hidden px-2 rounded-md py-1"> Contact Us</Link>


    </nav>
  );
};

export default Navbar;
