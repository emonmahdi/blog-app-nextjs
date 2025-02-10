"use client"


import Error from 'next/error';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await fetch("./blogs.json");
        const data = await response.json();
        setBlogs(data);
        console.log(data);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
          setError(error.message);
        } else {
          setError("An Unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    getBlog();
  }, []);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error</p>;

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Latest Tech Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blog