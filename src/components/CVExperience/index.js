import React from "react";
import "./CVExperience.css";
import { FaNetworkWired } from "react-icons/fa";

export default function CVExperience() {
  return (
    <div className="CVExperience">
      <div className="CVExperience-title">
        <div className="CVExperience-headline">
          Experience <FaNetworkWired className="CVExperience-icon" />
        </div>

        <div className="CVExperience-role">Software Engineer</div>
        <div className="CVExperience-role-length">Sep 2020 - Present</div>
        <div className="CVExperience-role2">Team Leader</div>
        <div className="CVExperience-role2-length">Oct 2018 - Present</div>
      </div>

      <div className="CVExperience-text">
        <h2 className="CVExperience-header">School of Code</h2>
        <p className="CVExperience-body">
          Being 1 of 48 boot campers chosen from 2000+ applicants to join a
          fully remote full-stack course. Over 16 weeks, we covered various
          JavaScript technologies, authentication systems, remote pair
          programming and agile methodologies. School of Code projects include:
          <br />
          <br />
          <b>Noughts & Crosses</b> - Game built in React.js for two players.
          Remotely produced in week 7 of School of Code by myself and my weekly
          programming partner, we created our own Noughts & Crosses game
          designed to be played with two players.
          <br />
          <br />
          <b>The Mentorship Diary</b> - A full-stack web application to improve
          the SoC Mentorship Experience. Built in 3 days in a remote team of 4,
          The Mentorship Diary was created to solve the problem of lack of
          structure and guidance in the SoC Mentorship Experience. The web
          application is platform where future SoC bootcampers can discuss and
          record their weekly achievements during mentor meetings. We used
          Node.js, PostgreSQL and Heroku to build the back end and React.js for
          the front end. We also used Firebase for our login authentication that
          was linked to our SQL database, and we were able to implement agile
          methodologies through stand-ups and retrospectives to even a 3-day
          project.
        </p>
        <h2 className="CVExperience-header">Co-Op</h2>
        <p className="CVExperience-body">
          As Team Leader, I am responsible for managing staff, maintaining
          inventory and overall entail activities to minimise costs whilst
          maximising profit. This is a heavily customer-facing role in which
          customer satisfaction is the main priority. This role has shaped my
          leadership skills through successfully managing teams to complete team
          tasks and reach daily goals.
          <br />
          <br />
          Supporting local grassroots communities and causes is an integral part
          of the wider business, as well as an important part of my personal
          self too. I undertook the responsibility of supporting local causes in
          Birmingham through organising community funds for charities and
          customers who make a positive difference in society. A recent example
          of this was working with 'We Go Outside Too', a local charity
          encouraging the young black community to improve their mental health
          through enjoying nature and exercise. We were able to support and
          sponsor their next day trip with the Co-Op community fund, where they
          organised a day to take a group of young people for a waterfall hike.
        </p>
      </div>
    </div>
  );
}
