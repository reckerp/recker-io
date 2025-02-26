"use client";
import React, { useState, useEffect } from 'react';

import "./TechStack.css"
import { Heading, AnimatedSection } from "../../components";
import data from "../../constants/data";

// Define skill level categories with descriptions
const skillLevels = [
  { name: "Familiar", description: "Working knowledge with some practical experience" },
  { name: "Proficient", description: "Solid understanding and regular professional use" },
  { name: "Advanced", description: "Deep knowledge and extensive professional experience" },
  { name: "Expert", description: "Comprehensive mastery and ability to innovate" }
];

const TechStack: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<number>(0);
    const [animate, setAnimate] = useState<boolean>(true);
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    // Reset animation when category changes
    useEffect(() => {
        setAnimate(false);
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 50);
        
        return () => clearTimeout(timer);
    }, [activeCategory]);

    // Convert numeric level to text category
    const getLevelText = (level: number): string => {
        if (level < 70) return skillLevels[0].name;
        if (level < 80) return skillLevels[1].name;
        if (level < 90) return skillLevels[2].name;
        return skillLevels[3].name;
    };

    // Get level index for a given level
    const getLevelIndex = (level: number): number => {
        if (level < 70) return 0;
        if (level < 80) return 1;
        if (level < 90) return 2;
        return 3;
    };

    return (
        <>
            <AnimatedSection direction="right" delay={200}>
                <div className="app__techstack">
                    <Heading title="Tech Stack" subtitle="Skills"/>
                    <p className="p__syne app__techstack-intro">
                        My technical toolkit spans frontend, backend, and DevOps technologies, 
                        with a focus on building scalable and user-friendly applications.
                    </p>
                    
                    <div className="app__techstack-tabs">
                        {data.techStack.map((category, index) => (
                            <button 
                                key={`category-${index}`}
                                className={`app__techstack-tab ${activeCategory === index ? 'active' : ''}`}
                                onClick={() => setActiveCategory(index)}
                            >
                                {category.category}
                            </button>
                        ))}
                    </div>
                    
                    <div className="app__techstack-content">
                        <h3 className="app__techstack-category-title">
                            {data.techStack[activeCategory].category}
                        </h3>
                        
                        <div className="app__techstack-skills">
                            {data.techStack[activeCategory].skills.map((skill, index) => (
                                <div 
                                    className="app__techstack-skill" 
                                    key={`skill-${index}`}
                                    onMouseEnter={() => setHoveredSkill(skill.name)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                >
                                    <div className="app__techstack-skill-info">
                                        <span className="app__techstack-skill-name">{skill.name}</span>
                                        <span className="app__techstack-skill-level">
                                            {getLevelText(skill.level)}
                                        </span>
                                    </div>
                                    <div className="app__techstack-skill-bar">
                                        <div 
                                            className={`app__techstack-skill-progress ${animate ? 'animate' : ''}`} 
                                            style={{ 
                                                width: animate ? `${skill.level}%` : '0%',
                                                transitionDelay: `${index * 0.1}s`
                                            }}
                                        ></div>
                                    </div>
                                    {hoveredSkill === skill.name && (
                                        <div className="app__techstack-skill-tooltip">
                                            <p>{skillLevels[getLevelIndex(skill.level)].description}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        
                        <div className="app__techstack-legend">
                            <p className="app__techstack-legend-title">Skill Levels:</p>
                            <div className="app__techstack-legend-items">
                                {skillLevels.map((level, index) => (
                                    <div className="app__techstack-legend-item" key={`level-${index}`}>
                                        <span className="app__techstack-legend-name">{level.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </>
    );
};

export default TechStack;
