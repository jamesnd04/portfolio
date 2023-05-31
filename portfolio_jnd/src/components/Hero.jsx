import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'
import Typed from 'react-typed'



const Hero = () => {
    return (
      <div name='home' className='w-full h-screen bg-[#011c38]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p>Hi, my name is</p>
          <h1>James Dankwah</h1>
          <h2>
            I'm a <span><Typed
      strings={[
            "Student",
            "Developer",
            "Designer",
          ]}
          typeSpeed={75}
          backSpeed={200}
          loop
        /></span>
          </h2>
        </div>
      </div>
    );
  };
  
  export default Hero;
  