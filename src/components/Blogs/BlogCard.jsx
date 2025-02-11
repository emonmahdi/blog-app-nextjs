import Link from 'next/link'
import React from 'react'

const BlogCard = ({blog}) => {
  return (
    <div
      key={blog.id}
      className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{blog.title}</h2>
        <p className="text-sm text-gray-600 mt-2">
          {blog.excerpt.slice(0, 80)}.......
        </p>
        <Link
          href={`/blog/${blog.slug}`}
          className="mt-4 inline-block text-blue-500 hover:underline font-medium"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}

export default BlogCard