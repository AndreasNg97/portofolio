import React, { useEffect, useRef } from 'react'
import './styles/App.scss'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Landingpage from './components/section1-Landingpage/Landingpage'
import AboutMe from './components/section2-AboutMe/AboutMe'
import Skills from './components/section3-Skills/Skills'
import MyProjects from './components/section4-MyProjects/MyProjects'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function App(){
  gsap.registerPlugin(ScrollTrigger)
  const appRef = useRef(null)
  
  useEffect(() => {
    const el = appRef.current
    gsap.utils.toArray(el.querySelectorAll('section').forEach(eachSection => {

    }))
    ScrollTrigger.create({
      trigger : el.querySelectorAll('section'),
      start : '5% bottom',
      end : 'bottom top',
    })
  })
  return(
    <div ref={appRef} className="App">
      < NavigationBar />
      < Landingpage /> 
      < AboutMe /> 
      < Skills />
      < MyProjects /> 
{/*           <div className="pinned">
        <div className="scrollPast">
          < MyProjects />  
        </div>   */}
    </div>
  )
}

export default App