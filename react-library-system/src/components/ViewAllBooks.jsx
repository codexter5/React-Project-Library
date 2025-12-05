import React from "react";
import { Link } from "react-router-dom";

const ViewAllBooks = () => {
  return (
    <section className="flex justify-center my-12">
      <Link
        to="/books"
        className="bg-amber-900 text-amber-50 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-amber-700 transition duration-300 text-lg"
      >
        View All Books
      </Link>
    </section>
  );
};

export default ViewAllBooks;
