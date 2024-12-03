import React, { useState } from 'react'
import pic from '/src/assets/photo.avif'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

function NavBar() {
    //managing the state for menu
    const [menu, setMenu] = useState(false);
  return (
    <div className='max-w-screen-2xl container mx-auto pd-4 md:px-20 shadow-md'>

        <div className='flex justify-between items-center h-16'>
            <div className='flex space-x-2'>
                <img src={pic} className='h-12 w-12 rounded-full' alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>Prabha <span className='text-red-500  text-2xl'>t</span>
                <p className='text-sm'>Software Developer</p>
                </h1>
            </div>
            {/* desktop navbar */}
            <div>
                <ul className=' hidden md:flex space-x-8'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio </li>
                    <li>Experience</li>
                    <li>Contact</li>
                </ul>
                <div onClick={()=>setMenu(!menu)}>{menu ? <AiOutlineMenu />: <IoCloseSharp />}</div>
            </div>
        </div>
    {/* mobile navbar */}
        <div>
            <ul className='md:hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio </li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar