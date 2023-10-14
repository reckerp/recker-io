import React from 'react';

const Heading: React.FC<{ subtitle: string; title: string }> = ({ subtitle, title }) => (
  <>
    <p className="p__mysin">{subtitle}</p>
    <h1 className="h1__syne">{title}</h1>
  </>
);

export default Heading;
