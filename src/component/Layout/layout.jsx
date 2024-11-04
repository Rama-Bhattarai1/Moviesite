
import React from 'react';
import Footer from './footer';
import FooterSecond from './footersecond';
import Navbar from './navbar';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* Conditionally render the footer based on the current location */}
      {location.pathname === "/homepage" ? <Footer /> : <FooterSecond />}
    </div>
  );
}

export default Layout;
