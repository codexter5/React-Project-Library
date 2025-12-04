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
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Books" : "Browse Library"}
          </h2>

          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {books.map((book) => (
                <LibraryBook key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BooksListing;
