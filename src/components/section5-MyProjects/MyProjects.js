import React, { useRef, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from './utils/projects'
import { Row } from 'react-bootstrap'
import './MyProjects.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function MyProjects(){
    gsap.registerPlugin(ScrollTrigger)
    const triggerRefresh = useRef(null)
    
    useEffect(() => {
        const el = triggerRefresh.current
        ScrollTrigger.create({
            trigger : el,
            start : 'top bottom',
            onEnter : () => {
                ScrollTrigger.refresh()
            }
        })
    })
    return(
        <div ref={triggerRefresh} id="MyProjects" className="d-flex justify-content-center align-items-center">
            <Row className="s5-project-row justify-content-center p-5">
                {projects.map((project, i) =>(
                    <ProjectCard project={project} key={project.link}/>
                ))}
            </Row>
        </div>
    )
}

export default MyProjects