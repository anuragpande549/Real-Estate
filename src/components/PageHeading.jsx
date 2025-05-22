import React from 'react';
import { Link } from 'react-router-dom';
import propertiesImage from '../assets/properties.jpg'; // Make sure the path is correct

function PageHeading() {
  return (
    <div
      className="h-[240px] flex flex-col justify-center items-center text-white text-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${propertiesImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#063053B2]/80 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-600">Properties</h1>
        <p className="mt-2 text-sm">
          <Link to="/" className="hover:underline text-white">
            Home
          </Link>{' '}
          / Properties
        </p>
      </div>
    </div>
  );
}

export default PageHeading;
