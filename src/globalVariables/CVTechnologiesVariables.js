import {
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

export const CVTechnologiesIconList = [
  { name: 'React.js', icon: <FaReact className='CVTechnologies-icon-list' /> },
  { name: 'Node.js', icon: <FaNodeJs className='CVTechnologies-icon-list' /> },
  {
    name: 'Express.js',
    icon: <DiJavascript1 className='CVTechnologies-icon-list' />,
  },
  { name: 'HTML5', icon: <FaHtml5 className='CVTechnologies-icon-list' /> },
  { name: 'CSS3', icon: <FaCss3Alt className='CVTechnologies-icon-list' /> },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql className='CVTechnologies-icon-list' />,
  },
  { name: 'Heroku', icon: <SiHeroku className='CVTechnologies-icon-list' /> },
  {
    name: 'Vercel',
    icon: <IoLogoVercel className='CVTechnologies-icon-list' />,
  },
  { name: 'GitHub', icon: <FaGithub className='CVTechnologies-icon-list' /> },
  {
    name: 'Firebase',
    icon: <SiFirebase className='CVTechnologies-icon-list' />,
  },
  { name: 'Docker', icon: <FaDocker className='CVTechnologies-icon-list' /> },
  { name: 'AWS', icon: <FaAws className='CVTechnologies-icon-list' /> },
  { name: 'Figma', icon: <FaFigma className='CVTechnologies-icon-list' /> },
  { name: 'Trello', icon: <FaTrello className='CVTechnologies-icon-list' /> },
  {
    name: 'Confluence',
    icon: <FaConfluence className='CVTechnologies-icon-list' />,
  },
  { name: 'Jira', icon: <FaJira className='CVTechnologies-icon-list' /> },
];
