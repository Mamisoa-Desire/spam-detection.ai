import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarItems = [
    { id: 1, title: 'Accueil', link: '/' },
    { id: 2, title: 'Comment ça marche ?', link: '/explication' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    // Modifiez la ligne de la balise <nav> comme ceci :
    <nav className={`navbar navbar-expand-md fixed-top ${s.customNavbar} ${ (scrolled || isOpen) ? s.scrolledNavbar : ''}`}>
      <div className="container">
        <Link className={`navbar-brand d-flex align-items-center ${s.logo}`} to="/" onClick={closeMenu}>
          <span className={s.textPrimary}>Spam</span>
          <span className={s.textSecondary}>Detection.AI</span>
        </Link>

        <button 
          className="navbar-toggler border-0" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          style={{ filter: 'invert(1)' }} 
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''} justify-content-end`}>
          <ul className="navbar-nav align-items-center">
            {navbarItems.map((item) => (
              <li key={item.id} className="nav-item">
                <Link to={item.link} className={`nav-link ${s.navLink}`} onClick={closeMenu}>
                  {item.title}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-md-4">
              <Link to="/scanner" onClick={closeMenu}>
                <button className={s.btnDetection}>Scanner un message</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}