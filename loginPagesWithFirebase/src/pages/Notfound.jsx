import React from 'react';

function NotFound() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-900 text-white">
      <img
        src="https://source.unsplash.com/random/1920x1080/?error"
        alt="Not Found"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <p className="text-2xl mb-6">Page Not Found</p>
        <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="mt-8 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Go to Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
