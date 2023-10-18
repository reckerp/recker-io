import React from 'react';
import images from "../../constants/images";
import Image from "next/image";

import "./Footer.css"
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <div className="app__footer">
            <Image src={images.logo} alt="Recker" width={50} height={50}/>
            <h1 className="h1__syne glow">recker.io</h1>
            <p>All rights reserved</p>
            <div className="app__footer-links">
              <Link className='app__footer-links_link' href="/imprint">Imprint</Link>
              <p className='app__footer-links_seperator'>|</p>
              <Link className='app__footer-links_link' href="/privacy-policy">Privacy</Link>
            </div>
            <div className="app__footer-icons">
                <a href="https://github.com/reckerp"><Image src={images.icon_github} alt='Github'/></a>
                <a href="https://linkedin.com/in/reckerpaul"><Image src={images.icon_linkedin} alt='LinkedIn'/></a>
            </div>
        </div>
    );
};

export default Footer;
