import React, { useEffect, useRef, useState } from 'react'
import Modal from 'react-modal'
import { Col } from 'react-bootstrap'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectModal from './ProjectModal'

function ProjectCard(props) {
    let { name, link, thumbnail, preview, description, technologies } = props.project
    gsap.registerPlugin(ScrollTrigger)
    const cardRef = useRef(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        },
        overlay: {
            backgroundColor : '#162235c7'
        }
    };

    function getTechs() {
        let techs = []
        technologies.forEach(tech => {
            techs.push(tech)
        });
        return techs
    }

    function overlayAppear() {
        gsap.to(cardRef.current.querySelector('.project-card-overlay'), {
            opacity: 1,
            duration: 0.4
        })
        gsap.fromTo(cardRef.current.querySelectorAll('h3, .icon-container'),
            {
                opacity: 0,
                y: -30,
                duration: 0.1,
                stagger: 0.1
            },{
                opacity: 1,
                y: 0,
                duration: 0.1,
                stagger: 0.1
        })
        gsap.fromTo(cardRef.current.querySelector('button'),
            {
                opacity: 0,
                y: -30,
                duration: 0.1
            },{
                opacity: 1,
                y: 0,
                duration: 0.1
        })
    }

    function overlayDissapear() {
        gsap.to(cardRef.current.querySelector('.project-card-overlay'), {
            opacity: 0,
            duration: 0.4
        })
        gsap.to(cardRef.current.querySelectorAll('h3, .icon-container'), {
            opacity: 0,
            y: -30,
            duration: 0.2,
            stagger: 0.1
        })
        gsap.to(cardRef.current.querySelector('button'), {
            opacity: 0,
            y: 30,
            duration: 0.1
        })
    }
    useEffect(() => {
        const cardAppear = gsap.fromTo(cardRef.current,
            {
                opacity: 0,
                y: -50,
                duration: 0.5
            }, {
            opacity: 1,
            y: 0,
            duration: 0.5
        }
        )
        ScrollTrigger.create({
            trigger: cardRef.current,
            animation: cardAppear,
            start: '20% 70%',
            end: '80% top',
            toggleActions: 'play reverse play none'
        })
    },[])

    return (
        <Col md={6} lg={5} ref={cardRef} className="ProjectCard position-relative p-0" style={{ backgroundImage: `url(${thumbnail})` }}
            onMouseEnter={() => {
                overlayAppear()
            }}
            onMouseLeave={() => {
                overlayDissapear()
            }}>
            <div className="project-card-overlay d-flex flex-column justify-content-around align-items-center position-absolute pb-3 w-100 h-100">
                <div>
                    <h3 className="mb-2 text-center">{name}</h3>
                    <div className="icon-container d-flex justify-content-center">
                        {getTechs().map((tech, i) => (
                            <img src={tech.icon} className="tech-icon mx-1" alt={`${tech.name} + icon`} key={i} />
                        ))}
                    </div>
                </div>
                <button 
                    onClick={() => {
                        setIsModalOpen(true) 
                        overlayDissapear()}}>
                        LEARN MORE
                </button>
            </div>
            <img src={thumbnail} className="invisible position-relative" style={{ width: '100%' }} />

            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                style={customStyles}
                ariaHideApp={false}>
                    <ProjectModal />
            </Modal>
        </Col>
    )
}

export default ProjectCard
