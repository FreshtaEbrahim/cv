import React from "react";
import "./CVHeader.css";
import { FaLinkedin, FaGithub, FaPhoneSquare } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import avatar from "./avatar.jpg";

export default function CVHeader() {
  return (
    <div className="CVHeader">
      <div className="CVHeader-avatar-section">
        <img className="CVHeader-avatar" alt="Freshta's avatar" src={avatar} />
      </div>

      <div className="CVHeader-fullname">Freshta Ebrahim</div>

      <ul className="CVHeader-profile-links">
        <li>
          <a href="tel:07808885539">
            <FaPhoneSquare className="social-media-icon" />
            +44 780 888 5539
          </a>
        </li>
        <li>
          <a href={"mailto: freshtaebrahim@hotmail.co.uk"}>
            <AiFillMail className="social-media-icon" />
            freshtaebrahim@hotmail.co.uk
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/freshtaebrahim" target="_blank">
            <FaLinkedin className="social-media-icon" />
            /in/freshtaebrahim
          </a>
        </li>
        <li>
          <a href="https://github.com/freshtaebrahim" target="_blank">
            <FaGithub className="social-media-icon" />
            /freshtaebrahim
          </a>
        </li>
      </ul>
    </div>
  );
}
