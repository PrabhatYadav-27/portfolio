import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { SiHashnode } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";

import { ReactTyped } from "react-typed";

import pic from '/src/assets/photo.avif'

function Home() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto pd-4 md:px-20 my-20'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/2  mt-12 md:mt-24 space-y-2 order-2 md:order-1' >
                 <span className='text-xl'>Welcome in my feed !</span>
                    <div className='flex space-x-1 text-2xl md:text-4xl'>
                        <h1>Hello, I'm a </h1>
                        {/* <span className='text-blue-700 font-bold'>Developer</span> */}
                        <ReactTyped
                            className='text-blue-700 font-bold'
                            
                            strings={["Developer","Cloud","Devops ", "Programmer"]}
                            typeSpeed={40}
                            backSpeed={60}
                            loop={true}
                        />

                        
                    </div>
                    <br/>
                <p className='text-sm md:text-md text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, cum minus obcaecati architecto dolores, at expedita, cumque saepe beatae accusamus quam earum et. Atque aliquid tenetur excepturi nihil reiciendis assumenda?</p>

                <br/>
                {/* social media */}

                <div className='flex  flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                <div className=' space-y-2'>
                    <h1 className=' font-bold'>Connect to me on</h1>
                    <ul className='flex space-x-4'>
                        <a href='https://www.linkedin.com/in/prabhatyadav27/' target='_blank'>
                            <li> <BsLinkedin className='text-2xl cursor-pointer' /></li>
                        </a>
                       <a href='https://github.com/PrabhatYadav-27' target='_blank'>
                            <li><SiGithub   className='text-2xl cursor-pointer'/></li>
                       </a>
                        <a href='https://x.com/Prabhat_yadav_' target='_blank'>
                            <li> <RiTwitterXFill  className='text-2xl cursor-pointer' /></li>
                        </a>
                        <a href='https://prabhatyadav.hashnode.dev/ ' target='_blank'>
                            <li> <SiHashnode   className='text-2xl cursor-pointer'/></li>
                        </a>
                    </ul>

                </div>
                 <div className='space-y-1' >
                        <h1 className=' font-bold'>Currently working on</h1>
                        <div className='flex space-x-4 '>
                            <FaNodeJs      className='text-xl md:text-3xl hoover:scale-110 duration-200 rounded-full border-{2px}' />
                            <RiReactjsLine className='text-xl md:text-3xl hoover:scale-110 duration-200 rounded-full border-{2px}' />
                            <FaAws         className='text-xl md:text-3xl hoover:scale-110 duration-200 rounded-full border-{2px}' />
                            <FaDocker      className='text-xl md:text-3xl hoover:scale-110 duration-200 rounded-full border-{2px}' />
                            <SiExpress     className='text-xl md:text-3xl hoover:scale-110 duration-200 rounded-full border-{2px}' />
                        </div>
                            

                 </div>
                </div>
            </div>
                
                <div className='md:w-1/2 md:ml-48 md:mt-20  mt-8 order-1'>
                    <img src={pic} className='rounded-full md:w-[450px] md:h-[450px] ' />
                </div>
            </div>
        </div>
        <hr/>
    </>
  )
}

export default Home