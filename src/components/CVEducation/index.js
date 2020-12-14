import React from "react";
import "./CVEducation.css";
import { FaUniversity } from "react-icons/fa";

export default function CVEducation() {
  return (
    <div className="CVEducation">
      <div className="CVEducation-title">
        <div className="CVEducation-headline">
          Education <FaUniversity className="CVEducation-icon" />
        </div>

        <div className="CVEducation-role">Coventry University</div>
        <div className="CVEducation-role-length">Sep 2015 - July 2019</div>
        <div className="CVEducation-role2">Twyford CofE Sixth Form</div>
        <div className="CVEducation-role-length">Sep 2013 - July 2015</div>
        <div className="CVEducation-role3">Twyford CofE High School</div>
        <div className="CVEducation-role-length">Sep 2008 - July 2013</div>
      </div>

      <div className="CVEducation-text">
        <h2 className="CVEducation-header">BSc (Hons) Human Biosciences</h2>
        <p className="CVEducation-body">
          Classification: 2:1
          <br />
          <br />
          Final year modules include Cancer Biology, Human Genetics, Medical
          Microbiology and Human Biosciences through the Lifespan.
          <br />
          <br />
          Final year dissertation title: ‘‘Exploring the antimicrobial effects
          of Moringa oleifera on bacteria associated with urinary tract
          infections.’’
        </p>
        <h2 className="CVEducation-header2">A-Levels</h2>
        <p className="CVEducation-body">
          A-levels in Geography (A), Biology (B) and Chemistry (C).
        </p>
        <h2 className="CVEducation-header3">GCSE’s</h2>
        <p className="CVEducation-body">
          10 GCSE’s at grades A*-B including Maths, English and Biology.
        </p>
      </div>
    </div>
  );
}
