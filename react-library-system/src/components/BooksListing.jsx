import React, { useState, useEffect } from "react";
import LibraryBook from "./LibraryBook";
import Spinner from "./Spinner";

const BooksListing = ({ isHome = false }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      const apiUrl = isHome ? "/api/books?_limit=3" : "/api/books";

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.log("Error fetching books", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [isHome]);

  return (
    <>
      {/* Browse Books */}
      <section className="bg-amber-50 px-4 py-12">
        <div className="container-xl lg:container mx-auto">
          <h2 className="text-3xl font-serif font-bold text-amber-900 mb-8 text-center">
            {isHome ? "Recent Books" : "Browse Library"}
          </h2>

          {loading ? (
            <Spinner loading={loading} />
          ) : books.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {books.map((book) => (
                <LibraryBook
                  key={book.id}
                  book={book}
                  className="bg-amber-100 border border-amber-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4"
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-amber-700 font-medium mt-6">
              No books found.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default BooksListing;
