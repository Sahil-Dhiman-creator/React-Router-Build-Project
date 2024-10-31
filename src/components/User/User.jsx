import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center bg-blue-700 p-2 text-3xl w-[84%] ml-[8%] rounded font-medium'>
        User: {userid}
    </div>
  )
}

export default User