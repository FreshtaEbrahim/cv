import React from "react";
import "./CVTechnologies.css";
import { FaTools } from "react-icons/fa";
import { technologiesIcons } from "../CVExperience/CVExperienceIcons";

export default function CVTechnologies() {
  return (
    <div className="CVTechnologies">
      <div className="CVTechnologies-title">
        Tools & Technologies
        <FaTools className="CVTechnologies-icon" />
      </div>
      <div className="CVTechnologies-text">
        HTML5 | CSS | JS (ES6) | React.js | Node.js | Express | SQL | Heroku |
        Git | GitHub | Firebase | Regex | Figma | Trello
        <br></br>
        <br></br>
        {technologiesIcons}
      </div>
    </div>
  );
}
