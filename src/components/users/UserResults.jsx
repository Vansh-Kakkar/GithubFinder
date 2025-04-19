import React,{useContext} from 'react'
import UserItem from './UserItem'
import GithubContext from '../../context/Github/GithubContext'

function UserResults() {
    const {users,loading} = useContext(GithubContext)

  if(loading){
    return <h3 className='text-9xl items-center mx-auto pl-64'>Loading...</h3>
  }  
  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-6'>
       { users && users.map((user) => (
          <UserItem key={user.id} user={user}/>
       ))}
    </div>
  )
}

export default UserResults