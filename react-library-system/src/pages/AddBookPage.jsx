import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddBookPage = ({ addBookSubmit }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Programming");
  const [shelf, setShelf] = useState("");
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState("Available");
  const [author, setAuthor] = useState("");
  const [publisherName, setPublisherName] = useState("");
  const [publisherDescription, setPublisherDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newBook = {
      title,
      category,
      shelf,
      description,
      availability,
      author,
      publisher: {
        name: publisherName,
        description: publisherDescription,
        contactEmail,
        contactPhone,
      },
    };

    addBookSubmit(newBook);
    toast.success("Book Added Successfully");
    navigate("/books");
  };

  return (
    <section className="bg-amber-50 min-h-screen py-16">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="bg-amber-100 shadow-lg rounded-2xl p-10 border border-amber-200">
          <h2 className="text-4xl font-serif font-extrabold text-amber-900 text-center mb-10">
            Add New Book
          </h2>

          <form onSubmit={submitForm} className="space-y-6">
            {/* Category */}
            <div>
              <label className="block text-lg font-medium text-amber-900 mb-2">
                Book Category
              </label>
              <select
                className="w-full rounded-lg border border-amber-300 bg-amber-50 py-3 px-4 focus:border-amber-700 focus:ring focus:ring-amber-200"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="Programming">Programming</option>
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="AI & ML">AI & ML</option>
                <option value="Mobile Development">Mobile Development</option>
                <option value="Networking">Networking</option>
              </select>
            </div>

            {/* Title */}
            <div>
              <label className="block text-lg font-medium text-amber-900 mb-2">
                Book Title
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-amber-300 py-3 px-4 bg-amber-50 focus:border-amber-700 focus:ring focus:ring-amber-200"
                placeholder="e.g. Mastering React"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-lg font-medium text-amber-900 mb-2">
                Author Name
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-amber-300 py-3 px-4 bg-amber-50 focus:border-amber-700 focus:ring focus:ring-amber-200"
                placeholder="Author Name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-lg font-medium text-amber-900 mb-2">
                Description
              </label>
              <textarea
                className="w-full rounded-lg border border-amber-300 py-3 px-4 bg-amber-50 focus:border-amber-700 focus:ring focus:ring-amber-200"
                rows="4"
                placeholder="Book summary, topics covered, etc."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            {/* Shelf */}
            <div>
              <label className="block text-lg font-medium text-amber-900 mb-2">
                Shelf Location
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-amber-300 py-3 px-4 bg-amber-50 focus:border-amber-700 focus:ring focus:ring-amber-200"
                placeholder="e.g. Rack A1 - Shelf 3"
                value={shelf}
                onChange={(e) => setShelf(e.target.value)}
                required
              />
            </div>

            {/* Availability */}
            <div>
              <label className="block text-lg font-medium text-amber-900 mb-2">
                Availability
              </label>
              <select
                className="w-full rounded-lg border border-amber-300 bg-amber-50 py-3 px-4 focus:border-amber-700 focus:ring focus:ring-amber-200"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                required
              >
                <option value="Available">Available</option>
                <option value="Borrowed">Borrowed</option>
                <option value="Reserved">Reserved</option>
              </select>
            </div>

            {/* Publisher Info */}
            <div className="pt-6 border-t border-amber-200">
              <h3 className="text-2xl font-serif font-semibold text-amber-900 mb-4">
                Publisher Information
              </h3>

              <div className="mb-4">
                <label className="block text-amber-900 font-medium mb-2">
                  Publisher Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-amber-300 py-3 px-4 bg-amber-50 focus:border-amber-700 focus:ring focus:ring-amber-200"
                  placeholder="Publisher Name"
                  value={publisherName}
                  onChange={(e) => setPublisherName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-amber-900 font-medium mb-2">
                  Publisher Description
                </label>
                <textarea
                  className="w-full rounded-lg border border-amber-300 py-3 px-4 bg-amber-50 focus:border-amber-700 focus:ring focus:ring-amber-200"
                  rows="4"
                  placeholder="About the publisher"
                  value={publisherDescription}
                  onChange={(e) => setPublisherDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-amber-900 font-medium mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-amber-300 py-3 px-4 bg-amber-50 focus:border-amber-700 focus:ring focus:ring-amber-200"
                  placeholder="Publisher contact email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-amber-900 font-medium mb-2">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-amber-300 py-3 px-4 bg-amber-50 focus:border-amber-700 focus:ring focus:ring-amber-200"
                  placeholder="Optional contact phone"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />
              </div>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full bg-amber-900 text-amber-50 py-3 rounded-full font-serif font-semibold text-lg shadow-md hover:bg-amber-700 transition duration-200"
              >
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddBookPage;
