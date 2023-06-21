import React, {useState, useEffect} from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'
import Typed from 'react-typed'




const Hero = () => {

  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the screen size is mobile
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  // Run the check on component mount and window resize
  useEffect(() => {
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);


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
            
          ]}
          typeSpeed={40}
          backSpeed={200}
          loop={true}
          showCursor={false}
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
  