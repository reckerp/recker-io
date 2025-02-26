"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import images from "../../constants/images";
import Link from 'next/link';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const menuItems = [
    { label: '.toGithub()', url: 'https://github.com/reckerp/' },
    { label: '.toLinkedIn()', url: 'https://linkedin.com/in/reckerpaul' },
    { label: '.contactMe()', url: 'mailto:paul@recker.io?subject=Let\'s work together' },
  ];

  return (
    <nav className={`app__navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="app__navbar-logo">
        <Link href={'/'}>
          <Image
            src={images.logo}
            alt="Recker"
            width={50}
            height={50}
            className="logo-image"
          />
        </Link>
      </div>
      <ul className="app__navbar-links">
        {menuItems.map((item, index) => (
          <li key={index} className="li__syne nav-item">
            <a href={item.url} className="nav-link">
              <span className="nav-text">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-small-screen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} className="hamburger-icon" />
        {toggleMenu && (
          <div className="app__navbar-small-screen_overlay flex__center slide-bottom">
            <MdClose fontSize={27} className="overlay__close"
              onClick={() => setToggleMenu(false)} />
            <div className="app__navbar-logo">
              <Image src={images.logo} alt="Recker" width={50} height={50} className="logo-image" />
            </div>
            <ul className="app__navbar-small-screen_links">
              {menuItems.map((item, index) => (
                <li key={index} className="li__syne mobile-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <a href={item.url} className="mobile-nav-link">
                    <span className="nav-text">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
