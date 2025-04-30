import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosMenu } from "react-icons/io";


function Nav() {
  return (
   <nav>
     <div>
        <img src="" alt="infinity logo" />
        <span>Infinity Dental and Eye center</span>
     </div>

     <div className='hidden md:flex'>
        <ul>
            <Link>About Us</Link>
            <Link>Services</Link>
            <Link>Book an Appointment</Link>
        </ul>
     </div>

     <div>
        <button><IoIosMenu /></button>
     </div>
   </nav>
    
  )
}


export default Nav