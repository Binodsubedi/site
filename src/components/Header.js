import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ className }) => {
  return (
    <div className={className}>
      <Link to="/">Blog</Link>
      <Link to="/About-me">About-me</Link>
    </div>
  );
};

export default Header;
