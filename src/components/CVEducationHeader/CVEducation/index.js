import React from 'react';
import './CVEducation.css';
import CVEducation2 from './CVEducation2';

export default function CVEducation() {
  return (
    <>
      <div className='CVEducation'>
        <div className='CVEducation-title'>
          <div className='CVEducation-role'>Coventry University</div>
          <div className='CVEducation-role-length'>Sep 2015 - July 2019</div>
        </div>

        <div className='CVEducation-text'>
          <h2 className='CVEducation-header'>BSc (Hons) Human Biosciences</h2>
          <p className='CVEducation-body'>
            Classification: 2:1
            <br />
            <br />
            Final year modules include Cancer Biology, Human Genetics, Medical
            Microbiology and Human Biosciences through the Lifespan.
            <br />
            <br />
            Final year dissertation title: ‘‘Exploring the antimicrobial effects
            of Moringa oleifera on bacteria associated with urinary tract
            infections.’’
          </p>
        </div>
      </div>
      <CVEducation2 />
    </>
  );
}
