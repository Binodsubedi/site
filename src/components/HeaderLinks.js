import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Login from './Login';
import Blog from './Blog';
import Dashboard from './Dashboard';

const HeaderLinks = () => {
  return (
    <header className="header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/About-me" element={<AboutMe />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
