import React from "react";
import user from '../../public/user.jpg'
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="lg:min-h-screen md:min-h-screen md:w-full lg:w-full min-h-screen w-full lg:px-20 px-4 lg:flex flex items-center  md:flex-row lg:flex-row flex-col lg:items-center md:items-center lg:justify-between md:gap-4 lg:gap-4 gap-4 justify-center md:justify-between py-20">

      <div className="w-full flex flex-col gap-6 text-white  md:h-[460px] lg:h-[450px] justify-center  order-2 lg:order-0 md:order-0 md:w-full lg:w-full ">
        <h1 className="w-[100%] text-[28px] font-semibold md:text-[27px] md:w-full lg:w-full lg:text-[44px] ">
          Hi, I'm Rahul Kumar Aspiring Frontend Developer
        </h1>
        <h2 className=" text-[17px] font-semibold  w-[100%] lg:text-[20px] md:text-[20px] md:w-full lg:w-[600px] ">
          I build responsive and user-friendly webistes using React.Js and modern
          web technologies.
        </h2>
        <p className="text-[14px] md:w-full lg:w-[550px] text-justify lg:text-[14px] md:text-[17px] ">
          I'm a self-motivated Frontend Developer with a strong foundation in
          HTML, CSS, JavaScript and React..js Currently seeking a frontend
          internship where i can contrubute and grow while learning from
          real-world projects.
        </p>

        <div className="flex w-[100%] md:w-[276px] lg:w-[276px] gap-3 justify-between md:flex md:gap-4 ">
            <a href="https://drive.google.com/file/d/12-4m3Eo0Y63kEHgJuk1VCjABzwrxni5t/view?usp=drive_link" target="_blank" rel="noorpener noreferrer"> 
          <button className=" btn text-white p-2 px-4 rounded-md cursor-pointer text-[17px] ">
         View Resume
          </button>
          </a>
          <button className="btn text-white p-2 px-4 rounded-md cursor-pointer text-[17px] ">
            <Link to='/contact'> Contact Me</Link>
           
          </button>
        </div>
      </div>

      
        {/* <div className="bg-red-500"> */}
          <div className=" mt-15 md:mt-0 lg:mt-0
         h-[300px] w-[300px] md:w-[350px] md:h-[250px] lg:w-[440px] rounded-[50%] lg:h-[350px] bg-white shadow-xl p-5 overflow-hidden img">
          <img src={user} alt="" className="w-[100%] h-[100%] object-cover  rounded-[50%]"/>
        </div>
        </div>
      // </div>
    
  );
}

export default Home;
