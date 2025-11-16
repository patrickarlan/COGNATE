import React from 'react';


export default function Header() {
  return (
    <header id="site-header" className="site-header">
      <div className="header-inner custom-header">
        <div className="brand" aria-label="COGNATE">
          COGNATE
        </div>
        <nav className="site-nav" aria-label="Main navigation">
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#about">About Us</a>
          <a className="nav-link" href="#contact">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}