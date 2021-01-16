import React from 'react';
import CVHeader from './components/CVHeader';
import CVBio from './components/CVBio';
import CVTechnologies from './components/CVTechnologies';
import CVReferences from './components/CVReferences';
import CVEndBlock from './components/CVEndBlock';
import './App.css';
import CVExperienceHeader from './components/CVExperienceHeader';
import CVEducationHeader from './components/CVEducationHeader';
import CVInterests from './components/CVInterests';

export default function App() {
  return (
    <>
      <CVHeader />
      <CVBio />
      <CVTechnologies />
      <CVExperienceHeader />
      <CVEducationHeader />
      <CVInterests />
      <CVReferences />
      <CVEndBlock />
    </>
  );
}
