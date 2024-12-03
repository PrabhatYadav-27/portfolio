import React from 'react'

function Home() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto pd-4 md:px-20 my-20'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/2  mt-12 md:mt-24 space-y-2'>
                 <span className='text-xl'>Welcome in my feed !</span>
                    <div className='flex space-x-1 text-2xl md:text-4xl'>
                        <h1>Hello, I'm a </h1>
                        <span className='text-blue-700 font-bold'>Developer</span>
                    </div>
                    <br/>
                <p className='text-sm md:text-md text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, cum minus obcaecati architecto dolores, at expedita, cumque saepe beatae accusamus quam earum et. Atque aliquid tenetur excepturi nihil reiciendis assumenda?</p>
                </div>
                <br/>
                <div className='md:w-1/2 '>Right</div>
            </div>
        </div>
    </>
  )
}

export default Home