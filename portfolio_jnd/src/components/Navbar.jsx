import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png' 
import {Link} from 'react-scroll'

const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#011c38] text-gray-300'>
        <div>
            <img src ={Logo} alt="Logo Image" style={{width: '130px'}} />
        </div>
        
        {/*menu */}
        
            <ul className='hidden md:flex'>
                <li><Link  to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link  to="About" smooth={true} duration={500}>About Me</Link></li>
                <li><Link  to="Skills" smooth={true} duration={500}>Skills</Link></li>
            </ul>
        
        {/*Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 '>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        {/*Mobile menu */}
        <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#011c38] flex flex-col justify-center items-center'}>
        <li className='text-4xl py-2'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
                <li className='text-4xl py-2'><Link onClick={handleClick} to="About" smooth={true} duration={500}>About Me</Link></li>
                <li className='text-4xl py-2'><Link onClick={handleClick} to="Skills" smooth={true} duration={500}>Skills</Link></li>
             
        </ul>

        {/*Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1] '>
                    <a className='flex justify-between items-center w-full text-gray-300'href = 'https://www.linkedin.com/in/james-dankwah/'>LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] '>
                    <a className='flex justify-between items-center w-full text-gray-300'href = 'https://github.com/jamesnd04'>Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] '>
                    <a className='flex justify-between items-center w-full text-gray-300'href = 'https://docs.google.com/document/d/1Ay2GWUxRuqEFME8AjS2omfrftr9d7jA0/edit?usp=sharing&ouid=116399182852946898166&rtpof=true&sd=true'>Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar

