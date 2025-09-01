import React from "react";
import { Code, Brain, Calculator, Cpu, Database, Server } from "lucide-react";

export default function Classes() {
  return (
    <div name="Classes" className="w-full h-screen bg-[#07142c] text-[#ffffff]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#EF0107]">
            Classes
          </p>
          <p className="py-4">
            These are some of the relevant courses I've taken at UNC
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 text-center py-6">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="flex justify-center">
              <Code className="w-20 h-20 text-[#EF0107]" />
            </div>
            <p className="my-4">COMP 426: Web Programming</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="flex justify-center">
              <Brain className="w-20 h-20 text-[#EF0107]" />
            </div>
            <p className="my-4">COMP 550: Algorithms</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="flex justify-center">
              <Calculator className="w-20 h-20 text-[#EF0107]" />
            </div>
            <p className="my-4">MATH 347: Linear Algebra</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="flex justify-center">
              <Cpu className="w-20 h-20 text-[#EF0107]" />
            </div>
            <p className="my-4">COMP 560: Artificial Intelligence</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="flex justify-center">
              <Database className="w-20 h-20 text-[#EF0107]" />
            </div>
            <p className="my-4">COMP 210: Data Structures</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <div className="flex justify-center">
              <Server className="w-20 h-20 text-[#EF0107]" />
            </div>
            <p className="my-4">COMP 311: Systems</p>
          </div>
        </div>
      </div>
    </div>
  );
}
