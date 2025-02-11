import Blog from "@/components/Blogs/Blog";
import React from "react";

export const metadata = {
  title: "All Blogs",
  description: "Transform your coding journey",
};

const BlogPage = () => {
  return (
    <div>
      <Blog />
    </div>
  );
};

export default BlogPage;
