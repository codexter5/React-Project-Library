import React from 'react';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import BooksListing from '../components/BooksListing';
import ViewAllBooks from '../components/ViewAllBooks';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero 
        title="Welcome to the Library"
        subtitle="Explore a world of books, knowledge, and imagination."
        ctaText="Browse Books"
        ctaLink="/books"
        className="bg-amber-100"
      />

      {/* Home Cards (For Readers / Donators) */}
      <section className="bg-amber-50 py-16">
        <HomeCards />
      </section>

      {/* Recent Books */}
      <section className="bg-amber-50 px-4 py-10">
        <BooksListing isHome={true} />
      </section>

      {/* View All Books CTA */}
      <section className="bg-amber-100 py-12 text-center rounded-t-3xl">
        <ViewAllBooks />
      </section>
    </>
  );
};

export default HomePage;
