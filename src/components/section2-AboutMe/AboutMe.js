import React,{ useEffect } from 'react'
import {Row, Col} from 'react-bootstrap'
import placeholder1 from './img/placeholder-1.JPG'
import './AboutMe.scss'
import { useInView } from 'react-hook-inview'
import { store } from '../../index'
import { currentSectionInView } from '../../redux/actionCreator'

function AboutMe(){
    const [sectionRef, inView] = useInView({threshold : 0.4})
    
    useEffect(() => {
        if(inView){
            store.dispatch(currentSectionInView(1))
        }
    },[inView])
    return(
        <div ref={sectionRef} id="AboutMe" className="vh-100">
            <Row className="h-100 justify-content-center">
                <Col sm={12} md={4} className="d-flex justify-content-center align-items-center mx-md-4 mx-lg-0">
                    <div className="text-container">
                        <h3 className="mb-2 ">Who am I?</h3>
                        <p className="">
                            Lorem ipsum dolor sit amet, <span className="">consectetur adipiscing elit.</span> Cras feugiat elit a pulvinar tristique. Vestibulum luctus ex justo, sit amet ullamcorper eros hendrerit eget. Mauris pharetra viverra massa, id sodales diam.
                        </p>
                    </div>
                </Col>

                <Col sm={12} md={4} className="d-flex justify-content-center align-items-sm-start align-items-md-center mx-md-4 mx-lg-0">
                    <div className="s2-img-container">
                        <img src={placeholder1} className="s2-img w-100"/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AboutMe