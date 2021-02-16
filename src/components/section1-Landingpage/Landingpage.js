import React from 'react'
import {Row, Col} from 'react-bootstrap'
import profilePicture from './img/profil.jpeg'
import arrows from './img/two-arrows.svg'
import './Landingpage.scss'

function Landingpage() {
    return (
        <div id="Landingpage" className="d-flex flex-column align-items-center position-relative py-xl-5 py-xs-0">
        
            <Row className="s1-row d-flex justify-content-center mb-xl-4 mb-xs-1">
                <Col xl={6} xs={12}>
                    <img src={profilePicture} className="w-100" alt="handsome guy AKA Andreas"/>
                </Col>
            </Row>

            <Row className="s1-row d-flex justify-content-center my-4">
                <Col xl={6} xs={12} className="text-center">
                    <h1 className="mb-2 ">andreas nguyen</h1>
                    <h4 className=""><span className="s1-line mr-2">oo</span>Frontend Developer<span className="s1-line ml-2">oo</span></h4>
                </Col>
            </Row>

            <Row className="s1-row d-flex justify-content-center mb-5">
                <Col xl={6} xs={12} className="s1-text-container text-center ">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
            </Row>

        </div>
    )
}

export default Landingpage