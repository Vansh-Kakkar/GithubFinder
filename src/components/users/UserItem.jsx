import React from 'react'
import {Link} from 'react-router'

function UserItem({user :{login,avatar_url}}) {
  return (
    <div className='shadow-md flex items-center bg-white rounded-lg p-4'>
        <div className='w-16 h-16 mr-4'>
            <img src={avatar_url} alt="profile" className='w-full h-full rounded-full object-cover'/>
        </div>
        <div>
          <h4 className='text-lg font-semibold'>{login}</h4>
          <Link to={`/users/${login}`} className='text-blue-500 hover:underline text-sm'>
           Visit Profile
          </Link>
        </div>
    </div>
  )
}

export default UserItem