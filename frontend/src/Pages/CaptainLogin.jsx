import axios from 'axios'
import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../Context/CaptainContext'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {captain,setCaptain} = useContext(CaptainDataContext)
    const navigate = useNavigate()

    const submitHandler =async (e) => {
        e.preventDefault()
       const captain = {
            email:email,
            password:password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captain)  
         if (response.status===200){
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token',data.token)
            navigate('/captain-home')
         }
     
        
        setEmail('')
        setPassword('') 

    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img  className='w-20 mb-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVCO4w_adxK32rCXFeKq3_NbLcR9b_js14w&s" alt="" />


      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
      <h3 className='text-lg font-medium mb-2'>
        What's your email</h3>

      <input 
      required 
      value={email}
        onChange={(e) => {
            setEmail(e.target.value)
        }}
      className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
       type="email" placeholder='email@example.com' />

      <h3 className='text-lg font-medium mb-2'
      >Enter Password</h3>

      <input 
      required  
      value={password}
        onChange={(e) => {
            setPassword(e.target.value)
        }}
      className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
      type="password" placeholder='password' />


        <button 
        className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>
            Login</button> 
        
        <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
      </form>  
      </div>
      <div>
        <Link to='/login'
        className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        > Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default UserLogin
