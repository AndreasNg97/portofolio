import React from 'react'
import {Row, Col} from 'react-bootstrap'
import placeholder1 from './img/placeholder-1.JPG'
import './AboutMe.scss'

function AboutMe(){
    return(
        <div className="AboutMe vh-100">
            <Row className="h-100 justify-content-center">
                <Col sm={12} md={4} className="d-flex justify-content-center align-items-center mx-md-4 mx-lg-0">
                    <div className="text-container">
                        <h3 className="mb-2 prim-color">Who am I?</h3>
                        <p className="">
                            Lorem ipsum dolor sit amet, <span className="prim-color">consectetur adipiscing elit.</span> Cras feugiat elit a pulvinar tristique. Vestibulum luctus ex justo, sit amet ullamcorper eros hendrerit eget. Mauris pharetra viverra massa, id sodales diam.
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