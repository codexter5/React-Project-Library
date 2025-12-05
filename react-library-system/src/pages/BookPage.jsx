import React from "react";
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import {
  useParams,
  useLoaderData,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { toast } from "react-toastify";

const BookPage = ({ deleteBook }) => {
  const { id } = useParams();
  const book = useLoaderData();
  const navigate = useNavigate();

  const onDeleteClick = (bookId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (!confirmDelete) return;

    deleteBook(bookId);
    toast.success("Book deleted successfully");
    navigate("/books");
  };

  return (
    <>
      {/* Back Button */}
      <section className="bg-amber-50 border-b border-amber-200">
        <div className="container mx-auto py-6 px-6">
          <NavLink
            to="/books"
            className="text-amber-900 hover:text-amber-700 flex items-center font-medium"
          >
            <FaArrowLeft className="mr-2" /> Back to Library
          </NavLink>
        </div>
      </section>

      <section className="bg-amber-50 py-10">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT — MAIN BOOK CONTENT */}
          <main className="lg:col-span-2 space-y-8">
            {/* Book Header */}
            <div className="bg-amber-100 shadow-md rounded-xl p-8 border border-amber-200">
              <p className="text-amber-700 text-sm uppercase font-semibold tracking-wide mb-3">
                {book.category}
              </p>

              <h1 className="text-4xl font-serif font-extrabold text-amber-900 leading-tight mb-2">
                {book.title}
              </h1>

              <p className="text-lg text-amber-800 mb-4">
                by <span className="font-semibold">{book.author}</span>
              </p>

              <div className="flex items-center text-amber-800 text-lg">
                <FaMapMarkerAlt className="text-amber-700 mr-2" />
                <span className="font-medium">{book.shelf}</span>
              </div>
            </div>

            {/* Book Description */}
            <div className="bg-amber-100 shadow-md rounded-xl p-8 border border-amber-200">
              <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4">
                Book Description
              </h3>

              <p className="text-amber-800 leading-relaxed mb-6">
                {book.description}
              </p>

              <h3 className="text-2xl font-serif font-bold text-amber-900 mb-2">
                Availability
              </h3>

              <p
                className={`font-semibold text-lg ${
                  book.availability === "Available"
                    ? "text-green-700"
                    : book.availability === "Borrowed"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {book.availability}
              </p>
            </div>
          </main>

          {/* RIGHT — SIDEBAR */}
          <aside className="space-y-8">
            {/* Publisher Info */}
            <div className="bg-amber-100 shadow-md rounded-xl p-8 border border-amber-200">
              <h3 className="text-xl font-serif font-bold text-amber-900 mb-6">
                Publisher Information
              </h3>

              <h2 className="text-2xl font-serif font-semibold text-amber-900 mb-2">
                {book.publisher.name}
              </h2>

              <p className="text-amber-800 mb-4 leading-relaxed">
                {book.publisher.description}
              </p>

              <hr className="my-4 border-amber-200" />

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-amber-900">Contact Email</h4>
                  <p className="bg-amber-50 text-amber-900 p-2 rounded font-medium">
                    {book.publisher.contactEmail}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-amber-900">Contact Phone</h4>
                  <p className="bg-amber-50 text-amber-900 p-2 rounded font-medium">
                    {book.publisher.contactPhone}
                  </p>
                </div>
              </div>
            </div>

            {/* Manage Book */}
            <div className="bg-amber-100 shadow-md rounded-xl p-8 border border-amber-200 space-y-4">
              <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">
                Manage Book
              </h3>

              <NavLink
                to={`/edit-book/${book.id}`}
                className="w-full block text-center bg-amber-900 hover:bg-amber-700 text-amber-50 font-serif font-semibold py-3 rounded-full transition shadow"
              >
                Edit Book
              </NavLink>

              <button
                onClick={() => onDeleteClick(book.id)}
                className="w-full bg-red-600 hover:bg-red-700 text-amber-50 font-serif font-semibold py-3 rounded-full transition shadow"
              >
                Delete Book
              </button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

const bookLoader = async ({ params }) => {
  const res = await fetch(`/api/books/${params.id}`);
  return res.json();
};

export { BookPage as default, bookLoader };
