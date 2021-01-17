import React from 'react';
import './CVFooter.css';

export default function CVFooter() {
  return (
    <div className='CVFooter'>
      <div className='CVFooter-text'>
        This CV is created in React, available here:
        <br />
        <a href='https://freshtaebrahim.github.io/cv'>
          freshtaebrahim.github.io/cv
        </a>
      </div>
    </div>
  );
}
