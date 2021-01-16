import React from 'react';
import { FaNetworkWired } from 'react-icons/fa';
import CVExperience from './CVExperience';
import './CVExperienceHeader.css';

export default function CVExperienceHeader() {
  return (
    <>
      <div className='CVExperienceHeader'>
        <div className='CVExperienceHeader-left'>
          Experience <FaNetworkWired className='CVExperience-icon' />
        </div>
        <div className='CVExperienceHeader-right'></div>
      </div>
      <CVExperience />
    </>
  );
}
