import React from 'react';
import {
  CVExperienceRole2,
  CVExperienceRole2Company,
  CVExperienceRole2Length,
  CVExperienceRole2Text1,
  CVExperienceRole2Text2,
} from '../../../../textContent';
import '../CVExperience.css';

export default function CVExperience2() {
  return (
    <div className='CVExperience'>
      <div className='CVExperience-title'>
        <div className='CVExperience-role'>{CVExperienceRole2}</div>
        <div className='CVExperience-role-length'>
          {CVExperienceRole2Length}
        </div>
      </div>
      <div className='CVExperience-text'>
        <h2 className='CVExperience-header'>{CVExperienceRole2Company}</h2>
        <p className='CVExperience-body'>
          {CVExperienceRole2Text1}
          <br />
          <br />
          {CVExperienceRole2Text2}
        </p>
      </div>
    </div>
  );
}
