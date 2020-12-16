import React from "react";
import "./CVTechnologies.css";
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
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiFirebase, SiHeroku, SiPostgresql } from "react-icons/si";
import { VscRegex } from "react-icons/vsc";

export default function CVTechnologies() {
  return (
    <div className="CVTechnologies">
      <div className="CVTechnologies-title">
        Tools & Technologies
        <FaTools className="CVTechnologies-icon" />
      </div>
      <div className="CVTechnologies-text">
        HTML5
        <FaHtml5 /> CSS
        <FaCss3Alt /> JS (ES6)
        <DiJavascript1 /> Node.js
        <FaNodeJs /> Express.js
        <br /> React.js
        <FaReact /> PostgreSQL
        <SiPostgresql /> Heroku
        <SiHeroku /> GitHub
        <FaGithub /> Firebase
        <SiFirebase /> Regex
        <VscRegex /> Figma
        <FaFigma /> Trello
        <FaTrello /> Confluence
        <FaConfluence />
        Jira
        <FaJira />
      </div>
    </div>
  );
}
