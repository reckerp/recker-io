"use client";
import React from 'react';
import Image from 'next/image';
import { Heading, AnimatedSection } from '../../components';
import './Experience.css';
import data from "../../constants/data";

interface Job {
    company: string;
    title: string;
    period: string;
    companyIcon: any;
    description: string;
}

const Experience: React.FC = () => {
    return (
        <>
            <AnimatedSection direction="left" delay={100}>
                <div className="app__experience flex__center">
                    <div className="app__experience-content">
                        <Heading title="My Experience" subtitle="Work" />
                        <p className="p__syne" style={{ textAlign: "left" }}>
                            A timeline of my professional journey and the skills I've developed along the way.
                        </p>
                    </div>
                    <div className="app__experience-timeline">
                        {data.jobs && (data.jobs as Job[]).map((job, index) => (
                            <div className="app__experience-item" key={`experience-${index}`}>
                                <div className="app__experience-item-header">
                                    <div className="app__experience-item-company">
                                        {job.companyIcon && (
                                            <div className="app__experience-item-icon">
                                                <Image 
                                                    src={job.companyIcon} 
                                                    alt={`${job.company} logo`} 
                                                    width={40} 
                                                    height={40} 
                                                />
                                            </div>
                                        )}
                                        <div className="app__experience-item-info">
                                            <h3 className="h3__syne">{job.company}</h3>
                                            <h4 className="p__mysin" style={{ fontSize: "12px" }}>{job.title}</h4>
                                        </div>
                                    </div>
                                    <div className="app__experience-item-duration">
                                        <p className="p__basic">{job.period}</p>
                                    </div>
                                </div>
                                <div className="app__experience-item-description">
                                    <p className="p__basic" dangerouslySetInnerHTML={{ __html: job.description }}></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </>
    );
};

export default Experience; 