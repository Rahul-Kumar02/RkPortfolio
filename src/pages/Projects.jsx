import React from 'react'
import todo from '../../public/todo.jpg'
import calculator from '../../public/calculator.png'
import weather from '../../public/weather.png'
import movie from '../../public/movie.png'

function Projects() {
  return (
    <div className=' min-h-screen w-full md:min-h-screen md:w-full lg:min-h-screen lg:w-full items-center justify-center flex flex-col py-20 gap-10 md:py-20 lg:py-20 px-4 lg:px-20'>
        <h1 className='text-2xl w-full'>Projects</h1>
       <div className='flex gap-5 flex-wrap items-center justify-center'>
         <div className='w-[250px] h-[580px] bg-white flex flex-col p-3 gap-3 items-center shadow-2xl rounded-[10px] cursor-pointer'>
           <div className='h-[100%] w-[100%]'>
             <img src={todo} alt="" className=' h-[100%] w-[100%] shadow-xl' />
           </div>

            <h1 className=' w-[100%] text-[20px]'>Todo App</h1>
            <div className='flex items-center justify-between w-[100%]'>
              <button className='bg-black px-2 text-white p-1 cursor-pointer rounded-[6px]'>
               <a href="https://interntodoapp.vercel.app/" target='_blank'> View Project</a>
                </button>
              <button className='bg-black p-1 text-white px-2 cursor-pointer rounded-[6px]'>
                <a href="https://github.com/Rahul-Kumar02/todoApp" target='_blank'>View Code</a>
              </button>
            </div>
        </div>

         <div className='w-[250px] h-[580px] bg-white flex flex-col  gap-3 items-center shadow-2xl rounded-[10px] p-3 cursor-pointer'>
           <div className='h-[100%] w-[100%]'>
             <img src={calculator} alt="calculator-app" className=' h-[100%] w-[100%] shadow-xl' />
           </div>
            <h1 className='w-[100%] text-[20px]'>Calculatore App</h1>
              <div className='flex items-center justify-between w-[100%]'>
              <button className='rounded-[6px] bg-black px-2 text-white p-1 cursor-pointer
              '>
                <a href="https://iterncalculatorpp.vercel.app/" target='_blank'>View Project</a>
              </button>
              <button className='rounded-[6px] bg-black p-1 text-white px-2 cursor-pointer'>
                <a href="https://github.com/Rahul-Kumar02/calculatorApp" target='_blank'>View Code</a>
              </button>
            </div>
        </div>

         <div className='w-[250px] h-[580px] bg-white flex flex-col  gap-3 items-center shadow-2xl rounded-[10px] p-3 cursor-pointer'>
           <div className='h-[100%] w-[100%]'>
             <img src={weather} alt="weather-app" className=' h-[100%] w-[100%] shadow-xl' />
           </div>
            <h1 className='w-[100%] text-[20px]'>Weather App</h1>
             <div className='flex items-center justify-between w-[100%]'>
              <button className='bg-black px-2 text-white p-1 cursor-pointer rounded-[6px] '>
                <a href="https://internweatherapp.vercel.app/" target='_blank'>View Project</a>
              </button>
              <button className='bg-black p-1 text-white px-2 cursor-pointer rounded-[6px] '>
               <a href="https://github.com/Rahul-Kumar02/weatherApp" target='_blank'> View Code </a>
                </button>
            </div>
        </div>

         <div className='w-[250px] h-[580px] bg-white flex flex-col  gap-3 items-center shadow-2xl rounded-[10px] p-3 cursor-pointer'>
           <div className='h-[100%] w-[100%]'>
             <img src={movie} alt="calculator-app" className=' h-[100%] w-[100%] shadow-xl'/>
           </div>
            <h1 className='w-[100%] text-[20px]'>Movie House App</h1>
              <div className='flex items-center justify-between w-[100%]'>
              <button className='rounded-[6px] bg-black px-2 text-white p-1 cursor-pointer
              '>
                <a href="https://iterncalculatorpp.vercel.app/" target='_blank'>View Project</a>
              </button>
              <button className='rounded-[6px] bg-black p-1 text-white px-2 cursor-pointer'>
                <a href="https://github.com/Rahul-Kumar02/calculatorApp" target='_blank'>View Code</a>
              </button>
            </div>
        </div>
       </div>

       
    </div>
  )
}

export default Projects