import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Skills() {
  return (
    <div className="min-h-screen md:min-h-screen lg:min-h-screen lg:px-20 px-4 flex items-center justify-center flex-col gap-10 py-20">
      <h1 className="text-2xl text-white w-full">Skills</h1>
      <div className="flex gap-4 justify-center items-center flex-wrap py-10">
        <div className="flex flex-col items-center gap-2">
          <FaHtml5 className="text-9xl text-red-600 skill shadow-xl hover:text-red-800" />
          <h2 className="text-white">html</h2>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IoLogoCss3 className="skill text-9xl text-blue-600 hover:text-blue-800" />
         <h2 className="text-white"> css</h2>
        </div>
        <div className="flex flex-col items-center gap-2">
          <RiTailwindCssFill className="skill text-9xl text-sky-600 hover:text-sky-800" />
          <h2 className="text-white">tailwind css</h2>
        </div>
         <div className="flex flex-col items-center gap-2">
          <FaReact className="text-9xl skill text-sky-400 hover:text-sky-600" />
           <h2 className="text-white"> React</h2>
        </div>
         <div className="flex flex-col items-center gap-2">
          <IoLogoJavascript  className="skill text-9xl text-yellow-500 hover:text-yellow-600" />
         <h2 className="text-white"> JavaScript</h2>
        </div>
        
         <div className="flex flex-col items-center gap-2">
          <FaGitAlt  className="skill text-9xl text-red-500 hover:text-red-700" />
         <h2 className="text-white"> git</h2>
        </div>
         <div className="flex flex-col items-center gap-2">
          <FaGithubSquare  className="skill text-9xl text-white hover:text-gray-300" />
         <h2 className="text-white"> git hub</h2>
        </div>
      </div>
    </div>
  );
}

export default Skills;
