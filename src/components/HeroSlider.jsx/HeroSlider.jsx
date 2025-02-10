export default function HeroSlider() {
    return (
      <header className="relative w-full h-[500px] bg-gray-900 text-white flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://rb.gy/ca4p7g')" }}
        ></div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
        {/* Content */}
        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Welcome to Our Tech Blog
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the latest trends, tutorials, and news in web development, JavaScript, and technology.
          </p>
          
          {/* Call to Action Button */}
          <a
            href="/blog"
            className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Explore Blogs
          </a>
        </div>
      </header>
    );
  }
  