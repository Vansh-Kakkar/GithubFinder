import React,{useState,useContext} from 'react'
import GithubContext from '../../context/Github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'

function UserSearch() {
    const[text,setText] = useState('')
    const {users,searchUsers,clearUsers} = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)
    const handleChange = (e) => {
          setText(e.target.value)
    }
    const handleSubmit = (e) => {
           e.preventDefault()
           if(text === ''){
            setAlert("Please Enter Something","error")
           }else{
            searchUsers(text)
            setText('')
           }
    }
  return (
    <div className='flex flex-col gap-4 md:flex-row md:items-center gap-x-8'>
           <form onSubmit={handleSubmit}>
              <input 
              type="text"
              placeholder='Search' 
              value={text}
              onChange={handleChange}
              className='bg-white text-black px-4 py-2 rounded-l-md border border-gray-300 w-full md:w-64  '
              />
              <button className='bg-black text-white px-4 py-2 rounded-r-md' type='submit'>Go</button>
           </form>
        {(users && users.length>0) && <div>
           <button className='bg-red-500 text-white px-4 py-2 rounded-md w-full md:w-auto' onClick={clearUsers}>Clear</button>
        </div>}
    </div>
  )
}

export default UserSearch