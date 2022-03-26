import React, { Component } from 'react';
import Header from './Header';
import Intro from './AboutMeComp/Intro';
import Programminglang from './AboutMeComp/Programminglang';
import Experience from './AboutMeComp/Experience';
import Extras from './AboutMeComp/Extras';
import Footer from './AboutMeComp/Footer';
import './../styles/about.css';

class AboutMe extends Component {
  render() {
    return (
      <div className="AbContainer">
        <Header className="AbHeader" />
        <Intro />
        <Programminglang />
        <Experience />
        <Extras />
        <Footer />
      </div>
    );
  }
}

export default AboutMe;
