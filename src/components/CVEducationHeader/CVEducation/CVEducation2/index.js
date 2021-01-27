import React from 'react';
import {
  CVEducationSixthForm,
  CVEducationSixthFormLength,
  CVEducationSixthFormQual,
  CVEducationSixthFormResults,
} from '../../../../textContent';
import CVEducation3 from './CVEducation3';

export default function CVEducation2() {
  return (
    <>
      <div className='CVEducation'>
        <div className='CVEducation-title'>
          <div className='CVEducation-role'>{CVEducationSixthForm}</div>
          <div className='CVEducation-role-length'>
            {CVEducationSixthFormLength}
          </div>
        </div>

        <div className='CVEducation-text'>
          <h2 className='CVEducation-header'>{CVEducationSixthFormQual}</h2>
          <p className='CVEducation-body'>{CVEducationSixthFormResults}</p>
        </div>
      </div>
      <CVEducation3 />
    </>
  );
}
