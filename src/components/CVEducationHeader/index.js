import React from 'react';
import CVEducation from './CVEducation';
import { FaUniversity } from 'react-icons/fa';
import './CVEducationHeader.css';

export default function CVEducationHeader() {
  return (
    <>
      <div className='CVEducationHeader'>
        <div className='CVEducationHeader-left'>
          Education <FaUniversity className='CVEducation-icon' />
        </div>
        <div className='CVEducationHeader-right'></div>
      </div>
      <CVEducation />
    </>
  );
}
