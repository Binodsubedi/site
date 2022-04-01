import React from 'react';
import './../styles/notFound.css';
import Background from './../images/extras/notFound.jpg';

const NotFound = () => {
  return (
    <div
      className="NotFoundOne"
      style={{ backgroundImage: `url(${Background})` }}
    ></div>
  );
};

export default NotFound;
