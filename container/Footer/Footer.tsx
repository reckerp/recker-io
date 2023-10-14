import React from 'react';
import images from "../../constants/images";

import "./Footer.css"

const Footer: React.FC = () => {
    return (
        <div className="app__footer">
            <img src={images.logo} alt=""/>
            <h1 className="h1__syne glow">recker.io</h1>
            <p>All rights reserved</p>
            <div className="app__footer-icons">
                <a href="https://github.com/reckerp"><img src={images.icon_github} alt=""/></a>
                <a href="https://linkedin.com/in/reckerpaul"><img src={images.icon_linkedin} alt=""/></a>
                <a href="https://twitter.com/reckerpaul"><img src={images.icon_twitter} alt=""/></a>
                <a href="https://instagram.com/prckr"><img src={images.icon_instagram} alt=""/></a>
            </div>
        </div>
    );
};

export default Footer;
