import React from 'react';
import {
  CVEducationHighSchool,
  CVEducationHighSchoolLength,
  CVEducationHighSchoolQual,
  CVEducationHighSchoolResults,
} from '../../../../../textContent';

export default function CVEducation3() {
  return (
    <div className='CVEducation'>
      <div className='CVEducation-title'>
        <div className='CVEducation-role'>{CVEducationHighSchool}</div>
        <div className='CVEducation-role-length'>
          {CVEducationHighSchoolLength}
        </div>
      </div>

      <div className='CVEducation-text'>
        <h2 className='CVEducation-header'>{CVEducationHighSchoolQual}</h2>
        <p className='CVEducation-body'>{CVEducationHighSchoolResults}</p>
      </div>
    </div>
  );
}
