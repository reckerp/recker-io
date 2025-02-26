import React from 'react';
import './Separator.css';

interface SeparatorProps {
  direction: 'left' | 'right';
}

const Separator: React.FC<SeparatorProps> = ({ direction }) => {
  return (
    <div className={`separator ${direction}`}>
      <div className={`separator-line separator-line-${direction}`}></div>
    </div>
  );
};

export default Separator; 