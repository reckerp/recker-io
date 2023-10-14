"use client";
import React, { useState } from 'react';
import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import images from "../../constants/images";

import './Navbar.css';

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuItems = [
    { label: '.toGithub()', url: 'https://github.com/reckerp/' },
    { label: '.toLinkedIn()', url: 'https://linkedin.com/in/reckerpaul' },
    { label: '.contactMe()', url: 'mailto:paul@recker.io?subject=Let\'s work together' },
  ];

  return (
    <nav className="app__navbar">
    <div className="app__navbar-logo">
        <Image
            src={images.logo}
            alt="Recker"
            width={50}
            height={50}
        />
    </div>
    <ul className="app__navbar-links">
        {menuItems.map((item, index) => (
            <li key={index} className="li__syne">
                <a href={item.url}>{item.label}</a>
            </li>
        ))}
    </ul>
    <div className="app__navbar-small-screen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
            <div className="app__navbar-small-screen_overlay flex__center slide-bottom">
                <MdClose fontSize={27} className="overlay__close"
                    onClick={() => setToggleMenu(false)}/>
                <div className="app__navbar-logo">
                    <img src={images.logo} alt="Recker"/>
                </div>
                <ul className="app__navbar-small-screen_links">
                    {menuItems.map((item, index) => (
                        <li key={index} className="li__syne">
                            <a href={item.url}>{item.label}</a>
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
