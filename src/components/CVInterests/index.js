import React from 'react';
import { ImWoman } from 'react-icons/im';
import {
  CVInterestsHeaderTitle,
  CVInterestsRole1,
  CVInterestsRole1Text,
  CVInterestsRole2,
  CVInterestsRole2Text,
} from '../../textContent';
import './CVInterests.css';

export default function CVInterests() {
  return (
    <div className='CVInterests'>
      <div className='CVInterestsHeader-left'>
        {CVInterestsHeaderTitle}
        <ImWoman className='CVInterests-icon' />
      </div>

      <div className='CVInterests-text'>
        <h2 className='CVInterests-header'>{CVInterestsRole1}</h2>
        <p className='CVInterests-body'>{CVInterestsRole1Text}</p>
        <br></br>
        <h2 className='CVInterests-header'>{CVInterestsRole2}</h2>
        <p className='CVInterests-body'>{CVInterestsRole2Text}</p>
      </div>
    </div>
  );
}
