import React from 'react';

import '../styles/page.css';
import {Gallery, Hero, TechStack, WhoAmI} from '@/container';

const App = () => (
    <>
        <Hero/>
        <WhoAmI/>
        <Gallery/>
        <TechStack/>
    </>
);

export default App;
