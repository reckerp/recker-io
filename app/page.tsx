import React from 'react';

import '../styles/page.css';
import {Gallery, Hero, TechStack, WhoAmI, Experience, GitActivity} from '@/container';
import { Separator } from '@/components';

const App = () => (
    <>
        <Hero/>
        <WhoAmI/>
        <Separator direction="right" />
        <Gallery/>
        <Separator direction="left" />
        <Experience/>
        <Separator direction="right" />
        <TechStack/>
        <Separator direction="left" />
        <GitActivity/>
    </>
);

export default App;
