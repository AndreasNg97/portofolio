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

            <Row className="skill-section justify-content-center mb-sm-5 mb-3 ">
                <Col xs={12}>
                    <h2 className="text-center mb-4">Languages</h2>
                </Col>
                <Row className="justify-content-center w-75">
                    {languages.map((language) => (
                        <Col xs={4} md={2} className='s4-icon-container d-flex flex-column align-items-center mb-3' key={language.name}>
                            <img src={language.icon} className='s4-icon' alt={language.name + " logo"} />
                            <p className="text-to-dissapear text-center mt-2">{language.name}</p>
                        </Col>
                    ))}
                </Row>
            </Row>

            <Row className="skill-section justify-content-center mt-sm-5 mt-3 ">
                <Col xs={12}>
                    <h2 className="text-center mb-4">Libraries</h2>
                </Col>
                <Row className="justify-content-center w-75">
                    {libraries.map((library) => (
                        <Col xs={4} md={2} className='s4-icon-container d-flex flex-column align-items-center mb-3' key={library.name}>
                            <img src={library.icon} className='s4-icon' border alt={library.name + " logo"} />
                            <p className="text-to-dissapear text-center mt-2">{library.name}</p>
                        </Col>
                    ))}
                </Row>
            </Row>

        </Container>
    )
}

export default Skills

/* 
            <div className="skill-section d-flex flex-column mb-5 align-items-center border border-info">
                <h2 className=" mb-3">Languages</h2>
                <div className="d-flex justify-content-around position-relative border border-warning">
                    {languages.map((language) => (
                        <div className='s4-icon-container d-flex flex-column align-items-center mx-2 flex-wrap' key={language.name}>
                            <p className="text-to-dissapear text-center mb-2">{language.name}</p>
                            <img src={language.icon} className='s4-icon' alt={language.name + " logo"} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="skill-section d-flex flex-column mt-5 align-items-center border border-info">
                <h2 className=" mb-3">Libraries</h2>
                <div className="d-flex justify-content-around position-relative border border-warning">
                    {libraries.map((library) => (
                        <div className='s4-icon-container d-flex flex-column align-items-center mx-2 flex-wrap' key={library.name}>
                            <p className="text-to-dissapear text-center mb-2">{library.name}</p>
                            <img src={library.icon} className='s4-icon' border alt={library.name + " logo"} />
                        </div>
                    ))}
                </div>
            </div>
*/
/* 
    function setPosition(el, position){
        gsap.to(el, {
            position : position,
            duration : 0.5,
        }).delay(0.1)
    }
    

    useEffect(() => {
        store.subscribe(() => {
                gsap.to(skillsRef.current.querySelectorAll('.s4-icon-container'),{
                    scale : 0,
                    width : 0,
                    transition : 0.2,
                    onComplete : () => {
                        setPosition(skillsRef.current.querySelectorAll('.s4-icon-container'), 'absolute')
                    }
                })
                gsap.utils.toArray(store.getState().technologiesReducer[0].forEach(tech => {
                    gsap.to(skillsRef.current.querySelector(`.container-${tech}`),{
                        scale : 1,
                        opacity : 1,
                        transition : 0.2,
                        width : 100,
                        onComplete : () => {
                            setPosition(`.container-${tech}`, 'relative')
                        }
                    })
                 }))
                if(store.getState().technologiesReducer[0].length === 0){
                    gsap.to(skillsRef.current.querySelectorAll('.s4-icon-container'),{
                        position : 'static',
                        opacity : 0.1,
                        scale : 1,
                        width : 100,
                        transition : 0.2,
                        onComplete : () => {
                            setPosition(skillsRef.current.querySelectorAll('.s4-icon-container'), 'relative')
                        }
                    })
                }
        })
    })
    useEffect(() => {
        const el = skillsRef.current
        const tl = gsap.timeline()
        tl.to(el.querySelectorAll('.skill-section'),{
            x : 450,
            marginRight : '1rem',
            stagger : 0.2
          })
        tl.to(el.querySelectorAll('.text-to-dissapear' ),{
            y : -10,
            opacity : 0
        })
        tl.to(el.querySelectorAll('.s4-icon-container'),{
            scale : 0.9,
            opacity : 0.1
        })

        ScrollTrigger.create({
                animation : tl,
                trigger : el,
                start : 'center 40%',
                toggleActions : 'restart pause resume reverse',
                
            })
    })
*/