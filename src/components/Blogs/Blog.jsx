"use client"


import Error from 'next/error';
import React, { useEffect, useState } from 'react'

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getBlog = async () => {
            try{

               const response = await fetch('./blogs.json');
               const data = await response.json();
               setBlogs(data);
               console.log(data)

            }catch(error){
                if(error instanceof Error){
                    console.log(error.message)
                setError(error.message)
                }else{
                    setError('An Unknown error occurred')
                }
            }
            finally{
                setLoading(false)
            }
        }
        
        getBlog();

    }, []);

    if(loading) return <p>Loading.....</p>
    if(error) return <p>Error</p>


  return (
    <div>Blog {blogs.length}</div>
  )
}

export default Blog