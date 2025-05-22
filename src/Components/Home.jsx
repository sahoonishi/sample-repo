import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Cards from "./Cards";
import { IoMdClose } from "react-icons/io";
import Products from "./Products";
import Industries from "./Industries";
import Companies from "./Companies";
import Techs from "./Techs";
import Footer from "./Footer";

const Home = () => {
  const [on, setOn] = useState(false);

  window.addEventListener("click", function (e) {
    if (e.target.id !== "popup") {
      setOn(false);
    }
  });

  useEffect(() => {
    setTimeout(() => {
      setOn(!on);
    }, 3000);
  }, []);

  return (
    <div className="min-h-screen w-screen ">
      <div
        className={`fixed w-full  h-full flex justify-center transition-all items-center top-0 ${
          on ? "bg-black/80 z-10" : "-z-40 hidden"
        } `}
      >
        <div
          id="popup"
          className={`bg-primary text-6xl rounded-2xl relative p-8 ${
            on ? "" : ""
          } `}
        >
          Hello world
          <div
            onClick={() => setOn(false)}
            className="absolute -right-12 rounded-full -top-12 bg-white text-black p-3"
          >
            <IoMdClose
              fill="black"
              className="text-3xl hover:animate-spin font-bold"
            />
          </div>
        </div>
      </div>
      <Hero />
      <div className="w-screen md:-mt-12 -mt-32 flex justify-between">
        <div className=" w-full md:pl-40 pl-6 pt-32 mt-16 ">
          <div className="md:w-[50%] w-[99%] tracking-widest flex flex-col items-center gap-8">
            <div className="md:text-6xl text-2xl font-[200]">
              We are a dynamic team of <br />{" "}
              <span className="md:text-7xl text-2xl font-medium ">
                Tech Innovators
              </span>
            </div>
            <img
              src="https://xcelore.com/wp-content/uploads/2025/01/Vector-3.png.webp"
              alt=""
            />
            <p className="md:text-3xl text-sm font-[300] leading-snug">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repell
              vitae excepturi natus, delectus eos dolor voluptatem ratione
              dolore, cupiditate fugit nostrum! Repellat, facere.
            </p>
          </div>
        </div>

        <div className="h-[80vh] flex justify-end w-fit ">
          <img
            src="/Untitled-2.webp"
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <Cards />
      <Products />
      <Industries />
      <Companies />
      {/* <Techs/> */}
      <Footer />
    </div>
  );
};

export default Home;
