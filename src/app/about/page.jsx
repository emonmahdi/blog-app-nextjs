import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-center text-gray-900">About Us</h2>
      <p className="text-center text-gray-600 mb-6">Learn more about our mission, vision, and values.</p>
      <div className="space-y-6">
        <p className="text-gray-700">
          Welcome to our blog! We are passionate about sharing insightful content that educates and inspires. Our goal is to provide high-quality articles on various topics, helping our readers stay informed and engaged.
        </p>
        <p className="text-gray-700">
          Our team consists of experienced writers, developers, and designers who work tirelessly to bring you the best content. We believe in the power of knowledge and strive to make learning accessible to everyone.
        </p>
        <p className="text-gray-700">
          Stay connected with us for the latest updates, trends, and innovations in the industry. Thank you for being part of our community!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
