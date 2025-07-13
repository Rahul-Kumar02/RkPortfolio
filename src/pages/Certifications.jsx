import React from "react";
import html from "../../public/html-certificate.png";
import css from "../../public/css-certificate.png";

function Certifications() {
  return (
  <div className="min-h-screen md:min-h-screen lg:min-h-screen flex items-center justify-center flex-col gap-20 px-4 py-20 lg:px-20">
    <h1 className="text-2xl w-full">Certifications</h1>
      <div className="w-[100%] h-[100%]  flex flex-col md:flex-row md:flex lg:flex lg:flex-row gap-5 items-center justify-center">
      <div className="w-[300px] h-[200px] shadow-2xl rounded-2xl">
        <img
          src={html}
          alt="html_certifictions"
          className="w-[100%] h-[100%] rounded-2xl"
        />
      </div>
      <div className="w-[300px] h-[200px] shadow-2xl rounded-2xl">
        <img src={css} alt="css_certifictions" className="w-[100%] h-[100%] rounded-2xl" />
      </div>
    </div>
  </div>
  );
}

export default Certifications;
