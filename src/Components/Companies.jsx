import React from "react";

const Companies = () => {
  return (
    <div className="max-w-[1600px] mx-auto mb-20 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-light leading-tight">
          <span className="bg-gradient-to-r from-[#FF9006] via-[#E8007D] to-[#8F00FE] font-semibold text-transparent inline-block bg-clip-text">
            Trusted Partners
          </span>{" "}
          Driving Innovation with Us
        </h1>
        <p className="text-base sm:text-lg text-center">
          Tailored Solutions for Diverse Industries
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 py-16 sm:py-24 md:py-28 w-full justify-items-center">
          {[
            "6a8a3c08d080adfdcf6e353c41a92566.jpg.webp",
            "74e3f6b42f672775f7d5097d0af0f780.png.webp",
            "344bb2c378823d95590c3cdedf8308bd-2.png.webp",
            "b31049edbd903af16808215306aaa5ea.png.webp",
            "e699409bab49a662dde3cad8cd3ab667.jpg.webp",
            "image-9178.png.webp",
            "image-9180.png.webp",
            "image-9181.png.webp",
            "image-9186.png.webp",
            "image-9187-150x99.png.webp",
            "Property-1image-9153.png.webp",
            "Property-1image-9154.png.webp",
            "Property-1India-Mart-2.png.webp",
            "STERIS-Logo-Horizontal-300dpi.png.webp",
            "VAIDIK-EDUSERVICES-PRIVATE-LIMITED_b_cv-01-2.png.webp",
          ].map((file, i) => (
            <div
              key={i}
              className="shadow-lg border border-gray-300 grayscale hover:grayscale-0 transition-all duration-200 rounded-md px-6 md:px-12 py-6 w-44 sm:w-48 md:w-60 h-36 sm:h-40"
            >
              <img
                src={`/companies/${file}`}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
