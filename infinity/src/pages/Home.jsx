import React from 'react'
import { RiToothLine } from "react-icons/ri";
import { GiSunglasses } from "react-icons/gi";



function Home() {
  return (
    <div className='h-screen'>

      <span>
        <p className='text-3xl text-center mt-5 md:text-left '>PROVIDING
          <em className='font-light'> THE BEST</em><br/> DENTAL AND EYE CARE
        </p>
      </span>

      <div className='h-90 relative'>
        <div className='relative flex mt-10 items-center justify-center md:'>
          <img src="src/images/homebg.jpg" alt="" className='absolute md:relative md:w-1/3 top-0 left-5 w-3/5 rounded-3xl'/>
          <span className='text-5xl opacity-60'><RiToothLine className='absolute md:relative top-10 right-15 '/> </span>
          <img src="src/images/homebg.jpg" alt="" className='absolute md:hidden top-40 right-5 w-3/5 rounded-3xl'/>
          <span className='absolute top-55 left-10 text-6xl opacity-80 '><GiSunglasses /></span>
        </div>
      </div>

      <p className='text-justify text-xl ml-6 mr-6'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, officiis doloremque iure laborum quidem excepturi deleniti. Voluptates corrupti molestias perferendis ea dignissimos qui. Ex reprehenderit, reiciendis consequatur blanditiis sequi enim?
      </p>

      <div className='border-2 text-2xl w-4/5 text-center place-self-center rounded-2xl mt-5'>
        <button className='p-2'>Book an Appointment</button>
      </div>

    </div>
  )
}

export default Home