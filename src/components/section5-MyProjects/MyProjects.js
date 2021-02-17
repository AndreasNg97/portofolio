import React, { useEffect } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from './utils/projects'
import { Row } from 'react-bootstrap'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView } from 'react-hook-inview'
import './MyProjects.scss'
import { store } from '../../index'
import { currentSectionInView } from '../../redux/actionCreator'

function MyProjects(){
    gsap.registerPlugin(ScrollTrigger)
    
    const [sectionRef, inView] = useInView({threshold : 0.4})

    useEffect(() => {
        if(inView){
            store.dispatch(currentSectionInView(3))
        }
    },[inView])
    
    useEffect(() => {
        const el = sectionRef.current
        ScrollTrigger.create({
            trigger : el,
            start : 'top bottom',
            onEnter : () => {
                ScrollTrigger.refresh()
            }
        })
    })
    return(
        <div ref={sectionRef} id="MyProjects" className="d-flex justify-content-center align-items-center p-5">
            <Row className="s5-project-row justify-content-center py-5">
                {projects.map((project) =>(
                    <ProjectCard project={project} key={project.link}/>
                ))}
            </Row>
        </div>
    )
}

export default MyProjects