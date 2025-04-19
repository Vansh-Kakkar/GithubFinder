import React from 'react'
import RepoItem from './RepoItem'

function RepoList({repos}) {
  return (
    <div className='mt-10'>
        <div className='text-2xl font-bold'>Latest Repositories</div>
        {repos && repos.map((repo) => (
            <RepoItem key={repo.id} repo={repo}/>
        ))}
    </div>
  )
}

export default RepoList