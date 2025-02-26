"use client";
import React from 'react';
import "./Hero.css";
import { HeroReceipt, AnimatedSection } from "../../components";

const Hero: React.FC = () => {
    const scrollToNext = () => {
        // Scroll to the next section (WhoAmI)
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatedSection direction="down" delay={0}>
            <div className="app__hero">
                <div className="app__hero-stars"></div>
                <div className="app__hero-receipt-container">
                    <HeroReceipt />
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Hero;
