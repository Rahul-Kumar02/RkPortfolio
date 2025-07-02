import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

import { useTheme } from "../context/theme/useTheme";
function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const[isOpen, setIsOpen] = useState(false);
  return (
    <header className="h-[60px] bg-black text-white fixed left-0 right-0 lg:w-[100%] md:w-[100%] w-[100%] ">
      <nav className="flex justify-between items-center h-[60px] px-4  lg:px-20">
        <div className="text-[20px] font-semibold lg:text-[20px] md:text-[20px]">Portfolio</div>
        {/* desktop */}
        <ul className="lg:flex md:flex gap-3 items-center hidden">
          <li>
            <NavLink to="/" className={({isActive}) => `${isActive ? 'bg-violet-500 p-1 px-3 shadow-xl rounded-[50px]' : 'bg-none'}`}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({isActive}) => `${isActive ? 'bg-violet-500 p-1 px-3 shadow-xl rounded-[50px]' : 'bg-none'}`}>Skills</NavLink>
          </li>
          <li>
            <NavLink to="/certifications" className={({isActive}) => `${isActive ? 'bg-violet-500 p-1 px-3 shadow-xl rounded-[50px]' : 'bg-none'}`}>Certifications</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({isActive}) => `${isActive ? 'bg-violet-500 p-1 px-3 shadow-xl rounded-[50px]' : 'bg-none'}`}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive}) => `${isActive ? 'bg-violet-500 p-1 px-3 rounded-[50px] shadow-xl' : 'bg-none'}`}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive}) => `${isActive ? 'bg-violet-500 p-1 px-3 rounded-[50px]' : 'bg-none'}`}>Contact</NavLink>
          </li>
          
            <button onClick={toggleTheme} className="cursor-pointer text-[20px]">
                {theme === "dark" ? <IoMdSunny /> : <FaMoon />}
            </button>
           
        </ul>

    {/* menubar icon */}
        <div className="md:hidden z-50">
        {
          isOpen ?   <MdClose onClick={() => setIsOpen(false)}  className="text-3xl cursor-pointer"/> : <MdMenu className="text-3xl cursor-pointer " onClick={() => setIsOpen(true)}/>

        }

        </div>
 
{/* mobile menu */}
         <ul className={`lg:hideen md:hidden gap-5 items-center absolute md:relative left-0 right-0 bg- flex flex-col top-0 py-15 bg-black ${isOpen ? 'block' : 'hidden'}`}>
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
          </li>
          <li>
            <NavLink to="/certifications" onClick={() => setIsOpen(false)}>Certifications</NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </li>
          
            <button onClick={toggleTheme} className="cursor-pointer text-[20px]">
                {theme === "dark" ? <IoMdSunny className="bg-black" onClick={() => setIsOpen(false)}/> : <FaMoon className="" onClick={() => setIsOpen(false)}/>}
            </button>
           
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
