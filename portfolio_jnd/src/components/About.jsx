import React, {useState, useEffect} from 'react'
import Image from '../assets/IMG_2205.JPG'

const About = () => {

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
    <div name='About' className='w-full h-screen bg-[#07142c] text-[#ffffff]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#EF0107]'>About</p>
                </div>
                <div></div>
                <div className='max-w-[1000px] w-full h-[288px] '>
                <p className='justify-center text-size-adjust'>I am a sophomore at the<p className=' text-[#99badd]'> University of North Carolina at Chapel Hill</p>
                        where I'm majoring in Computer Science(B.S) with a minor in Data Science and Business Administration. Some relevant courses I've taken include Data Structures and Analysis, Discrete Structures,
                        and Calculus of Functions. At UNC, I'm involved in Black in Tech, Acts to Fellowship, and I serve as the Membership Officer for TechX, which is a software development society.
                        Within computer science, I am most interested in software engineering, numerical analysis, and artificial intelligence.
                        Outside of that, I enjoy playing and watching soccer, going to concerts, and watching film analysis.
                         </p>
                    
                </div>
                <div>
                {isMobile ? null : <img className='h-[288px] py-[18px]'src={Image}/>}

                </div>
            </div>
        </div>

    </div>
  )
}

export default About