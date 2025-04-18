import React from 'react'
import {Link} from 'react-router'
import {FaGithub} from 'react-icons/fa'

function Navbar({title='Github Finder'}) {
  return (
    <nav className='mb-12 shadow-lg  bg-gray-800 text-white text-xl p-2 '>
      <div className='container mx-auto flex'>
        <div className='flex-none px-2 mx-2'>
          <FaGithub className='inline pr-2 text-3xl'/>
          <Link to='/'className='text-lg font-bold align-middle'>{title}</Link>
        </div>
        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end space-x-4'>
            <Link to='/' className='bg-orange-500 rounded-4xl px-1 py-1'>HOME</Link>
            <Link to='/about' className='bg-orange-500 rounded-4xl px-1 py-1'>ABOUT</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar