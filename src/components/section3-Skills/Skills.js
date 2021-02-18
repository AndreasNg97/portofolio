import React, { useEffect } from 'react'
import { languages, libraries } from './utils/skillsArrays'
import { Row, Col, Container } from 'react-bootstrap'
import './Skills.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInView } from 'react-hook-inview' 
import { store } from '../../index'
import { currentSectionInView } from '../../redux/actionCreator'

function Skills() {
    gsap.registerPlugin(ScrollTrigger)
    const [sectionRef, inView] = useInView({threshold : 0.4})


    useEffect(() => {
        if(inView){
            store.dispatch(currentSectionInView(2))
        }
    },[inView])
    return (
        <Container ref={sectionRef} fluid id="Skills" className="d-flex flex-column align-items-center justify-content-center vh-100">

            <Row className="justify-content-center mb-sm-5 mb-3 ">
                <Col xs={12}>
                    <h2 className="text-center mb-4">Languages</h2>
                </Col>
                <Row className="justify-content-center w-75">
                    {languages.map((language) => (
                        <Col xs={4} md={2} className='d-flex flex-column align-items-center mb-3' key={language.name}>
                            <img src={language.icon} className='skill-icon' alt={language.name + " logo"} />
                            <p className="text-center mt-2">{language.name}</p>
                        </Col>
                    ))}
                </Row>
            </Row>

            <Row className="justify-content-center mt-sm-5 mt-3 ">
                <Col xs={12}>
                    <h2 className="text-center mb-4">Libraries</h2>
                </Col>
                <Row className="justify-content-center w-75">
                    {libraries.map((library) => (
                        <Col xs={4} md={2} className='d-flex flex-column align-items-center mb-3' key={library.name}>
                            <img src={library.icon} className='skill-icon' border alt={library.name + " logo"} />
                            <p className="text-center mt-2">{library.name}</p>
                        </Col>
                    ))}
                </Row>
            </Row>

        </Container>
    )
}

export default Skills
