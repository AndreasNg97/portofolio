import React, { useEffect, useRef } from 'react'
import {Row, Col} from 'react-bootstrap'
import { currentElementHover } from '../../redux/actionCreator'
import { store } from '../../index'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


function ProjectCard(props){
    gsap.registerPlugin(ScrollTrigger)
    let {name, link, thumbnail, preview, description, technologies} = props.project
    const cardRef = useRef()
    const projectVideo = useRef(null)
/* 
    function playVideo(){
        projectVideo.current.play()
    }
    function resetVideo(){
        projectVideo.current.load()
    } */

    function techNames(){
        let names = []
        technologies.forEach(tech => {
            names.push(tech.name)
        });
        return names
    }

    function createScrollTrigger(){
        const el = cardRef.current
        ScrollTrigger.create({
            trigger : el,
            start : 'top center ',
            end: 'bottom center',
            onEnter : () => {
                ScrollTrigger.refresh()
                /* playVideo() */
                store.dispatch(currentElementHover(techNames()))
                cardRef.current.classList.toggle('cardFocus') 
            },
            onEnterBack : () => {
                /* playVideo() */
                store.dispatch(currentElementHover(techNames()))
                cardRef.current.classList.toggle('cardFocus') 
            },
            onLeave : () => {
                /* resetVideo() */
                store.dispatch(currentElementHover([]))
                cardRef.current.classList.toggle('cardFocus') 
            },
            onLeaveBack : () => {
                /* resetVideo() */
                store.dispatch(currentElementHover([]))
                cardRef.current.classList.toggle('cardFocus') 
            }
        })
    }

    useEffect(() => {
        createScrollTrigger()
    })

    return(
        <Row ref={cardRef} className="ProjectCard position-relative rounded-lg my-5 ml-4 w-50"
            onMouseEnter={() => {
                /* playVideo() */
                store.dispatch(currentElementHover(techNames()))
            }}
            onMouseLeave={() => {
                /* resetVideo() */
                store.dispatch(currentElementHover([]))
            }}
            >

            <Col className="project-card-left-col p-0 pt-2 d-flex flex-column">
                <div>
                    <a href={link} target="_blank" rel="noreferrer" style={{color:'#ccc'}}>
                        <h4 className="prim-color text-center">{name}</h4>
                    </a>
                    <p className="mt-3 mx-4">{description}</p>
                </div>

            </Col>

            <Col xs={7} className="project-card-right-col p-0">
                <div className="border">
                    <img src={thumbnail} className="w-100 h-100" alt={name + ' thumbnail'}/> 
                    <a href={link} target="_blank" rel="noreferrer" >
                      {/*   <video ref={projectVideo} className="video-player w-100 h-100" poster={thumbnail} muted loop src={preview} type="video/mp4"/> */}
                    </a>
                </div>
            </Col>
        </Row>
    )
}

export default ProjectCard
