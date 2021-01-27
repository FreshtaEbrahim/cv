import React from 'react';
import { FaNetworkWired } from 'react-icons/fa';
import { CVExperienceHeaderTitle } from '../../textContent';
import CVExperience from './CVExperience';
import './CVExperienceHeader.css';

export default function CVExperienceHeader() {
  return (
    <>
      <div className='CVExperienceHeader'>
        <div className='CVExperienceHeader-left'>
          {CVExperienceHeaderTitle}{' '}
          <FaNetworkWired className='CVExperience-icon' />
        </div>
        <div className='CVExperienceHeader-right' />
      </div>
      <CVExperience />
    </>
  );
}
