"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className={`bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          My<span className="text-blue-500">Blog</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            href="/create-blog"
            className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Create Post
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Contact
          </Link>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-gray-600 dark:text-gray-300 text-xl p-2 rounded-md focus:outline-none"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-600 dark:text-gray-300"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 shadow-md p-4 space-y-4 text-center">
          <Link
            href="/"
            className="block text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            href="/create"
            className="block text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Create Post
          </Link>
          <Link
            href="/about"
            className="block text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
