import React from "react";

import Typescript from "../assets/ts.png";
import Java from "../assets/icons8-java-logo-250.png";
import Python from "../assets/icons8-python-48.png";
import Next from "../assets/next.png";
import FastAPI from "../assets/fastapi.png";
import MySQL from "../assets/sql.png";

export default function Skills() {
  return (
    <div name="Skills" className="w-full h-screen bg-[#07142c] text-[#ffffff]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#EF0107]">
            Skills
          </p>
          <p className="py-4">
            These are some of the technologies I've worked with{" "}
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 text-center py-6">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Java} alt="Java icon" />
            <p className="my-4">Java</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="Python icon" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Next} alt="React icon" />
            <p className="my-4">Next.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MySQL} alt="CSS icon" />
            <p className="my-4">MySQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Typescript}
              alt="JavasCRIPT icon"
            />
            <p className="my-4">TypeScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={FastAPI} alt="HTML icon" />
            <p className="my-4">FastAPI</p>
          </div>
        </div>
      </div>
    </div>
  );
}
