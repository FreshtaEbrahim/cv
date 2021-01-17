import React from 'react';
import './CVExperience.css';
import CVExperience2 from './CVExperience2';

export default function CVExperience() {
  return (
    <>
      <div className='CVExperience'>
        <div className='CVExperience-title'>
          <div className='CVExperience-role'>Software Engineer</div>
          <div className='CVExperience-role-length'>Sep 2020 - Present</div>
        </div>
        <div className='CVExperience-text'>
          <h2 className='CVExperience-header'>School of Code</h2>
          <p className='CVExperience-body'>
            Being 1 of 48 boot campers chosen from 2000+ applicants to join a
            fully remote full-stack course. Over 16 weeks, we covered various JS
            technologies, authorisation and authentication, remote pair
            programming and agile methodologies. The School of Code reflects my
            personal learning trajectory, through being able to successfully
            program and deliver projects using various languages and frameworks,
            with proficient skills developed within 16 weeks. I am looking
            forward to taking this rate of learning trajectory as a vital asset
            into my first technology role. School of Code projects include:
            <br />
            <br />
            <b>The Mentorship Diary</b> - A full stack web application to
            improve the SoC Mentorship Experience. The project was implemented
            over a tight 3 day deadline while following agile principles and
            methodologies. Technologies used were:
            <br />
            <li className='CVExperience-techstack'>React.js</li>
            <li className='CVExperience-techstack'>Node.js</li>
            <li className='CVExperience-techstack'>PostgreSQL</li>
            <li className='CVExperience-techstack'>Heroku</li>
            <li className='CVExperience-techstack'>GitHub</li>
            <li className='CVExperience-techstack'>Firebase Authentication</li>
            <br />
            <br />
            <b>Progress Plus</b> - A full stack web application to provide a
            solution for Soc boot campers not being able to track their techncal
            progress. Over 4 weeks, myself and 5 other developers built an
            application where SoC boot campers can view their qualitative and
            quantitative results provided by SoC coaches. We took to
            understanding the user's needs through user personas and stories,
            and linked these to wireframes. We used a GitFlow branching method
            which tied into our tickets assigned on Jira and worked in 3-5 day
            sprints. Technologies included:
            <br />
            <li className='CVExperience-techstack'>Next.js</li>
            <li className='CVExperience-techstack'>Node.js</li>
            <li className='CVExperience-techstack'>Express.js</li>
            <li className='CVExperience-techstack'>PostgreSQL</li>
            <li className='CVExperience-techstack'>Heroku</li>
            <li className='CVExperience-techstack'>Vercel</li>
            <li className='CVExperience-techstack'>GitHub</li>
            <li className='CVExperience-techstack'>Firebase Authentication</li>
            <li className='CVExperience-techstack'>Jira</li>
            <li className='CVExperience-techstack'>Confluence</li>
            <li className='CVExperience-techstack'>Trello</li>
            <li className='CVExperience-techstack'>Cypress.io</li>
          </p>
        </div>
      </div>
      <CVExperience2 />
    </>
  );
}
