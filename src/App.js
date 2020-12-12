import React from "react";
import CVHeader from "./components/CVHeader";
import CVBio from "./components/CVBio";
import CVTechnologies from "./components/CVTechnologies";
import CVExperience from "./components/CVExperience";
import CVEducation from "./components/CVEducation";
import CVInterests from "./components/CVInterests";
import CVReferences from "./components/CVReferences";
import CVEndBlock from "./components/CVEndBlock";
import "./App.css";

export default function App() {
  return (
    <>
      <CVHeader />
      <CVBio />
      <CVTechnologies />
      <CVExperience />
      <CVEducation />
      <CVInterests />
      <CVReferences />
      <CVEndBlock />
    </>
  );
}
