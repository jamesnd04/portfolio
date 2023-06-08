import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'
import Typed from 'react-typed'




const Hero = () => {
    return (
      <div name='home' className='w-full h-screen bg-[#07142c]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-[#EF0107]'>Hi, my name is</p>
          <h1 className= 'text-4xl sm:text-7xl font-bold text-[#9C824A]'>James Dankwah</h1>
          <h2 className='text-[#ffffff] text-2xl sm:text-4xl'>
            I'm a <span><Typed
      strings={[
            "Student",
            "Developer",
            "Designer",
          ]}
          typeSpeed={25}
          backSpeed={200}
          loop
        /></span>
          </h2>
          <div>
            <button className='text-[#ffffff] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#EF0107] hover:border-[#EF0107]'>View Work 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
            </button>
          </div>
        </div>
       
      </div>
    );
  };
  
  export default Hero;
  