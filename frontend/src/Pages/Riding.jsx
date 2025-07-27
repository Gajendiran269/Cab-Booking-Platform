import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { SocketContext } from '../Context/SocketContext'
import { useNavigate } from 'react-router-dom'
import LiveTracking from '../components/LiveTracking'

const Riding = () => {
    const location = useLocation()
    const { ride } = location.state || {} 
    const { socket } = useContext(SocketContext)
    const navigate = useNavigate()

    socket.on("ride-ended", () => {
        navigate('/home')
    })

    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full shadow-md'>
                <i className="text-lg font-medium ri-home-5-line"></i>
            </Link>
            <div className='h-3/5'>
                <LiveTracking />
            </div>
            <div className='h-2/5 p-3 bg-white shadow-lg rounded-t-2xl'>
                <div className='flex items-center justify-between border-b pb-3'>
                    <img className='h-10 rounded-full' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="Driver" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium capitalize'>{ride?.captain.fullname.firstname}</h2>
                        <h4 className='text-base font-semibold -mt-1'>{ride?.captain.vehicle.plate}</h4>
                        <p className='text-sm text-gray-500'>Car</p>
                    </div>
                </div>

                <div className='flex flex-col gap-3 mt-3'>
                    <div className='flex items-center gap-3 p-2 bg-gray-100 rounded-lg'>
                        <i className="text-lg ri-map-pin-2-fill text-blue-500"></i>
                        <div>
                            <h3 className='text-base font-medium'>Destination</h3>
                            <p className='text-xs text-gray-500'>{ride?.destination}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-2 bg-gray-100 rounded-lg'>
                        <i className="ri-currency-line text-green-500"></i>
                        <div>
                            <h3 className='text-base font-medium'>₹{ride?.fare} </h3>
                            <p className='text-xs text-gray-500'>Cash Payment</p>
                        </div>
                    </div>
                </div>
                <button className='w-full mt-4 bg-green-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-green-700 transition'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding
