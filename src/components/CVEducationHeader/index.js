import React from 'react';
import CVEducation from './CVEducation';
import { FaUniversity } from 'react-icons/fa';
import './CVEducationHeader.css';
import { CVEducationHeaderTitle } from '../../textContent';

export default function CVEducationHeader() {
  return (
    <>
      <div className='CVEducationHeader'>
        <div className='CVEducationHeader-left'>
          {CVEducationHeaderTitle} <FaUniversity className='CVEducation-icon' />
        </div>
        <div className='CVEducationHeader-right' />
      </div>
      <CVEducation />
    </>
  );
}
