import React from 'react';
import './CVTechnologies.css';
import {
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaTrello,
  FaFigma,
  FaJira,
  FaConfluence,
  FaDocker,
  FaAws,
} from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiFirebase, SiHeroku, SiPostgresql } from 'react-icons/si';
import { IoLogoVercel } from 'react-icons/io5';

export default function CVTechnologies() {
  return (
    <div className='CVTechnologies'>
      <div className='CVTechnologies-title'>
        Tools & Technologies
        <FaTools className='CVTechnologies-icon' />
      </div>
      <div className='CVTechnologies-text'>
        React.js
        <FaReact className='CVTechnologies-icon-list' /> Node.js
        <FaNodeJs className='CVTechnologies-icon-list' /> Express.js
        <DiJavascript1 className='CVTechnologies-icon-list' />
        <br />
        HTML5
        <FaHtml5 className='CVTechnologies-icon-list' /> CSS3
        <FaCss3Alt className='CVTechnologies-icon-list' />
        PostgreSQL <SiPostgresql className='CVTechnologies-icon-list' /> Heroku
        <SiHeroku className='CVTechnologies-icon-list' /> Vercel
        <IoLogoVercel className='CVTechnologies-icon-list' />
        <br />
        GitHub
        <FaGithub className='CVTechnologies-icon-list' /> Firebase
        <SiFirebase className='CVTechnologies-icon-list' /> Docker
        <FaDocker className='CVTechnologies-icon-list' /> AWS
        <FaAws className='CVTechnologies-icon-list' /> Cypress.io
        <br />
        Figma
        <FaFigma className='CVTechnologies-icon-list' /> Trello
        <FaTrello className='CVTechnologies-icon-list' /> Confluence
        <FaConfluence className='CVTechnologies-icon-list' />
        Jira
        <FaJira className='CVTechnologies-icon-list' />
      </div>
    </div>
  );
}
