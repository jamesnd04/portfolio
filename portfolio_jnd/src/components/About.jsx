import React, { useState, useEffect } from "react";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <div name="About" className="w-full h-screen bg-[#07142c] text-[#ffffff]">
      <div className="flex justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-6xl font-bold inline border-b-4 border-[#EF0107]">
              About
            </p>
          </div>
          <div></div>
          <div className="max-w-[1000px] w-full h-[288px] ">
            <p className="text-2xl justify-center flex flex-col">
              Hey, I'm James - British/Ghanian native and aspiring builder. I am
              a junior at UNC Chapel Hill where I study Computer Science with a
              minor in Data Science. At UNC, I'm involved in Black in Tech,
              NSBE, and I am the Exiting President for TechX, which is a
              software development society. I'm interested in artificial
              intelligience, software engineering, and fullstack development.
              Outside of that, I enjoy playing and watching soccer, going to
              concerts, and watching film analysis. I made this website as my
              first ever project some years ago, so for sentinmentality, I've
              kept it up! Attached are my resume, LinkedIn, and Github. You can
              reach me by email at danknja@unc.edu!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
