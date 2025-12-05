import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="bg-amber-50 min-h-screen flex flex-col justify-center items-center px-4">
      <FaExclamationTriangle className="text-amber-600 text-6xl mb-4" />
      <h1 className="text-6xl font-serif font-extrabold text-amber-900 mb-4">
        404 Not Found
      </h1>
      <p className="text-2xl text-amber-800 mb-6">
        This page does not exist
      </p>
      <Link
        to="/"
        className="bg-amber-900 text-amber-50 font-semibold py-2 px-6 rounded-full shadow hover:bg-amber-700 transition duration-200"
      >
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
