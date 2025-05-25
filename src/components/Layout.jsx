// components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home';

const Layout = () => {
  return (
    <>
      <Header />
      <main className='mb-30'> {/* Space for fixed header */}
        <Home /> {/* This will render the child route's content */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
