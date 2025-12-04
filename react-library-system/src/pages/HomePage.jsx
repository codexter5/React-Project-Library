import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import BooksListing from '../components/BooksListing'
import ViewAllBooks from '../components/ViewAllBooks'

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <BooksListing isHome={true} />
      <ViewAllBooks />
    </>
  )
}

export default HomePage
