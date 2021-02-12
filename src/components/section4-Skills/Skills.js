import React, { useEffect, useRef } from 'react'
import { languages, libraries } from './utils/skillsArrays'
import './Skills.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { store } from '../../index'
 
function Skills() {
    gsap.registerPlugin(ScrollTrigger)
    const skillsRef = useRef(null)

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

    return (
        <div ref={skillsRef} className="Skills vh-100 d-flex flex-column flex-wrap justify-content-center">

            <div className="skill-section d-flex flex-column mb-5 align-items-center">
                <h2 className=" mb-3">Languages</h2>
                <div className="d-flex justify-content-around position-relative">
                    {languages.map((language) => (
                        <div className={`s4-icon-container mx-2 container-${language.class}`} key={language.name}>
                            <p className="text-to-dissapear text-center mb-2">{language.name}</p>
                            <img src={language.icon} className={`s4-icon ${language.class}`} alt={language.name + " logo"} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="skill-section d-flex flex-column flex-wrap mt-5 align-items-center">
                <h2 className=" mb-3">Libraries</h2>
                <div className="d-flex justify-content-around position-relative">
                    {libraries.map((library) => (
                        <div className={`s4-icon-container mx-2 container-${library.class}`} key={library.name}>
                            <p className="text-to-dissapear text-center mb-2">{library.name}</p>
                            <img src={library.icon} className={`s4-icon ${library.class}`} border alt={library.name + " logo"} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills


