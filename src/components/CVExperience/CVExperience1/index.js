import React from "react";
import "../CVExperience.css";

export default function CVExperience1() {
  return (
    <>
      <div className="CVExperience1-left">
        <div className="CVExperience1-role">Software Engineer</div>
        <div className="CVExperience1-role-length">Sep 2020 - Present</div>
      </div>
      <div className="CVExperience2-right">
        <h2 className="CVExperience1-header">School of Code</h2>
        <p className="CVExperience1-body">
          Being 1 of 48 boot campers chosen from 2000+ applicants to join a
          fully remote full-stack course. Over 16 weeks, we covered various JS
          technologies, authorisation and authentication, remote pair
          programming and agile methodologies. The School of Code reflects my
          personal learning trajectory, through being able to successfully
          program and deliver projects using various languages and frameworks,
          with proficient skills developed within 16 weeks. I am looking forward
          to taking this rate of learning trajectory as a vital asset into my
          first technology role. School of Code projects include:
          <br />
          <br />
          Noughts & Crosses - A game built in React.js for two players, remotely
          programmed in one day by myself and my pair programming partner. We
          created our own Noughts & Crosses game, including a scoreboard, using
          stateful components, and designed using CSS.
          <br />
          <br />
          The Mentorship Diary - A full-stack web application with the aim to
          improve the SoC Mentorship Experience. Built in 3 days in a remote
          team of 4, The Mentorship Diary was created to solve the problem of
          lack of structure and guidance in the SoC Mentorship Experience. The
          web application is platform where future SoC boot campers can discuss
          and record their weekly achievements during mentor meetings. We used
          Node.js, PostgreSQL and Heroku to build the back end, React.js for the
          front end and Git as version control. We also used Firebase for our
          login authentication that was linked to our SQL database, and we were
          able to implement agile methodologies through stand-ups and
          retrospectives to even a 3-day project.
        </p>
      </div>
    </>
  );
}
