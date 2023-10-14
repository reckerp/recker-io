import React from 'react';

import "./TechStack.css"
import {Heading} from "../../components";
import data from "../../constants/data";
const TechStack: React.FC = () => {
    return (
        <>
            <div className="hr__line-right"></div>
            <div className="app__techstack">
                <Heading title="Tech Stack" subtitle="Skills"/>
                <div className="app__techstack-categories">
                    <div className="app__techstack-categories_pl">
                        <p className="p__syne">Programming Languages</p>
                        <ul style={{marginTop: "1rem"}}>
                            {data.pl.map((value) => (
                                value ? <li className="li__blue">{value}</li> : <li></li>
                            ))}
                        </ul>
                    </div>
                    <div className="app__techstack-categories_tech">
                        <p className="p__syne">Technologies</p>
                        <ul style={{marginTop: "1rem"}}>
                            {data.tech.map((value) => (
                                value ? <li className="li__blue">{value}</li> : <li></li>
                            ))}
                        </ul>
                    </div>
                    <div className="app__techstack-categories_other">
                        <p className="p__syne">Other</p>
                        <ul style={{marginTop: "1rem"}}>
                            {data.other.map((value) => (
                                value ? <li className="li__blue">{value}</li> : <li></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hr__line-left"></div>
        </>

    );
};

export default TechStack;
