"use client";
import React from 'react'
import './CookieBanner.css';

import { useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../../utils/storageHelper';

const CookieBanner = () => {
    const [cookieConsent, setCookieConsent] = useState(false);
    const [showCookieBanner, setShowCookieBanner] = useState(false);
    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null)
        console.log("storedCookieConsent: ", storedCookieConsent)
        setCookieConsent(storedCookieConsent)
        if (storedCookieConsent === null) {
            setShowCookieBanner(true)
        }

    }, [setCookieConsent])


    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied'
        console.log("newValue: ", newValue)
        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });

    }, [cookieConsent]);


    const handleClick = (accept: boolean) => {
        setCookieConsent(accept)
        setLocalStorage("cookie_consent", accept)
        setShowCookieBanner(false)
    }


    return (
        <>
            {showCookieBanner &&
                <div className='app__CookieBanner'>
                    <div className='app__CookieBanner__heading-container'>
                        <h3 className='h3__syne'>Have some cookies!</h3>
                        <button className='a__basic' onClick={() => handleClick(false)}>[X]</button>
                    </div>
                    <p className='p__basic'>This website uses <a href='/privacy-policy' style={{ textDecoration: 'underline' }}>cookies</a> to enhance your browsing experience and analyze site traffic to improve its services.</p>
                    <div className="app__CookieBanner__button-container">
                        <button className='a__basic' onClick={() => handleClick(true)}>[Accept]</button>
                        <button className='a__basic' onClick={() => handleClick(false)}>[Decline]</button>
                    </div>
                </div>
            }
        </>
    )
}

export default CookieBanner
