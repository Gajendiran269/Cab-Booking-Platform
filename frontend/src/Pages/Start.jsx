import React from 'react'
import { Link } from "react-router-dom"

const Start = () => {
  return (
    <div>
      <div className=' bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8  flex justify-between flex-col w-full '>
        <img  className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
            <Link to='/login' className='flex item-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
            
        </div>
      </div>
    </div>
  )
}

export default Start
