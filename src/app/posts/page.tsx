"use client"
import React, { useEffect, useState } from 'react'

const posts = () => {
    const [posts, setpost]=useState([])
    async function getpost(){
        try {
            const response= await fetch('https://jsonplaceholder.typicode.com/posts')
            const fetcheddata= await response.json()
            console.log(fetcheddata)
            
        } catch (error) {
            console.log(`error ${error}`)
        }

    }
    useEffect(()=>{
        getpost()
      
    })
  return (
    {
        posts.map((pos) =>(
            <li key={pos.id}>{pos.title}</li>
        ) )
    }
  )
}

export default posts