import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { IoIosMenu,IoIosInfinite } from "react-icons/io";


function Nav() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


  return (
   <nav className='flex justify-between  p-2 ml-2 mr-2 bg-linear-30 from-white to-neutral-600'>
     <div className='text-center lg:flex gap-3'>
        <IoIosInfinite className='text-3xl place-self-center'/>
        <span className='place-self-center lg:text-xl font-medium'>Infinity Dental and Eye Center</span>
     </div>

     <div className='hidden md:inline place-self-center text-lg'>
        <ul className='flex gap-7'>
            <Link>About Us</Link>
            <Link>Services</Link>
            <Link>Contact</Link>
        </ul>
     </div>

     <div className='hidden md:inline p-3 mr-15 text-white'>
      <button className='border-2 p-2 rounded-2xl'>Book Appointment</button>
     </div>

     <div className='md:hidden p-3'>
        <button onClick={toggleMenu} className='text-3xl cursor-pointer opacity-70'>
            <IoIosMenu />
        </button>
        {isOpen && (
          <div className='h-full absolute right-5 bg-white shadow-lg rounded-lg z-10'>
            <ul className='text-xl flex flex-col gap-3 p-4'>
              <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link to="/appointment" onClick={() => setIsOpen(false)}>Book an Appointment</Link>
            </ul>
          </div>
        )}
     </div>
   </nav>
    
  )
}


export default Nav