import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Readers Card */}
          <Card className="bg-amber-100 border border-amber-200 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-serif font-extrabold text-amber-900 mb-4">
              For Readers
            </h2>
            <p className="text-amber-700 mb-6">
              Browse our library and start your reading journey today.
            </p>
            <Link
              to="/books"
              className="inline-block bg-amber-900 text-amber-50 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-amber-700 transition duration-300"
            >
              Browse Books
            </Link>
          </Card>

          {/* Donators Card */}
          <Card className="bg-amber-50 border border-amber-200 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-serif font-extrabold text-amber-900 mb-4">
              For Donators
            </h2>
            <p className="text-amber-700 mb-6">
              List your books for others to read and contribute to our library.
            </p>
            <Link
              to="/add-book"
              className="inline-block bg-amber-900 text-amber-50 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-amber-700 transition duration-300"
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
