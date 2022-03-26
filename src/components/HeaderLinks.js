import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Blog from './Blog';

const HeaderLinks = () => {
  return (
    <header className="header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/About-me" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>

      {/* <div className="links">
        <Link to="/">Blog</Link>
        <Link to="/About-me">About-me</Link>
      </div>
      <div className="main-container">
        <Blog />
      </div> */}
    </header>
  );
};

export default HeaderLinks;
