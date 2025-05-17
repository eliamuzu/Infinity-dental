import React from 'react';
import { RiToothLine } from "react-icons/ri";
import { GiSunglasses } from "react-icons/gi";

function Home() {
  return (
    <main>
      <section className=''>
        <div className='flex flex-col md:flex-row justify-center align-center mr-10 ml-10 md:ml-5 md:mr-5 md:gap-10 h-screen place-self-center md:-mt-10 md:text-left'>
          <div className='flex md:w-full justify-center flex-col gap-5'>
            <div className='flex relative text-9xl flex-row justify-around bottom-0 -z-10'>
              <RiToothLine className='fill-neutral-400'/>
              <GiSunglasses className='fill-neutral-400 '/>
            </div>
            <span className='text-3xl md:text-4xl lg:text-5xl font-serif text-center '>
              Your Complete Vision & Dental Wellness Starts Here
            </span>
            <span className=' text-center text-lg'>Discover expert dental and eye care under one roof ensuring a healthier and brighter you.</span>
            <button className='p-2 w-50 border-2 rounded-full place-self-center'>Book An Appointment</button>
            <span className='text-center font-thin text-xl'>Your Vison. Your Smile. Our Expertise.</span>
          </div>

          <div className='flex justify-center align-center mt-5'>
            <img src="src/images/homebg.jpg" alt="" className='rounded-4xl place-self-center'/>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;