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
      title: "Social Network API",
      image: "social-network-api.png",
      deployedLink: "https://github.com/Emilykidd3/social-network-api",
      repo: "https://github.com/Emilykidd3/social-network-api"
    },
    {
      title: "Friendzone",
      image: "friendzone.png",
      deployedLink: "https://my-friendzone.herokuapp.com",
      repo: "https://github.com/Emilykidd3/friendzone"
    },
    {
      title: "Tech Blog",
      image: "tech-blog.png",
      deployedLink: "https://powerful-taiga-46589.herokuapp.com/",
      repo: "https://github.com/Emilykidd3/tech-blog"
    },
    {
      title: "eCommerce Backend",
      image: "budget.png",
      deployedLink: "https://github.com/Emilykidd3/e-commerce-back-end",
      repo: "https://github.com/Emilykidd3/e-commerce-back-end"
    },
    {
      title: "Emloyee Tracker",
      image: "employee-tracker.png",
      deployedLink: "https://github.com/Emilykidd3/employee-tracker",
      repo: "https://github.com/Emilykidd3/employee-tracker"
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