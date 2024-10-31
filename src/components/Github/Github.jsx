import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-red-300 ml-[8%] mr-[8%] rounded-xl  text-black p-4 text-3xl'>Github followers: <span className='text-red-600'>{data.followers}</span>
    <img src={data.avatar_url} alt="Git picture" width={200} className='rounded-full ml-10' />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Sahil-Dhiman-creator')
    return response.json()
}