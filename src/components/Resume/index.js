import React from "react";
import ResumeDownload from "../../assets/resume.pdf";

function Resume({ tabs }) {
  const skills1 = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "jQuery",
    "Node.js",
    "Express.js",
    "SQL",
  ];
  const skills2 = [
    "Sequelize",
    "MySQL",
    "NoSQL",
    "Mongoose",
    "MongoDB",
    "Mobile first Design",
    "TDD",
    "React",
  ];

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={require(`../../assets/resume-screenshot.png`).default}
          alt="resume"
          style={{ width: "200px" }}
        />
        <br />
        <a
          href={ResumeDownload}
          download="Resume"
          target="_blank"
          rel="noreferrer"
        >
          <button>Download Resume</button>
        </a>
      </div>

      <div>
        <h2>Skills</h2>
        <div style= {{}}>
          <ul>
            {skills1.map((skills) => (
              <li>{skills}</li>
            ))}
          </ul>
          <ul>
            {skills2.map((skills) => (
              <li>{skills}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
