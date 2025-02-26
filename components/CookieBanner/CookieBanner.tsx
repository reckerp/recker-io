"use client";
import React from 'react'
import './CookieBanner.css';

import { useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../../utils/storageHelper';
import posthog from 'posthog-js';

const CookieBanner = () => {
    const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);
    const [showCookieBanner, setShowCookieBanner] = useState(false);
    
    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null)
        console.log("storedCookieConsent: ", storedCookieConsent)
        setCookieConsent(storedCookieConsent)
        
        if (storedCookieConsent === null) {
            setShowCookieBanner(true)
            // Opt out by default until user consents
            posthog.opt_out_capturing()
        } else if (storedCookieConsent === true) {
            // If user previously consented, opt in
            posthog.opt_in_capturing()
        } else {
            // If user previously declined, ensure opt out
            posthog.opt_out_capturing()
        }
    }, [])

    useEffect(() => {
        if (cookieConsent === true) {
            posthog.opt_in_capturing()
        } else if (cookieConsent === false) {
            posthog.opt_out_capturing()
        }
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
