import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Readers Card */}
          <Card className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              For Readers
            </h2>
            <p className="text-gray-600 mb-6">
              Browse our React Library and start your reading journey today.
            </p>
            <Link
              to="/books"
              className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
            >
              Browse Books
            </Link>
          </Card>

          {/* Donators Card */}
          <Card className="bg-indigo-50 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-extrabold text-indigo-900 mb-4">
              For Donators
            </h2>
            <p className="text-indigo-700 mb-6">
              List your book for others to read it and contribute to our library.
            </p>
            <Link
              to="/add-book"
              className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
            >
              Add Book
            </Link>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default HomeCards;
