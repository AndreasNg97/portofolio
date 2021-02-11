import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from './utils/projects'
import './MyProjects.scss'

function MyProjects(){

    return(
        <div className="MyProjects d-flex flex-column align-items-start w-100">
            {projects.map((project) =>(
                <ProjectCard project={project} key={project.link}/>
            ))}
        </div>
    )
}

export default MyProjects