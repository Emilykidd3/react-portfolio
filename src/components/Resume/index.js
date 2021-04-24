import React from "react";
import ResumeDownload from '../../assets/resume.pdf'

function Resume({ tabs }) {
  const skills = ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'Node.js', 'Express.js', 'SQL', 'Sequelize', 'MySQL', 'NoSQL', 'Mongoose', 'MongoDB', 'Mobile first Design', 'TDD', 'React']
  return (
    <div>
        <h2>Skills</h2>
        <ul>
        {skills.map((skills) => (
            <li>{skills}</li>
          ))}
        </ul>
        <a href={ResumeDownload} download="Resume" target='_blank' rel="noreferrer">
        <button>Download Resume</button>
</a>
    </div>
  );
}

export default Resume;