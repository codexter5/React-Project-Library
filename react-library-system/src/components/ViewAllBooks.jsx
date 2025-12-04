import React from "react";
import { Link } from "react-router-dom";

const ViewAllBooks = () => {
  return (
    <section className="flex justify-center my-12">
      <Link
        to="/books"
        className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:from-indigo-700 hover:to-indigo-600 transition duration-300 text-lg"
      >
        View All Books
      </Link>
    </section>
  );
};

export default ViewAllBooks;
