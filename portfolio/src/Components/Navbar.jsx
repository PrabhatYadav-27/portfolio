import React, { useState } from 'react'
import pic from '/src/assets/photo.avif'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

function NavBar() {
    //managing the state for menu
    const [menu, setMenu] = useState(false);
    //making array to map the pages home,contact,etc
    const navItems= [
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Experience"
        },
        {
            id:5,
            text:"Contact"
        },
    ]
  return (
    <div className='max-w-screen-2xl container mx-auto pd-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0'>

        <div className='flex justify-between items-center h-16'>
            <div className='flex space-x-2'>
                <img src={pic} className='h-12 w-12 rounded-full' alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>Prabha <span className='text-red-600  text-2xl'>t</span>
                <p className='text-sm'>Software Developer</p>
                </h1>
            </div>
            {/* desktop navbar */}
            <div>
                <ul className=' hidden md:flex space-x-8'>
                    {
                        navItems.map(({id,text})=>(
                            <li className='hover:scale-110 duration-200 cursor-pointer' key={id}>{text}</li>
                        ))
                    }
                </ul>
                <div onClick={()=>setMenu(!menu)} className='md:hidden'>{menu ? <AiOutlineMenu size={24}/>: <IoCloseSharp size={24}/>}</div>
            </div>
        </div>
    {/* mobile navbar */}

    {
        menu && (
            <div>
            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
            {
                 navItems.map(({id,text})=>(
                    <li className='hover:scale-110 duration-200  font-semibold cursor-pointer' key={id}>{text}</li>
                ))
            }
            </ul>
        </div>

        )
    }
        
    </div>
  )
}

export default NavBar