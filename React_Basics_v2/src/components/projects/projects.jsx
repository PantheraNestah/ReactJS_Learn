import React from "react";
import prop_data from "./my_projects_data.json";
import "./projects.scss";

const Projects = () => {

    return (
        <section id="projects" className="projects_section col-12">
            <h2 className="section_title col-lg-5">Projects</h2>
            <div className="projects_container col-lg-10 mx-lg-auto">
                {prop_data.map((project, index) => {
                    return <Project key={index} {...project} />
                })}
            </div>
        </section>
    );
}


const Project = ({title, description, stack}) => {
    
    return (
        <article className="project d-flex align-items-start justify-content-center">
            <div className="project_photo 6"></div>
            <div className="project_details col-lg-5 d-flex flex-column align-items-start">
                <h3>{title}</h3>
                <p className="">{description}</p>
                <ul className="project_stack d-flex align-items-center">
                    {stack.map((item, index) => {
                        return <li key={index}>{item},</li>
                    })}
                </ul>
                <a href="#" className="view_proj_link">View project</a>
            </div>
        </article>
    );
}

export default Projects;