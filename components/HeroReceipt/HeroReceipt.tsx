"use client";
import React, { useState, useEffect } from 'react';
import "./HeroReceipt.css";
import images from "../../constants/images";
import { MdOutlineContentCopy } from "react-icons/md";
import Image from "next/image";

const HeroReceipt: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        // Set initial time and date
        updateDateTime();
        
        // Update time every minute
        const interval = setInterval(updateDateTime, 60000);
        
        return () => clearInterval(interval);
    }, []);

    const updateDateTime = () => {
        const now = new Date();
        setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        setCurrentDate(now.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' }));
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText('paul@recker.io');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Show "COPIED!" for 2 seconds
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div className="app__receipt">
            <div className="app__receipt-tear"></div>
            <div className="app__receipt-heading">
                <h1 style={{ fontWeight: 800 }}>Hi, I am Paul</h1>
                <div className="app__receipt-timestamp">
                    <span>{currentDate}</span>
                    <span>{currentTime}</span>
                </div>
            </div>
            
            {[
                { name: '$whoami', content: 'Paul Recker' },
                { name: '$work', content: 'Student, Software Engineering' },
                { name: '$focus', content: 'Full Stack Development' },
                { name: '$location', content: 'Germany, North Rhine Westphalia' },
            ].map((item, index) => (
                <div className="app__receipt-frame" key={index}>
                    <div className="app__receipt-frame_name"><p>{item.name}</p></div>
                    <div className="app__receipt-frame_content"><p>{item.content}</p></div>
                </div>
            ))}
            
            <div className="app__receipt-message">
                <div className="app__receipt-message_logo">
                    <Image src={images.r_black} alt="" className="app__receipt-logo-image" />
                    <p>Send A Message</p>
                </div>
                <div className="app__receipt-message_frame">
                    <p>$mail</p>
                    <div 
                        className="app__receipt-message_frame-box"
                        onClick={copyToClipboard}
                        title="Click to copy email"
                    >
                        <p>paul@recker.io</p>
                        {!copied ? (
                            <MdOutlineContentCopy className="icon__royale" />
                        ) : (
                            <span className="copied-text">COPIED!</span>
                        )}
                    </div>
                </div>
                
                <div className="app__receipt-message_barcode">
                    <p>I III II III I I IIIII I IIIII III II I</p>
                    <p>01001000 01101000</p>
                </div>
            </div>
        </div>
    );
};

export default HeroReceipt;
