import React from 'react';
import Image from 'next/image';
import {Heading, AnimatedSection} from "../../components";
import { FaRocket, FaLightbulb, FaGlobeAmericas, FaCode } from 'react-icons/fa';
import images from '../../constants/images';

import "./WhoAmI.css"

interface HighlightProps {
    icon: React.ReactNode;
    text: string;
}

const Highlight: React.FC<HighlightProps> = ({ icon, text }) => (
    <div className="app__whoami-highlight">
        <div className="app__whoami-highlight-icon">
            {icon}
        </div>
        <span className="app__whoami-highlight-text p__basic">{text}</span>
    </div>
);

const WhoAmI: React.FC = () => {
    return (
        <AnimatedSection direction="up" delay={300}>
            <div className="app__whoami">
                <Heading title="Crafting Digital Experiences" subtitle="Good to see you"/>
                
                <div className="app__whoami-content">
                    <div className="app__whoami-photo-column">
                        <div className="app__whoami-photo">
                            <Image 
                                src={images.me} 
                                alt="Paul Recker" 
                                width={180} 
                                height={180}
                                className="app__whoami-avatar"
                            />
                        </div>
                        
                        <h3 className="app__whoami-greeting h3__syne">Hi, I'm Paul</h3>
                        
                        <div className="app__whoami-highlights">
                            <Highlight icon={<FaRocket />} text="Problem Solver" />
                            <Highlight icon={<FaLightbulb />} text="Innovative Thinker" />
                            <Highlight icon={<FaGlobeAmericas />} text="Tech Enthusiast" />
                            <Highlight icon={<FaCode />} text="Software Engineer" />
                        </div>
                    </div>
                    
                    <div className="app__whoami-text-column">
                        <p className="p__syne app__whoami-paragraph">
                            Welcome to my digital space! I'm a <span className="highlight">software engineering student</span> with a passion for exploring the latest advancements in web design, backend technologies, cyber security, and web3.
                        </p>
                        
                        <p className="p__syne app__whoami-paragraph">
                            As a software engineer, I'm dedicated to <span className="highlight">leveraging technology</span> to solve complex problems and make a positive impact on society. I approach each new challenge with enthusiasm and openness, eager to learn and apply innovative solutions.
                        </p>
                        
                        <p className="p__syne app__whoami-paragraph">
                            Whether it's developing web applications, optimizing backend systems, or exploring emerging technologies, I'm committed to delivering <span className="highlight">high-quality solutions</span> that drive meaningful change.
                        </p>
                        
                        <div className="app__whoami-cta-container">
                            <a href="mailto:paul@recker.io?subject=Let's work together" className="app__whoami-cta">
                                Let's Connect
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default WhoAmI;
