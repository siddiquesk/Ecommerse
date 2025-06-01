import React from 'react';

function Error() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

export default Error;

