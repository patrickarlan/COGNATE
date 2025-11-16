import React from 'react';


export default function Header() {
  return (
    <header id="site-header" className="site-header">
      <div className="header-inner custom-header">
        <div className="brand" aria-label="COGNATE">
          COGNATE
        </div>
        <nav className="site-nav fw-bold" aria-label="Main navigation">
          <a className="nav-link" href="#home"><span className="nav-text">Home</span></a>
          <a className="nav-link" href="#about"><span className="nav-text">About Us</span></a>
          <a className="nav-link" href="#contact"><span className="nav-text">Contact Us</span></a>
        </nav>
      </div>
    </header>
  );
}