import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-[#F8FAFC] px-6 text-center">
      <div className="max-w-md">
        <h1 className="text-[96px] font-bold text-[#063053] leading-none">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className="inline-block px-6 py-3 bg-[#063053] text-white rounded-full hover:bg-[#021b2a] transition duration-300">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
