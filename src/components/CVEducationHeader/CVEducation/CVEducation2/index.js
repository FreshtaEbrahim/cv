import React from 'react';
import CVEducation3 from './CVEducation3';

export default function CVEducation2() {
  return (
    <>
      <div className='CVEducation'>
        <div className='CVEducation-title'>
          <div className='CVEducation-role'>Twyford CofE Sixth Form</div>
          <div className='CVEducation-role-length'>Sep 2013 - July 2015</div>
        </div>

        <div className='CVEducation-text'>
          <h2 className='CVEducation-header'>A-Levels</h2>
          <p className='CVEducation-body'>
            A-levels in Geography (A), Biology (B) and Chemistry (C).
          </p>
        </div>
      </div>
      <CVEducation3 />
    </>
  );
}
