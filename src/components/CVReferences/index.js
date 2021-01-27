import React from 'react';
import './CVReferences.css';
import { VscReferences } from 'react-icons/vsc';
import { CVReferencesHeaderTitle, CVReferencesText } from '../../textContent';

export default function CVReferences() {
  return (
    <div className='CVReferences'>
      <div className='CVReferencesHeader-left'>
        {CVReferencesHeaderTitle}{' '}
        <VscReferences className='CVReferences-icon' />
      </div>

      <div className='CVReferences-text'>
        <h2 className='CVReferences-header'>{CVReferencesText}</h2>
      </div>
    </div>
  );
}
