import React, { useState } from 'react';
import { FaMapMarkerAlt, FaBookOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LibraryBook = ({ book }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = book.description;
  if (!showFullDescription) {
    description = description.substring(0, 120) + '...';
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden relative">
      <div className="p-6 flex flex-col h-full">
        {/* Category & Title */}
        <div className="mb-4">
          <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            {book.category}
          </span>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{book.title}</h3>
          <p className="text-gray-500 text-sm">by {book.author}</p>
        </div>

        {/* Description */}
        <div className="text-gray-600 mb-4 text-sm">{description}</div>

        <button
          onClick={() => setShowFullDescription((prev) => !prev)}
          className="text-indigo-500 font-medium mb-4 hover:text-indigo-600 transition-colors duration-200 text-sm"
        >
          {showFullDescription ? 'Show Less' : 'Read More'}
        </button>

        {/* Availability */}
        <div className="mb-4">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
              book.availability ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {book.availability ? book.availability : 'Not Available'}
          </span>
        </div>

        <div className="border-t border-gray-200 my-4" />

        {/* Location & Details */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mt-auto">
          <div className="flex items-center text-orange-700 text-sm font-medium">
            <FaMapMarkerAlt className="mr-2 text-base" />
            {book.shelf}
          </div>

          <Link
            to={`/books/${book.id}`}
            className="flex items-center gap-2 justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full text-sm transition duration-300 shadow-md"
          >
            <FaBookOpen />
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LibraryBook;
