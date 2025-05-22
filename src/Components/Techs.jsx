import React from "react";

const Techs = () => {
  return (
    <div className=" max-w-[1600px] mx-auto mb-20">
      <div className=" flex flex-col items-center gap-6">
        <h1 className="text-5xl font-[100] ">
          <span className="bg-gradient-to-r from-[#FF9006] via-[#E8007D] to-[#8F00FE] font-[600]  py-1 text-transparent inline-block bg-clip-text">
            Technology Stacks
          </span>{" "}
          
        </h1>
        <p className="text-lg">Building Scalable Solutions with Modern Tools</p>
        <div className="flex items-center justify-around w-full px-20">
            <div>AI/ML</div>
            <div>IOT</div>
            <div>AR</div>
            <div>Mobile Application</div>
            <div>Frontend & web</div>
            <div>Backend</div>
            <div>Cloud & DevOps</div>
        </div>
        <div className="border border-black">
          <p>Pytorch</p>
          <p>OpenAI</p>
          <p>Tensorflow</p>
          <p>Transformers</p>
          <p>LLM</p>
        </div>

      </div>
    </div>
  );
};

export default Techs;
