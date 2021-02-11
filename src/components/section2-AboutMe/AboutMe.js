import React from 'react'
import {Row, Col} from 'react-bootstrap'
import placeholder1 from './img/placeholder-1.JPG'
import './AboutMe.scss'

function AboutMe(){
    return(
        <div className="AboutMe vh-100 py-5">
            <Row className="h-100">

                <Col xs={6} className="d-flex justify-content-center align-items-center p-2">
                    <div className="w-75 ">
                        <h3 className="mb-2 prim-color">Who am I?</h3>
                        <p>Lorem ipsum dolor sit amet, <span className="prim-color">consectetur adipiscing elit.</span> Cras feugiat elit a pulvinar tristique. Vestibulum luctus ex justo, sit amet ullamcorper eros hendrerit eget. Mauris pharetra viverra massa, id sodales diam.</p>
                        <h3 className="mt-3 mb-2 prim-color">What I can do for you</h3>
                        <p>Etiam dictum, risus sed semper ornare, magna diam suscipit lectus, convallis lacinia nisl dolor at nulla. <span className="prim-color">Vestibulum ante ipsum</span> primis in faucibus orci luctus et ultrices posuere cubilia curae</p>
                    </div>
                </Col>

                <Col xs={6} className="d-flex align-items-center justify-content-center p-0 pr-5">
                    <div>
                        <img src={placeholder1} className="s2-img mr-5"/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AboutMe