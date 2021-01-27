import React from 'react';
import './CVBio.css';
import { CVBioText } from '../../textContent';

export default function CVBio() {
  return (
    <div className='CVBio'>
      <p className='CVBio-text'>{CVBioText}</p>
    </div>
  );
}
