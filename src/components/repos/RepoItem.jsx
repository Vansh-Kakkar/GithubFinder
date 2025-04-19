import React from 'react'
import {FaEye,FaInfo,FaLink,FaStar,FaUtensils} from 'react-icons/fa'

function RepoItem({repo}) {
    const {name,description,html_url,fork,open_issues,watchers_count,stargazers_count} = repo
  return (
        <div className='bg-gray-800 text-white shadow-md p-4 mb-4'>
            <a href={html_url} className='flex items-center font-semibold text-lg mb-2'><FaLink className='mr-2'/>{name}</a>

            {description && <p className='mb-4 text-gray-300'>{description}</p>}
            <div className='flex flex-wrap gap-4 text-sm'>
                <div className='flex items-center gap-1'>
                    <FaEye color='blue'/> {watchers_count}
                </div>
                <div className='flex items-center gap-1'>
                    <FaStar color='green'/> {stargazers_count}
                </div>
                <div className='flex items-center gap-1'>
                    <FaInfo color='red'/> {open_issues}
                </div>
                <div className='flex items-center gap-1'>
                    <FaUtensils color='yellow'/> {fork}
                </div>
            </div>
        </div>
  )
}

export default RepoItem