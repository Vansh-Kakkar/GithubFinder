import React,{useContext,useEffect} from 'react'
import {FaCodepen,FaStore,FaUserFriends,FaUser, FaUsers} from 'react-icons/fa'
import GithubContext from '../context/Github/GithubContext'
import { useParams,Link } from 'react-router'
import RepoList from '../components/repos/RepoList'

function User() {
    const {getUser,user,loading,repos,getRepos} =useContext(GithubContext)
    const params = useParams()
    useEffect(() => {
       getUser(params.login)
       getRepos(params.login)
    },[])
    const {name,type,avatar_url,location,bio,blog,twitter_username,login,html_url,followers,following,public_repos,public_gists,hireable} = user
  if(loading){
    return <h3 className='text-9xl items-center mx-auto pl-64'>Loading...</h3>
  }
  return (
    <>
      <div className="w-full px-8 py-6">
        {/* Back to Search */}
        <Link
          to="/"
          className="inline-block mb-6 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          ⬅ Back to Search
        </Link>

        {/* User Card */}
        <div className="flex flex-col md:flex-row bg-gray-900 rounded-lg overflow-hidden shadow-lg">
          {/* Avatar & Name */}
          <div className="relative w-full md:w-1/3">
            <img
              src={avatar_url}
              alt="Profile"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white px-4 py-2 text-xl font-bold">
              {name}
            </div>
          </div>

          {/* Hireable & Bio */}
          <div className="w-full md:w-2/3 p-6">
            <div className="mb-2">
              <span className="text-lg font-semibold text-white">Hireable:</span>{' '}
              <span className={`ml-2 px-3 py-1 text-sm rounded-full ${hireable ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
                {hireable ? 'Yes' : 'No'}
              </span>
            </div>

            {bio && (
              <div className="mt-4">
                <h2 className="text-xl font-bold text-white mb-2">Bio</h2>
                <p className="text-gray-300">{bio}</p>
              </div>
            )}
            <div className='mt-4'>
                <a href={html_url} target='_blank' className='inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition duration-200'>Visit Github Profile</a>

                <div className='mt-4 flex gap-x-6'>
                  {location && <div className='text-white font-semibold inline-block bg-gray-500 px-4 py-2 rounded'>
                        Location 
                        <p>{location}</p>
                    </div>}

                  {blog && <div className='flex flex-col text-white font-semibold  bg-gray-500 px-4 py-2 rounded'>
                        Website 
                        <a href={`https://${blog}`} className='hover:text-blue-500'>{blog}</a>
                    </div>}

                  {twitter_username && <div className='flex flex-col text-white font-semibold  bg-gray-500 px-4 py-2 rounded'>
                        Twitter 
                        <a href={`https://twiiter.com/${twitter_username}`} className='hover:text-blue-500'>{twitter_username}</a>
                    </div>}
                </div>
                <div className='mt-10 bg-gray-500 px-4 py-2 flex justify-between'>
                    <div className='flex gap-x-3'>
                        <div>
                            <div className='font-semibold'>Followers</div>
                            <div className='font-semibold text-white text-xl'>{followers}</div>
                        </div>
                        <div className='align-center'><FaUsers color='pink' size={30}/></div>
                    </div>
                    <div className='flex gap-x-3'>
                        <div>
                            <div className='font-semibold'>Following</div>
                            <div className='font-semibold text-white text-xl'>{following}</div>
                        </div>
                        <div className='align-center'><FaUserFriends color='pink' size={30}/></div>
                    </div>
                    <div className='flex gap-x-3'>
                        <div>
                            <div className='font-semibold'>Public Repos</div>
                            <div className='font-semibold text-white text-xl'>{public_repos}</div>
                        </div>
                        <div className='align-center'><FaCodepen color='pink' size={30}/></div>
                    </div>
                    <div className='flex gap-x-3'>
                        <div>
                            <div className='font-semibold'>Public Gists</div>
                            <div className='font-semibold text-white text-xl'>{public_gists}</div>
                        </div>
                        <div className='align-center'><FaStore color='pink' size={30}/></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <RepoList repos={repos}/>
      </div>
    </>
  )
}

export default User