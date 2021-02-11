import React, { useEffect, useRef, useState } from 'react'
import { languages, libraries } from './utils/skillsArrays'
import './Skills.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { store } from '../../index'
 
function Skills() {
    gsap.registerPlugin(ScrollTrigger)

    const skillsRef = useRef(null)

    useEffect(() => {
        store.subscribe(() => {
                gsap.to(skillsRef.current.querySelectorAll('.s4-icon'),{
                    scale : 0.9,
                    opacity : 0.1
                })
                gsap.utils.toArray(store.getState().technologiesReducer[0].forEach(tech => {
                    gsap.to(skillsRef.current.querySelector(`.${tech}`), {
                        scale : 1.1,
                        opacity : 1
                    }) 
                 }))
        })
    })
    useEffect(() => {
        const el = skillsRef.current
        const tl = gsap.timeline()
        tl.to(el.querySelectorAll('.skill-section'),{
            x : 450,
            stagger : 0.2
          })
        tl.to(el.querySelectorAll('.text-to-dissapear' ),{
            y : -10,
            opacity : 0
        })
        tl.to(el.querySelectorAll('.s4-icon'),{
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
        <div ref={skillsRef} className="Skills vh-100 d-flex flex-column justify-content-center">

            <div className="skill-section d-flex flex-column flex-wrap mb-5">
                <h2 className="text-center mb-3">Languages</h2>
                <div className="d-flex justify-content-center">
                    {languages.map((language) => (
                        <div className="mx-2" key={language.name}>
                            <p className="text-to-dissapear text-center mb-2">{language.name}</p>
                            <img src={language.icon} className={`s4-icon ${language.class}`} alt={language.name + " logo"} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="skill-section d-flex flex-column flex-wrap mt-5">
                <h2 className="text-center mb-3 libs">Libraries</h2>
                <div className="d-flex justify-content-center">
                    {libraries.map((library) => (
                        <div className="mx-2" key={library.name}>
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
