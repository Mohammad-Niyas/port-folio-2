import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="nav-logo">
          Mohammad <span className="gradient-text">Niyas</span>
        </div>
        <div className="nav-links">
          <a href="#about" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>About</a>
          <a href="#skills" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Skills</a>
          <a href="#projects" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Projects</a>
          <a href="#contact" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
