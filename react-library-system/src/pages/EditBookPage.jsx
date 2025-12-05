import React, { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditBookPage = ({ updateBookSubmit }) => {
  const book = useLoaderData();
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState(book.title);
  const [category, setCategory] = useState(book.category);
  const [shelf, setShelf] = useState(book.shelf);
  const [description, setDescription] = useState(book.description);
  const [availability, setAvailability] = useState(book.availability);
  const [author, setAuthor] = useState(book.author);
  const [publisherName, setPublisherName] = useState(book.publisher.name);
  const [publisherDescription, setPublisherDescription] = useState(book.publisher.description);
  const [contactEmail, setContactEmail] = useState(book.publisher.contactEmail);
  const [contactPhone, setContactPhone] = useState(book.publisher.contactPhone);

  const submitForm = async (e) => {
    e.preventDefault();

    const updatedBook = {
      id,
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

    try {
      await updateBookSubmit(updatedBook);
      toast.success("Book updated successfully!");
      navigate(`/books/${id}`);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update book. Try again!");
    }
  };

  return (
    <section className="bg-amber-50 min-h-screen py-16">
      <div className="container max-w-3xl mx-auto px-6">
        <div className="bg-amber-100 p-10 rounded-2xl shadow-lg border border-amber-200">
          <h2 className="text-4xl font-serif font-extrabold text-amber-900 text-center mb-10">
            Edit Book
          </h2>

          <form onSubmit={submitForm} className="space-y-8">
            {/* Category */}
            <div>
              <label className="block text-lg font-semibold text-amber-900 mb-2">
                Book Category
              </label>
              <select
                className="w-full rounded-lg border border-amber-300 focus:border-amber-700 focus:ring focus:ring-amber-200 py-2 px-3 bg-amber-50"
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
              <label className="block text-lg font-semibold text-amber-900 mb-2">
                Book Title
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-amber-300 py-3 px-4 bg-amber-50 focus:border-amber-700 focus:ring focus:ring-amber-200"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-lg font-semibold text-amber-900 mb-2">
                Author
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-amber-300 py-3 px-4 bg-amber-50 focus:border-amber-700 focus:ring focus:ring-amber-200"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-lg font-semibold text-amber-900 mb-2">
                Description
              </label>
              <textarea
                rows="4"
                className="w-full rounded-lg border border-amber-300 py-3 px-4 bg-amber-50 focus:border-amber-700 focus:ring focus:ring-amber-200"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            {/* Shelf */}
            <div>
              <label className="block text-lg font-semibold text-amber-900 mb-2">
                Shelf Location
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-amber-300 py-3 px-4 bg-amber-50 focus:border-amber-700 focus:ring focus:ring-amber-200"
                value={shelf}
                onChange={(e) => setShelf(e.target.value)}
                required
              />
            </div>

            {/* Availability */}
            <div>
              <label className="block text-lg font-semibold text-amber-900 mb-2">
                Availability
              </label>
              <select
                className="w-full rounded-lg border border-amber-300 py-2 px-3 bg-amber-50 focus:border-amber-700 focus:ring focus:ring-amber-200"
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
              <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4">
                Publisher Information
              </h3>

              <div className="mb-4">
                <label className="block text-lg font-semibold text-amber-900 mb-2">
                  Publisher Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-amber-300 py-3 px-4 bg-amber-50 focus:border-amber-700 focus:ring focus:ring-amber-200"
                  value={publisherName}
                  onChange={(e) => setPublisherName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-semibold text-amber-900 mb-2">
                  Publisher Description
                </label>
                <textarea
                  rows="4"
                  className="w-full rounded-lg border border-amber-300 py-3 px-4 bg-amber-50 focus:border-amber-700 focus:ring focus:ring-amber-200"
                  value={publisherDescription}
                  onChange={(e) => setPublisherDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-lg font-semibold text-amber-900 mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-amber-300 py-3 px-4 bg-amber-50 focus:border-amber-700 focus:ring focus:ring-amber-200"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-semibold text-amber-900 mb-2">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-amber-300 py-3 px-4 bg-amber-50 focus:border-amber-700 focus:ring focus:ring-amber-200"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-amber-900 text-amber-50 py-3 rounded-full font-serif font-semibold text-lg shadow-md hover:bg-amber-700 transition duration-200"
              >
                Update Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditBookPage;
