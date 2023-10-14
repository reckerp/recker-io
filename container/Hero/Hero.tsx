import React from 'react';
import images from '../../constants/images'
import Image from 'next/image'
import "./Hero.css";
import {HeroReceipt} from "../../components";

const Hero: React.FC = () => {
    return (
        <div className="app__hero">
            <div className="app__hero-welcome">
                <Image src={images.welcome} alt="logo"/>
            </div>
            <HeroReceipt/>
        </div>
    );
};

export default Hero;
