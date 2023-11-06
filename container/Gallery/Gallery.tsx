"use client";
import React, { useRef } from 'react';
import Image from 'next/image'
import { Heading } from '../../components';
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import './Gallery.css';
import data from "../../constants/data";

const Gallery: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

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

    return (
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
                    {data.projects.map((value, index) => (
                        <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                            <div className="app__gallery-images_card-design">
                                <Image src={value.imgUrl} alt="logo" />
                                <div className="app__gallery-images_card-description">
                                    <p className="p__mysin" style={{ fontSize: "10px" }}>{value.subTitle}</p>
                                    <h3 className="h3__syne">{value.title}</h3>
                                    <p className="p__basic">{value.descr}</p>
                                    {value.gh_link === '' ? (
                                        <br />
                                    ) : (
                                        <a className="a__basic" href={value.gh_link} target="_blank" rel="noopener noreferrer">GitHub Link</a>
                                    )}
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

    )
};

export default Gallery;
