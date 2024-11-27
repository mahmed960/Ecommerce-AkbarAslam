"use client"
import { useEffect, useState } from "react";
interface name {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

const Posts = () => {
    const [data ,setdata]=useState<name[]>([])

    async function fetchData() {
        try {
            const  Response= await fetch('https://jsonplaceholder.typicode.com/posts')
        const  jsondata= await Response.json()
        console.log("jsondata",jsondata);
        setdata(jsondata)
            
        } catch (error) {
            console.log(`error ${error}`)
            
        }
        
    }
    useEffect(()=>{
        fetchData()
    },[])
        
    
  return (
    <>
    <ul>
                {data.map((post)=>{
                   return  <li key={post.id}>{post.title}</li>
                })
            }
    </ul>
    </>
  )
}
export default Posts