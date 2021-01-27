import React from 'react';
import './CVTechnologies.css';
import { FaTools } from 'react-icons/fa';
import { CVTechnologiesIconList } from '../../globalVariables/CVTechnologiesVariables';
import { CVTechnologiesTitle } from '../../textContent';

export default function CVTechnologies() {
  return (
    <div className='CVTechnologies'>
      <div className='CVTechnologies-title'>
        {CVTechnologiesTitle} <FaTools className='CVTechnologies-icon' />
      </div>
      <div className='CVTechnologies-text'>
        {CVTechnologiesIconList.map((item) => {
          return (
            <span className='CVTechnologies-icon-name'>
              <span className='CVTechnologies-icon-name'>{item.name}</span>
              <span className='CVTechnologies-icon-list'>{item.icon}</span>{' '}
            </span>
          );
        })}
      </div>
    </div>
  );
}
