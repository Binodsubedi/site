import React, { Component } from 'react';
import Footer from './AboutMeComp/Footer';
import Header from './Header';
import BlogMain from './BlogComponent/BlogMain';
import './../styles/blog.css';

class Blog extends Component {
  render() {
    return (
      <div className="blogContainer">
        <Header className="AbHeader" />
        <BlogMain />
        <Footer />
      </div>
    );
  }
}

export default Blog;
