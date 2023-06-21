import React from 'react'

const Contact = () => {
  return (
    <div name ='contact' className='w-full h-screen bg-[#07142c] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/86964b95-8145-4733-a0fe-b03d84e89b2f" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 pt-16'>
                <p className='text-4xl font-bold inline border-b-4 border-[#EF0107] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>I'm more responsive by email! - danknja@unc.edu</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]'type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#EF0107] hover:border-[#EF0107] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact