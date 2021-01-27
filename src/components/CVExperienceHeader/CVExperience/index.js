import React from 'react';
import './CVExperience.css';
import CVExperience2 from './CVExperience2';
import {
  mentorshipIconList,
  progressPlusIconList,
} from '../../../globalVariables/CVExperienceVariables';
import {
  CVExperienceRole1,
  CVExperienceRole1Company,
  CVExperienceRole1Length,
  CVExperienceRole1Text,
  mentorshipDiaryText,
  mentorshipDiaryTitle,
  progressPlusText,
  progressPlusTitle,
} from '../../../textContent';

export default function CVExperience() {
  return (
    <>
      <div className='CVExperience'>
        <div className='CVExperience-title'>
          <div className='CVExperience-role'>{CVExperienceRole1}</div>
          <div className='CVExperience-role-length'>
            {CVExperienceRole1Length}
          </div>
        </div>
        <div className='CVExperience-text'>
          <h2 className='CVExperience-header'>{CVExperienceRole1Company}</h2>
          <p className='CVExperience-body'>
            {CVExperienceRole1Text}
            <br />
            <br />
            <br />
            <b>{mentorshipDiaryTitle}</b>
            {mentorshipDiaryText}
            <br />
            <br />
            <div className='CVExperience-techstack'>
              {mentorshipIconList.map((item) => {
                return (
                  <span className='CVExperience-icon-name'>
                    <span className='CVExperience-icon-name'>{item.name}</span>{' '}
                    <span className='CVExperience-icon-list'>{item.icon}</span>{' '}
                  </span>
                );
              })}
            </div>
            <br />
            <br />
            <br />
            <b>{progressPlusTitle}</b>
            {progressPlusText}
            <br />
            <br />
            <div className='CVExperience-techstack'>
              {progressPlusIconList.map((item) => {
                return (
                  <span className='CVExperience-icon-name'>
                    <span className='CVExperience-icon-name'>{item.name}</span>{' '}
                    <span className='CVExperience-icon-list'>{item.icon}</span>{' '}
                  </span>
                );
              })}
            </div>
          </p>
        </div>
      </div>
      <CVExperience2 />
    </>
  );
}
