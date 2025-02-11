"use client";

import React, { useState } from "react";

const CreateBlog = () => {
  const [post, setPost] = useState({
    title: "",
    publishedDate: "",
    image: "",
    writtenBy: "",
    description: "",
  });

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Post Created:", post);
    alert("Post Created Successfully!");
  };

  return (
    <div className="w-[800px] mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create a New Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1"
            placeholder="Enter post title"
            required
          />
        </div>

        {/* Published Date */}
        <div>
          <label className="block text-gray-700 font-medium">Published Date</label>
          <input
            type="date"
            name="publishedDate"
            value={post.publishedDate}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-gray-700 font-medium">Image URL</label>
          <input
            type="text"
            name="image"
            value={post.image}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1"
            placeholder="Enter image URL"
          />
        </div>

        {/* Written By */}
        <div>
          <label className="block text-gray-700 font-medium">Written By</label>
          <input
            type="text"
            name="writtenBy"
            value={post.writtenBy}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1"
            placeholder="Author Name"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            name="description"
            value={post.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1 h-24"
            placeholder="Write your post description..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
