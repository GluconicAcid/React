import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const data = useLoaderData()
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/GluconicAcid')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git image" width={300}/>
    </div>
  )
}

export default Github

// export const githubinfoloader = async () => {
//     const response = await fetch('https://api.github.com/users/GluconicAcid')
//     return response.json;
// }