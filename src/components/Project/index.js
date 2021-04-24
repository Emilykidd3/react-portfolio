import React from "react";

function Project({ title, image, deployedLink, repo }) {
  return (
    <div style={{ width: "350px", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "15px"}}>
      <h3>{title}</h3>
      <img
        style={{ width: "300px" }}
        src={require(`../../assets/project-images/${image}`).default}
        alt="budget"
      ></img>
      <div>
        <a href={deployedLink}>Application Link</a>
        <br />
        <a href={repo}>Github Repo Link</a>
      </div>
    </div>
  );
}

export default Project;
