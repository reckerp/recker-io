import React from 'react';
import {Heading} from "../../components";

import "./WhoAmI.css"

const WhoAmI: React.FC = () => {
    return (
        <div className="app__whoami">
            <Heading title="Crafting Digital Experiences" subtitle="Good to see you"/>
            <p className="p__syne">
                Welcome to my digital space! My name is Paul, I'm a software engineering student with a passion for exploring the latest advancements in web design, backend technologies, cyber security, and web3.
                <br/>
                As a software engineer, I'm dedicated to leveraging technology to solve complex problems and make a positive impact on society. I approach each new challenge with enthusiasm and openness, eager to learn and apply innovative solutions that deliver value to users and contribute to progress in various domains. Whether it's developing web applications, optimizing backend systems, or exploring emerging technologies, I'm committed to delivering high-quality solutions that drive meaningful change.
                <br/>
                If you're interested in working together or just want to connect over coffee, <a href="mailto:paul@recker.io?subject=Let's wok together">drop me a message!</a>
            </p>
            <div className="hr__line-left"></div>
        </div>

    );
};

export default WhoAmI;
