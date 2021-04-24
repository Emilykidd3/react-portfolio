import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
import Project from '../Project'

function Portfolio() {
  const projectItems = [
    {
      title: "Budget Tracker",
      image: "budget.png",
      deployedLink: "https://budget-tracker-123456.herokuapp.com/",
      repo: "https://github.com/Emilykidd3/budget-tracker"
    },
    {
      title: "Budget Tracker",
      image: "budget.png",
      deployedLink: "https://budget-tracker-123456.herokuapp.com/",
      repo: "https://github.com/Emilykidd3/budget-tracker"
    },
    {
      title: "Budget Tracker",
      image: "budget.png",
      deployedLink: "https://budget-tracker-123456.herokuapp.com/",
      repo: "https://github.com/Emilykidd3/budget-tracker"
    },
    {
      title: "Budget Tracker",
      image: "budget.png",
      deployedLink: "https://budget-tracker-123456.herokuapp.com/",
      repo: "https://github.com/Emilykidd3/budget-tracker"
    },
    {
      title: "Budget Tracker",
      image: "budget.png",
      deployedLink: "https://budget-tracker-123456.herokuapp.com/",
      repo: "https://github.com/Emilykidd3/budget-tracker"
    },
    {
      title: "Budget Tracker",
      image: "budget.png",
      deployedLink: "https://budget-tracker-123456.herokuapp.com/",
      repo: "https://github.com/Emilykidd3/budget-tracker"
    }
  ]
  return (
    <section id="project-section" style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
      {projectItems.map((project) => {
        return <Project title={project.title} image={project.image} deployedLink={project.deployedLink} repo={project.repo} key={project.title} />
      })}
    </section>
  );
}
export default Portfolio;