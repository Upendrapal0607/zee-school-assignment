import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HomePage = () => {
    // https://amnevh.net/innser_css/assets/top2.jpg
  return (
   
    <div className='flex flex-col  w-full min-h-screen bg-gray-100'>
        <h1 className='text-center text-4xl font-bold text-gray-800 mt-16'>Welcome to Zee School Appointment.</h1>
        <h1 className=' text-center text-4xl font-bold text-green-800 mt-16'>
            Hello Guardians,
        </h1>
        <p className=' text-center text-4xl font-bold text-gray-400 mt-4'>
            Click below to see availability and book  your
        </p>
        <p className=' text-center text-4xl font-bold text-gray-400 mt-4'>
             appointment with <span className='text-green-500'>ZEE SCHOOL</span> experts.
        </p>
        <img className='sm:w-[70%] m-auto text-gray-100 text-4xl font-bold bg-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md mt-[2rem] sm:mt-[5rem]' src="https://www.amnevh.net/innser_css/assets/top2.jpg" alt="" />
        {/* <Link
               to="/appointment"
            className="sm:w-[400px] m-auto text-gray-100 text-4xl font-bold bg-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md mt-[2rem] sm:mt-[5rem]"
          >
            YOUR APPINTMENT
          </Link> */}

    </div>
  
  )
}


