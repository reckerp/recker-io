"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image'
import { Heading, AnimatedSection } from '../../components';
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import './Gallery.css';
import data from "../../constants/data";
import ProjectModal from '../../components/ProjectModal/ProjectModal';

const Gallery: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const scroll = (direction: 'left' | 'right') => {
        const current = scrollRef.current;
        if (current) {
            if (direction === 'left') {
                current.scrollLeft -= 300;
            } else {
                current.scrollLeft += 300;
            }
        }
    }

    const openProjectModal = (project: any) => {
        setSelectedProject(project);
        // Prevent body scrolling when modal is open
        document.body.style.overflow = 'hidden';
    }

    const closeProjectModal = () => {
        setSelectedProject(null);
        // Restore body scrolling
        document.body.style.overflow = 'auto';
    }

    return (
        <>
            <AnimatedSection direction="up">
                <div className="app__gallery flex__center">
                    <div className="app__gallery-content">
                        <Heading title="My Projects" subtitle="Work" />
                        <p className="p__syne" style={{ textAlign: "right" }}>
                            Take a tour of my portfolio and discover my favorite and most recent projects.
                        </p>
                        <a href="https://github.com/reckerp" className="custom__button">View More</a>
                    </div>
                    <div className="app__gallery-images">
                        <div className="app__gallery-images_container" ref={scrollRef}>
                            {data.projects.map((project, index) => (
                                <div className="app__gallery-images_card" key={`gallery_image-${index + 1}`}>
                                    <div className="app__gallery-images_card-design">
                                        <div className="app__gallery-images_card-image">
                                            <Image 
                                                src={project.imgUrl} 
                                                alt={project.title} 
                                                className="app__gallery-images_card-img"
                                                width={280}
                                                height={240}
                                            />
                                            <div className="app__gallery-images_card-overlay">
                                                <button 
                                                    className="app__gallery-images_card-button"
                                                    onClick={() => openProjectModal(project)}
                                                >
                                                    <FaInfoCircle /> View Details
                                                </button>
                                            </div>
                                        </div>
                                        <div className="app__gallery-images_card-content">
                                            <p className="p__mysin app__gallery-images_card-subtitle">{project.subTitle}</p>
                                            <h3 className="h3__syne app__gallery-images_card-title">{project.title}</h3>
                                            <p className="p__basic app__gallery-images_card-description">{project.descr}</p>
                                            <div className="app__gallery-images_card-links">
                                                {project.gh_link && (
                                                    <a 
                                                        href={project.gh_link} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="app__gallery-images_card-link"
                                                    >
                                                        <FaGithub />
                                                    </a>
                                                )}
                                                {project.demo_link && (
                                                    <a 
                                                        href={project.demo_link} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="app__gallery-images_card-link"
                                                    >
                                                        <FaExternalLinkAlt />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="app__gallery-images_arrows">
                            <BsArrowLeftShort className="app__gallery__arrow-icon" onClick={() => scroll('left')} />
                            <BsArrowRightShort className="app__gallery__arrow-icon" onClick={() => scroll('right')} />
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={closeProjectModal} 
                />
            )}
        </>
    )
};

export default Gallery;
