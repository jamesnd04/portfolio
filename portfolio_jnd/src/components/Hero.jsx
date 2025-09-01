import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";
import ProfileImage from "../assets/IMG_2205.JPG";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the screen size is mobile
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  // Run the check on component mount and window resize
  useEffect(() => {
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <div name="home" className="w-full h-screen bg-[#07142c]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex items-center justify-between">
          {/* Left side - Text content */}
          <div className="flex-1">
            <p className="text-[#EF0107]">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#9C824A]">
              James Dankwah
            </h1>
            <h2 className="text-[#ffffff] text-2xl sm:text-4xl">
              I'm a{" "}
              <span>
                <ReactTyped
                  strings={["Student", "Developer"]}
                  typeSpeed={40}
                  backSpeed={200}
                  loop={true}
                  showCursor={false}
                />
              </span>
            </h2>
            <div>
              <Link to="About" smooth={true} duration={750}>
                <button className="text-[#ffffff] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#EF0107] hover:border-[#EF0107]">
                  About Me
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right side - Profile picture */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="relative">
              <img
                src={ProfileImage}
                alt="James Dankwah"
                className="w-64 h-64 rounded-full object-cover border-4 border-[#EF0107] shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
