import React from 'react';
import './CVReferences.css';
import { VscReferences } from 'react-icons/vsc';

export default function CVReferences() {
  return (
    <div className='CVReferences'>
      <div className='CVReferencesHeader-left'>
        References
        <VscReferences className='CVReferences-icon' />
      </div>

      <div className='CVReferences-text'>
        <h2 className='CVReferences-header'>Available upon request</h2>
      </div>
    </div>
  );
}
