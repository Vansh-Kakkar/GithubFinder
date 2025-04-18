import React from 'react'
import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router'

function NotFound() {
  return (
    <div className='flex flex-col items-center space-y-6'>
        <h1 className='text-8xl text-black-500'>Oops!</h1>
        <p className='text-8xl text-black-500'>404- Page Not Found</p>
        <Link  to='/' className='text-3xl bg-blue-500 text-white flex align-center px-1 py-3 rounded-xl'><FaHome/> Back To Home</Link>
    </div>
  )
}

export default NotFound