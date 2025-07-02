import React from 'react'
import todo from '../../public/todo.jpg'
import calculator from '../../public/calculator.png'
import weather from '../../public/weather.png'

function Projects() {
  return (
    <div className=' min-h-screen w-full md:min-h-screen md:w-full lg:min-h-screen lg:w-full items-center justify-center flex flex-col py-20 gap-10 md:py-20 lg:py-20 px-4 lg:px-20'>
        <h1 className='text-2xl w-full'>Projects</h1>
       <div className='flex gap-5 flex-wrap items-center justify-center'>
         <div className='w-[250px] h-[550px] bg-white flex flex-col p-3 gap-3 items-center shadow-2xl rounded-[10px] cursor-pointer'>
           <div className='h-[100%] w-[100%]'>
             <img src={todo} alt="" className=' h-[100%] w-[100%] shadow-xl' />
           </div>

            <h1 className=' w-[100%] text-[20px]'>Todo App</h1>
            <div className='flex items-center justify-between w-[100%]'>
              <button className='bg-black px-2 text-white p-1 cursor-pointer'>View Project</button>
              <button className='bg-black p-1 text-white px-2 cursor-pointer'>View Code</button>
            </div>
        </div>

         <div className='w-[250px] h-[550px] bg-white flex flex-col  gap-3 items-center shadow-2xl rounded-[10px] p-3 cursor-pointer'>
           <div className='h-[100%] w-[100%]'>
             <img src={calculator} alt="calculator-app" className=' h-[100%] w-[100%] shadow-xl' />
           </div>
            <h1 className='w-[100%] text-[20px]'>Calculatore App</h1>
              <div className='flex items-center justify-between w-[100%]'>
              <button className='bg-black px-2 text-white p-1 cursor-pointer
              '>View Project</button>
              <button className='bg-black p-1 text-white px-2 cursor-pointer'>View Code</button>
            </div>
        </div>

         <div className='w-[250px] h-[550px] bg-white flex flex-col  gap-3 items-center shadow-2xl rounded-[10px] p-3 cursor-pointer'>
           <div className='h-[100%] w-[100%]'>
             <img src={weather} alt="weather-app" className=' h-[100%] w-[100%] shadow-xl' />
           </div>
            <h1 className='w-[100%] text-[20px]'>Weather App</h1>
             <div className='flex items-center justify-between w-[100%]'>
              <button className='bg-black px-2 text-white p-1 cursor-pointer '>View Project</button>
              <button className='bg-black p-1 text-white px-2 cursor-pointer'>View Code</button>
            </div>
        </div>
       </div>

       
    </div>
  )
}

export default Projects