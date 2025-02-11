const blogs = [
  {
    id: 1,
    title: "The Future of Web Development in 2025",
    image: "https://rb.gy/m3osrv",
    excerpt:
      "Discover the upcoming trends and innovations in web development that will shape the industry in 2025.",
    slug: "future-of-web-development",
    description:
      "Web development is evolving rapidly with new technologies and trends emerging each year. In 2025, we can expect greater adoption of AI-driven development, no-code/low-code platforms, enhanced cybersecurity measures, and the rise of Web3. Progressive Web Apps (PWAs) and serverless computing will continue to gain traction, making web applications more efficient and scalable.",
  },
  {
    id: 2,
    title: "Top JavaScript Frameworks for Modern Web Development",
    image: "https://rb.gy/qlsnsm",
    excerpt:
      "A deep dive into the most popular JavaScript frameworks in 2025 and their applications in web development.",
    slug: "top-javascript-frameworks",
    description:
      "JavaScript frameworks have become an essential part of modern web development. React, Angular, Vue.js, and Svelte continue to dominate the frontend space, while Node.js and Deno power the backend. This article explores their advantages, use cases, and when to choose one over the other.",
  },
  {
    id: 3,
    title: "The Rise of Web3 and Decentralized Applications (DApps)",
    image: "https://rb.gy/ou040n",
    excerpt:
      "An introduction to Web3 and how decentralized applications are transforming the internet landscape.",
    slug: "rise-of-web3",
    description:
      "Web3 is revolutionizing the internet by shifting control from centralized authorities to decentralized networks using blockchain technology. This article covers the fundamentals of Web3, its impact on web development, and how developers can build decentralized applications (DApps) using Ethereum, Solidity, and smart contracts.",
  },
  {
    id: 4,
    title: "How AI is Changing Web Development",
    image: "https://rb.gy/vzmg7z",
    excerpt:
      "Learn how artificial intelligence is automating web development and improving user experiences.",
    slug: "ai-in-web-development",
    description:
      "AI-driven development tools, such as code completion, AI-generated design, and chatbots, are transforming how websites and applications are built. This article explores the benefits of AI in web development, popular AI-powered tools, and how developers can leverage machine learning to enhance user interactions.",
  },
  {
    id: 5,
    title: "The Importance of Cybersecurity in Web Development",
    image: "https://rb.gy/yp0946",
    excerpt:
      "Understanding the growing need for secure web applications and best practices for web security.",
    slug: "cybersecurity-in-web-development",
    description:
      "As cyber threats continue to rise, securing web applications is more important than ever. This article covers common vulnerabilities like XSS, SQL injection, and CSRF, along with best practices for ensuring secure web development, such as HTTPS, authentication mechanisms, and regular security audits.",
  },
  {
    id: 6,
    title: "The Role of Progressive Web Apps (PWAs) in 2025",
    image: "https://tinyurl.com/25wxywyv",
    excerpt:
      "Why PWAs are becoming the preferred choice for mobile-friendly web applications.",
    slug: "progressive-web-apps",
    description:
      "Progressive Web Apps (PWAs) offer a native app-like experience with the accessibility of web applications. This article discusses the advantages of PWAs, how they improve performance, and why businesses are adopting them for better user engagement.",
  },
  {
    id: 7,
    title: "Serverless Computing: The Future of Scalable Applications",
    image:
      "https://www.xenonstack.com/hubfs/xenonstack-aws-serverless-computing.png",
    excerpt:
      "An overview of serverless computing and its impact on modern web development.",
    slug: "serverless-computing",
    description:
      "Serverless computing enables developers to build applications without managing server infrastructure. This article explains how serverless platforms like AWS Lambda, Azure Functions, and Google Cloud Functions are revolutionizing scalability, cost-efficiency, and application deployment.",
  },
  {
    id: 8,
    title: "Top Web Development Blogs to Follow in 2025",
    image:
      "https://blog.solguruz.com/wp-content/uploads/2022/09/Top-Web-Development-Trends.png",
    excerpt:
      "Stay updated with the latest in web development by following these top blogs.",
    slug: "top-web-development-blogs",
    description:
      "Keeping up with industry trends is crucial for web developers. This article lists the best web development blogs, including Smashing Magazine, CSS-Tricks, Dev.to, and freeCodeCamp, that provide valuable insights, tutorials, and coding tips.",
  },
  {
    id: 9,
    title: "The Evolution of UX/UI Design Trends in 2025",
    image: "https://tinyurl.com/yskjswz3",
    excerpt:
      "Explore the latest UX/UI trends that will shape the digital experience in 2025.",
    slug: "ux-ui-trends-2025 ss",
    description:
      "User experience and interface design are crucial in web development. This article delves into emerging trends like dark mode, neumorphism, micro-interactions, and AI-driven personalization that will enhance user engagement in 2025.",
  },
];

const recentBlogs = [
  {
    id: 3,
    title: "The Rise of Web3 and Decentralized Applications (DApps)",
    image: "https://rb.gy/ou040n",
    excerpt:
      "An introduction to Web3 and how decentralized applications are transforming the internet landscape.",
    slug: "rise-of-web3",
    description:
      "Web3 is revolutionizing the internet by shifting control from centralized authorities to decentralized networks using blockchain technology. This article covers the fundamentals of Web3, its impact on web development, and how developers can build decentralized applications (DApps) using Ethereum, Solidity, and smart contracts.",
  },
  {
    id: 4,
    title: "How AI is Changing Web Development",
    image: "https://rb.gy/vzmg7z",
    excerpt:
      "Learn how artificial intelligence is automating web development and improving user experiences.",
    slug: "ai-in-web-development",
    description:
      "AI-driven development tools, such as code completion, AI-generated design, and chatbots, are transforming how websites and applications are built. This article explores the benefits of AI in web development, popular AI-powered tools, and how developers can leverage machine learning to enhance user interactions.",
  },
  {
    id: 5,
    title: "The Importance of Cybersecurity in Web Development",
    image: "https://rb.gy/yp0946",
    excerpt:
      "Understanding the growing need for secure web applications and best practices for web security.",
    slug: "cybersecurity-in-web-development",
    description:
      "As cyber threats continue to rise, securing web applications is more important than ever. This article covers common vulnerabilities like XSS, SQL injection, and CSRF, along with best practices for ensuring secure web development, such as HTTPS, authentication mechanisms, and regular security audits.",
  },
  {
    id: 6,
    title: "The Role of Progressive Web Apps (PWAs) in 2025",
    image: "https://tinyurl.com/25wxywyv",
    excerpt:
      "Why PWAs are becoming the preferred choice for mobile-friendly web applications.",
    slug: "progressive-web-apps",
    description:
      "Progressive Web Apps (PWAs) offer a native app-like experience with the accessibility of web applications. This article discusses the advantages of PWAs, how they improve performance, and why businesses are adopting them for better user engagement.",
  },
  {
    id: 7,
    title: "Serverless Computing: The Future of Scalable Applications",
    image:
      "https://www.xenonstack.com/hubfs/xenonstack-aws-serverless-computing.png",
    excerpt:
      "An overview of serverless computing and its impact on modern web development.",
    slug: "serverless-computing",
    description:
      "Serverless computing enables developers to build applications without managing server infrastructure. This article explains how serverless platforms like AWS Lambda, Azure Functions, and Google Cloud Functions are revolutionizing scalability, cost-efficiency, and application deployment.",
  },
];

export const metadata = {
  title: "Blog Details",
  description: "Transform your coding journey",
};

const BlogDetailsPage = async ({ params }) => {
  const id = (await params).id;
  console.log(id);

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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {blog.title}
            </h1>
            <div className="flex justify-between items-center">
              <p className="text-gray-500 mt-2">
                {blog?.published_date || "3 jan 2025"}
              </p>
              <p>By: Md Emon Mahdi</p>
            </div>
            <img
              src={blog.image || "/default-image.jpg"}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-lg mt-4"
            />
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              {blog.excerpt}
            </p>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              {blog.description}
            </p>
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
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Recently Read Blogs
            </h2>
            {recentBlogs.map((recentBlog) => (
              <a
                key={recentBlog.id}
                href={`/blog/${recentBlog.slug}`}
                className="block border-b last:border-b-0 py-2 text-gray-700 hover:text-blue-500 transition"
              >
                {recentBlog.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage