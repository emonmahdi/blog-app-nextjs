import Link from "next/link";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold text-white">About</h2>
          <p className="text-sm mt-2">
            MyBlog is a platform to share knowledge, ideas, and insights on
            various topics.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold text-white">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-400">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-lg font-bold text-white">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <FiFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <FiTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <FiInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
      </div>
    </footer>
  );
}
