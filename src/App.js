import React, { useEffect, useRef } from 'react'
//import LocomotiveScroll from 'locomotive-scroll'
import './App.scss'
import Landingpage from './components/section1-Landingpage/Landingpage'
import AboutMe from './components/section2-AboutMe/AboutMe'
import Goals from './components/section3-Goals/Goals'
import Skills from './components/section4-Skills/Skills'
import MyProjects from './components/section5-MyProjects/MyProjects'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function App(){
  gsap.registerPlugin(ScrollTrigger)
  const appRef = useRef(null)
  
/*   useEffect(() => {
    const el = appRef.current
    ScrollTrigger.create({
      trigger : el.querySelector('.pinned'),
      start: 'top top',
      pinSpacing : false,
      pin : true,
      endTrigger : el.querySelector('.scrollPast')
    })
  }) */
  
  return(
    <div ref={appRef} className="App">
        
          < Landingpage />
          < AboutMe />
          < Goals />
{/*           <div className="pinned">
          < Skills/>
        </div> */}
{/*         <div className="scrollPast">
          < MyProjects />  
        </div>   */}
    </div>
  )
}

export default App