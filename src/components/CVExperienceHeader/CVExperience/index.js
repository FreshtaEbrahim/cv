import React from 'react';
import './CVExperience.css';
import CVExperience2 from './CVExperience2';
import { DiJavascript1 } from 'react-icons/di';
import {
  FaNodeJs,
  FaGithub,
  FaReact,
  FaDocker,
  FaAws,
  FaJira,
} from 'react-icons/fa';
import { SiPostgresql, SiHeroku, SiFirebase } from 'react-icons/si';

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
          <div className='CVExperience-body'>
            Chosen from 2000+ applicants to join a fully remote full-stack
            bootcamp. Over 16 weeks, we covered various JS technologies, remote
            pair programming, problem solving and agile methodologies. The
            School of Code reflects my personal learning trajectory, through
            being able to successfully program and deliver projects using
            various languages and frameworks, with proficient skills developed
            within 16 weeks. I am looking forward to taking this rate of
            learning trajectory as a vital asset into my tech role. Projects
            during School of Code include:
            <br />
            <br />
            <br />
            <b>The Mentorship Diary</b> - A full stack web application to
            improve the SoC Mentorship Experience, where bootcampers can record
            and look back on weekly reflective notes produced during their
            mentor meetings. The project was implemented over a 3 day deadline
            while following agile principles. Technologies used were:
            <br />
            <br />
            <div className='CVExperience-techstack'>
              React.js
              <FaReact className='CVTechnologies-icon-list' /> Node.js
              <FaNodeJs className='CVTechnologies-icon-list' /> Express.js
              <DiJavascript1 className='CVTechnologies-icon-list' /> PostgreSQL
              <SiPostgresql className='CVTechnologies-icon-list' /> Heroku
              <SiHeroku className='CVTechnologies-icon-list' /> GitHub
              <FaGithub className='CVTechnologies-icon-list' /> Firebase
              <SiFirebase className='CVTechnologies-icon-list' />
            </div>
            <br />
            <br />
            <br />
            <b>Progress Plus</b> - A full stack web application to provide a
            solution for Soc boot campers to be able to track their techncal
            progress. Over 4 weeks, my team of 6 built an application where SoC
            boot campers can view their qualitative and quantitative results
            provided by SoC coaches. We took to understanding the user's needs
            through user personas and stories, and linked these to user flows
            and wireframes. Our GitFlow branching method coincides into our Jira
            issue tickets for the 3-5 day sprints. Technologies included:
            <br />
            <br />
            <div className='CVExperience-techstack'>
              Next.js
              <DiJavascript1 className='CVTechnologies-icon-list' /> Node.js
              <FaNodeJs className='CVTechnologies-icon-list' /> Express.js
              <DiJavascript1 className='CVTechnologies-icon-list' /> PostgreSQL{' '}
              <SiPostgresql className='CVTechnologies-icon-list' /> Heroku
              <SiHeroku className='CVTechnologies-icon-list' />
              <br /> Docker
              <FaDocker className='CVTechnologies-icon-list' /> AWS ECR
              <FaAws className='CVTechnologies-icon-list' /> AWS ECS
              <FaAws className='CVTechnologies-icon-list' />
              <br />
              GitHub
              <FaGithub className='CVTechnologies-icon-list' /> Firebase
              <SiFirebase className='CVTechnologies-icon-list' /> Jira
              <FaJira className='CVTechnologies-icon-list' />
            </div>
          </div>
        </div>
      </div>
      <CVExperience2 />
    </>
  );
}
