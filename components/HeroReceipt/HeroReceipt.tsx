"use client";
import React, { useState } from 'react';
import "./HeroReceipt.css";
import images from "../../constants/images";
import { MdOutlineContentCopy } from "react-icons/md";
import Image from "next/image";


const HeroReceipt: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText('paul@recker.io');
            setCopied(true);
            setTimeout(() => setCopied(false), 1000); // Reset copied state after 1 second
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div className="app__receipt">
            <div className="app__receipt-heading"><p>Hi, I am Paul</p></div>
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
                    <Image src={images.r_black} alt="" />
                    <p>Send A Message</p>
                </div>
                <div className="app__receipt-message_frame">
                    <p className="">$mail</p>
                    <div className="app__receipt-message_frame-box">
                        <p>paul@recker.io</p>
                        {!copied ? (
                            <MdOutlineContentCopy
                                className="icon__royale"
                                onClick={copyToClipboard}
                                style={{ cursor: 'pointer' }}
                                title="Copy"
                            />
                        ) : (
                            <span style={{ marginLeft: '10px', color: '#703e05' }}>Copied!</span>
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
