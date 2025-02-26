"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectModal.css';

interface ProjectModalProps {
  project: {
    id: string;
    title: string;
    subTitle: string;
    imgUrl: any;
    descr: string;
    fullDescription: string;
    technologies: string[];
    challenges: string;
    learnings: string;
    year: string;
    gh_link: string;
    demo_link: string;
  };
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle close with animation
  const handleClose = useCallback(() => {
    setIsActive(false);
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Match this with the animation duration
  }, [onClose]);

  const handleEscKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  }, [handleClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey);
    document.body.style.overflow = 'hidden';
    
    // Set active state after a small delay to trigger animation
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 50);
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
      clearTimeout(timer);
    };
  }, [handleEscKey]);

  // Close modal when clicking outside the content
  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }, [handleClose]);

  return (
    <div className={`project-modal-backdrop ${isActive ? 'active' : ''} ${isClosing ? 'closing' : ''}`} onClick={handleBackdropClick}>
      <div className="project-modal-content">
        <button className="project-modal-close" onClick={handleClose}>
          <FaTimes />
        </button>
        
        <div className="project-modal-header">
          <div className="project-modal-image-container">
            <Image 
              src={project.imgUrl} 
              alt={project.title} 
              className="project-modal-image"
              width={600}
              height={400}
            />
          </div>
          
          <div className="project-modal-title-container">
            <p className="p__mysin project-modal-subtitle">{project.subTitle}</p>
            <h2 className="h2__syne project-modal-title">{project.title}</h2>
            <p className="p__basic project-modal-year">{project.year}</p>
            
            <div className="project-modal-links">
              {project.gh_link && (
                <a href={project.gh_link} target="_blank" rel="noopener noreferrer" className="project-modal-link">
                  <FaGithub /> <span className="p__basic">GitHub</span>
                </a>
              )}
              {project.demo_link && (
                <a href={project.demo_link} target="_blank" rel="noopener noreferrer" className="project-modal-link">
                  <FaExternalLinkAlt /> <span className="p__basic">Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="project-modal-body">
          <div className="project-modal-description">
            <h3 className="h3__syne project-modal-section-title">Overview</h3>
            <p className="p__basic">{project.fullDescription}</p>
          </div>
          
          <div className="project-modal-technologies">
            <h3 className="h3__syne project-modal-section-title">Technologies</h3>
            <div className="project-modal-tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="project-modal-tech-tag p__basic">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="project-modal-challenges">
            <h3 className="h3__syne project-modal-section-title">Challenges</h3>
            <p className="p__basic">{project.challenges}</p>
          </div>
          
          <div className="project-modal-learnings">
            <h3 className="h3__syne project-modal-section-title">Learnings</h3>
            <p className="p__basic">{project.learnings}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 