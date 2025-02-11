const blogs = [
    {
      "id": 1,
      "title": "The Future of Web Development in 2025",
      "image": "https://rb.gy/itg63q",
      "excerpt": "Discover the upcoming trends and innovations in web development that will shape the industry in 2025.",
      "slug": "future-of-web-development"
    },
    {
      "id": 2,
      "title": "Understanding Next.js: The Future of React Frameworks",
      "image": "https://rb.gy/itg63q",
      "excerpt": "Learn why Next.js is becoming the go-to framework for React developers and how it enhances performance.",
      "slug": "understanding-nextjs"
    },
    {
      "id": 3,
      "title": "Why Tailwind CSS is Taking Over Web Design",
      "image": "https://rb.gy/itg63q",
      "excerpt": "Explore how Tailwind CSS is revolutionizing frontend development and improving developer efficiency.",
      "slug": "tailwind-css-revolution"
    },
    {
      "id": 4,
      "title": "How to Build Scalable Web Applications with React",
      "image": "https://rb.gy/itg63q",
      "excerpt": "A step-by-step guide to designing scalable and maintainable React applications for production.",
      "slug": "scalable-react-apps"
    },
    {
      "id": 5,
      "title": "Best Practices for API Development with Node.js",
      "image": "https://source.unsplash.com/600x400/?technology,nodejs",
      "excerpt": "Learn the best practices and strategies for developing high-performance APIs with Node.js.",
      "slug": "nodejs-api-best-practices"
    },
    {
      "id": 6,
      "title": "How to Secure Your Web Application Against Cyber Threats",
      "image": "https://source.unsplash.com/600x400/?technology,cybersecurity",
      "excerpt": "Discover essential security practices to protect your web applications from cyber threats.",
      "slug": "web-app-security"
    },
    {
      "id": 7,
      "title": "A Guide to Serverless Architecture with AWS Lambda",
      "image": "https://source.unsplash.com/600x400/?technology,aws",
      "excerpt": "Understand how to build scalable and cost-effective applications using AWS Lambda and serverless computing.",
      "slug": "serverless-architecture-aws"
    },
    {
      "id": 8,
      "title": "Introduction to GraphQL: The API Revolution",
      "image": "https://source.unsplash.com/600x400/?technology,graphql",
      "excerpt": "Learn how GraphQL simplifies data fetching and improves the efficiency of APIs compared to REST.",
      "slug": "introduction-to-graphql"
    },
    {
      "id": 9,
      "title": "Why You Should Use TypeScript in Your Next Project",
      "image": "https://source.unsplash.com/600x400/?technology,typescript",
      "excerpt": "Understand the benefits of using TypeScript in JavaScript applications and how it improves code maintainability.",
      "slug": "why-use-typescript"
    },
    {
      "id": 10,
      "title": "Top 10 Frontend Development Tools for 2025",
      "image": "https://source.unsplash.com/600x400/?technology,frontend",
      "excerpt": "Discover the best tools for frontend developers to enhance productivity and build better web applications.",
      "slug": "top-frontend-tools-2025"
    },
    {
      "id": 11,
      "title": "How to Improve Website Performance and SEO",
      "image": "https://source.unsplash.com/600x400/?technology,seo",
      "excerpt": "Learn effective techniques to boost website speed, user experience, and search engine rankings.",
      "slug": "website-performance-seo"
    },
    {
      "id": 12,
      "title": "Why JAMstack is the Future of Web Development",
      "image": "https://source.unsplash.com/600x400/?technology,jamstack",
      "excerpt": "Discover how JAMstack architecture improves website performance, security, and scalability.",
      "slug": "jamstack-future"
    },
    {
      "id": 13,
      "title": "How AI is Transforming Web Development",
      "image": "https://source.unsplash.com/600x400/?technology,ai",
      "excerpt": "Explore how artificial intelligence is shaping the future of web development and automation.",
      "slug": "ai-web-development"
    },
    {
      "id": 14,
      "title": "A Beginner's Guide to Docker for Web Developers",
      "image": "https://source.unsplash.com/600x400/?technology,docker",
      "excerpt": "Learn how Docker helps developers containerize applications for easier deployment and scalability.",
      "slug": "docker-for-web-developers"
    },
    {
      "id": 15,
      "title": "Why Microservices Architecture is Gaining Popularity",
      "image": "https://source.unsplash.com/600x400/?technology,microservices",
      "excerpt": "Understand the benefits of microservices and why companies are adopting this architecture.",
      "slug": "microservices-architecture"
    }
  ]
    
    

const BlogDetailsPage = async ({params}) => {
    const id = (await params).id 
    console.log(id)

     // Fetch blog data (assuming blogs.json is in public folder)
//   const res = await fetch("/blogs.json"); // Change URL as needed
//   const blogs = await res.json();

  // Find blog post by matching ID
  const blog = blogs.find((b) => b?.slug.toString() === id);

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div className="container mx-auto px-4 md:px-10 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Blog Content */}
        <div className="md:col-span-2">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{blog.title}</h1>
            <p className="text-gray-500 mt-2">{blog?.date || "3 jan 2025"}</p>
            <img
              src={blog.image || "/default-image.jpg"}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-lg mt-4"
            />
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">{blog.excerpt}</p>
          </div>

          {/* Comments Section */}
          <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800">Comments</h2>
            <textarea
              className="w-full h-24 border rounded-lg p-2 mt-4"
              placeholder="Write a comment..."
            ></textarea>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4">
              Submit Comment
            </button>
          </div>
        </div>

        {/* Sidebar - Recently Read Blogs */}
        <div className="md:col-span-1">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recently Read Blogs</h2>
            {/* {recentBlogs.map((recentBlog) => (
              <a
                key={recentBlog.id}
                href={`/blog/${recentBlog.id}`}
                className="block border-b last:border-b-0 py-2 text-gray-700 hover:text-blue-500 transition"
              >
                {recentBlog.title}
              </a>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetailsPage