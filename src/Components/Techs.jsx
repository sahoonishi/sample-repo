import React, { useState } from "react";

const Techs = () => {

  const [show , setShow] = useState(["Untitled-1-1.webp","Untitled-2-1.png","Untitled-5.webp","Untitled-3.webp","Untitled-4.webp"]);

  const handleShow = (e)=>{
    if(e.target.id == "ai"){
      setShow(["Untitled-1-1.webp","Untitled-2-1.png","Untitled-5.webp","Untitled-3.webp","Untitled-4.webp"]);
      e.className = "border-b"
      return;
    }
        if(e.target.id == "iot"){
      setShow(["iot1.png","iot2.png","iot3.png"]);
      return;
    }
        if(e.target.id == "ar"){
      setShow(["ar1.png","ar2.png","ar3.png","ar4.png"]);
      return;
    }
        if(e.target.id == "mobile"){
      setShow(["mobile1.png","mobile2.png","mobile3.png","mobile4.webp"]);
      return;
    }
        if(e.target.id == "front"){
      setShow(["front1.webp","front2.png","angular3.webp"]);
      return;
    }
        if(e.target.id == "back"){
      setShow(["back1.webp","back2.webp","back3.webp","back4.webp"]);
      return;
    }
     if(e.target.id == "cloud"){
      setShow(["azure.webp","cloud.webp","docker.webp","aws.webp"]);
      return;
    }
  }

  return (
    <div className=" max-w-[1600px] mx-auto mb-20">
      <div className=" flex flex-col items-center gap-6">
        <h1 className="text-5xl font-[100] ">
          <span className="bg-gradient-to-r from-[#FF9006] via-[#E8007D] to-[#8F00FE] font-[600]  py-1 text-transparent inline-block bg-clip-text">
            Technology Stacks
          </span>{" "}
          
        </h1>
        <p className="text-2xl">Building Scalable Solutions with Modern Tools</p>
        <div className="flex items-center justify-center gap-20 w-full px-20">
            <div onClick={(e)=>handleShow(e)} id="ai" className="bg-amber-300 px-1 rounded-4xl">AI/ML</div>
            <div onClick={(e)=>handleShow(e)} id="iot" className="bg-amber-300 px-1 rounded-4xl">IOT</div>
            <div onClick={(e)=>handleShow(e)} id="ar" className="bg-amber-300 px-1 rounded-4xl">AR</div>
            <div onClick={(e)=>handleShow(e)} id="mobile" className="bg-amber-300 px-1 rounded-4xl">Mobile Application</div>
            <div onClick={(e)=>handleShow(e)} id="front" className="bg-amber-300 px-1 rounded-4xl">Frontend & web</div>
            <div onClick={(e)=>handleShow(e)} id="back" className="bg-amber-300 px-1 rounded-4xl">Backend</div>
            <div onClick={(e)=>handleShow(e)} id="cloud" className="bg-amber-300 px-1 rounded-4xl">Cloud & DevOps</div>
        </div>
        <div className=" grid grid-flow-col justify-items-center gap-8 w-[80%] h-auto">
          {/* <p>Pytorch</p>
          <p>OpenAI</p>
          <p>Tensorflow</p>
          <p>Transformers</p>
          <p>LLM</p> */}
          {
            show && show?.map((item,index)=>(
              <div className=" h-12 max-h-20 px-10 " key={index}>
                <img src={`./Techs/${item}`} alt="" className="h-full w-full object-contain" />
              </div>
            ))
          }
        </div>

      </div>
    </div>
  );
};

export default Techs;
