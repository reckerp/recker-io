import React from 'react'
import { Heading } from '@/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
        nocache: true,
    }
}


const Imprint = () => {

    return (
        <div className="margin legal-page">
            <Heading title="Imprint" subtitle="Legals" />
            <br />
            <h2 className='h3__syne'>According to &sect; 5 TMG</h2>
            <p className='p__basic'>Paul Recker<br />
                Erlenweg 8<br />
                41379 Brüggen<br />
                Germany</p>
            <br />
            <h2 className='h3__syne'>Contact</h2>
            <p className='p__basic'>Phone: +49 (0) 175 1730621<br />
                E-Mail: paul@recker.io</p>
            <br />
            <p className='p__basic'>Source:&nbsp;
                <a className='a__basic' href="https://www.e-recht24.de/impressum-generator.html">
                    e-recht24.de
                </a>
            </p>
        </div>
    )
}

export default Imprint
