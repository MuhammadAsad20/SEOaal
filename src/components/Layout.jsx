// components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main className='mb-30'> {/* Space for fixed header */}
        <Outlet /> {/* This will render the child route's content */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
