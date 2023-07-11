import React from 'react'
import SR from '../assets/spotifyrec.png'
import web from '../assets/websiteJ.png'
import coming from '../assets/comingsoon.jpg'
import discordb from '../assets/discordbot.png'


const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#07142c]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#EF0107]'>Projects</p>
                <p className='py-6'>// Some of the projects I have done</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                
                {/*Grid Items*/}
                <div style={{backgroundImage: `url(${web})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-80 ' >
                        <span className='text-2xl font-bold text-white tracking-wider '>
                            React Website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href = "/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href = "https://github.com/jamesnd04/portfolio">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${discordb})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-80 ' >
                        <span className='text-2xl font-bold text-white tracking-wider '>
                            Discord Chatbot
                        </span>
                        <div className='pt-8 text-center'>
                            <a href = "https://www.loom.com/share/a5411755b8274160aa20cf43ad52dcce?sid=b98a1a7d-36d7-48ea-9c17-a94400523cd9">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href = "https://github.com/jamesnd04/DiscordChatbot">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${SR})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-80 ' >
                        <span className='text-2xl font-bold text-white tracking-wider '>
                            Spotify Recommender
                        </span>
                        <div className='pt-8 text-center'>
                            
                            <a href = "https://github.com/jamesnd04/techx-spotifyproj">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>


                <div style={{backgroundImage: `url(${coming})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-80 ' >
                        <span className='text-2xl font-bold text-white tracking-wider '>
                            Coming Soon!
                        </span>
                        <div className='pt-8 text-center'>
                            <a href = "/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href = "/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${coming})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-80 ' >
                        <span className='text-2xl font-bold text-white tracking-wider '>
                            Coming Soon!
                        </span>
                        <div className='pt-8 text-center'>
                            <a href = "/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href = "/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${coming})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-80 ' >
                        <span className='text-2xl font-bold text-white tracking-wider '>
                            Coming Soon!
                        </span>
                        <div className='pt-8 text-center'>
                            <a href = "/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href = "/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                
                


            </div>

        </div>
    </div>
  )
}

export default Projects