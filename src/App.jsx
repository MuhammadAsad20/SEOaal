// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Blog from "./Pages/Blog";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Layout wrapper for all pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* This renders Home at "/" */}
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
        </Route>


      </Routes>
    </>
  );
}

export default App;
