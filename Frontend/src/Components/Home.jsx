import React from 'react';
import Hero from '../Components/Hero';
import Categories from '../Components/Categories';
import FeaturedProducts from '../Components/FeaturedProducts';
import Testimonials from '../Components/Testimonials';
import Newsletter from '../Components/Newsletter';

const Home = ({ addToCart, searchQuery }) => {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts addToCart={addToCart} searchQuery={searchQuery} />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;