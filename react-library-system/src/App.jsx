import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import BooksPage from "./pages/BooksPage";
import NotFoundPage from "./pages/NotFoundPage";
import BookPage, { bookLoader } from "./pages/BookPage";
import AddBookPage from "./pages/AddBookPage";
import EditBookPage from "./pages/EditBookPage";

const App = () => {
  // Add New Book
  const addBook = async (newBook) => {
    await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    });
  };

  // Delete Book
  const deleteBook = async (id) => {
    await fetch(`/api/books/${id}`, { method: "DELETE" });
  };

  // Update Book
  const updateBook = async (book) => {
    await fetch(`/api/books/${book.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />

        {/* Books */}
        <Route path="/books" element={<BooksPage />} />
        <Route path="/add-book" element={<AddBookPage addBookSubmit={addBook} />} />
        
        {/* Book Details and Edit */}
        <Route
          path="/books/:id"
          element={<BookPage deleteBook={deleteBook} />}
          loader={bookLoader}
        />
        <Route
          path="/edit-book/:id"
          element={<EditBookPage updateBookSubmit={updateBook} />}
          loader={bookLoader}
        />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
