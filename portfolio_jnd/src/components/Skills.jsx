import React from 'react'

import JavaScript from '../assets/javascript.png'
import Java from '../assets/icons8-java-logo-250.png'
import Python from '../assets/icons8-python-48.png'
import ReactLogo from '../assets/react.png'
import CSS from '../assets/css.png'
import HTMLi from '../assets/html.png'



const Skills = () => {
  return (
    <div name='Skills' className='w-full h-screen bg-[#07142c] text-[#ffffff]'>
        {/*Container*/}<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#EF0107]'>Skills</p>
                <p className='py-4'>These are some of the technologies I've worked with </p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center py-6'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src = {Java} alt="Java icon"/>
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src = {Python} alt="Python icon"/>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src = {ReactLogo} alt="React icon"/>
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src = {CSS} alt="CSS icon"/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src = {JavaScript} alt="JavasCRIPT icon"/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src = {HTMLi} alt="HTML icon"/>
                    <p className='my-4'>HTML</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills