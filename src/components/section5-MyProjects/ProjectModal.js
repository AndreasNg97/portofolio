import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import launchIcon from './img/launch.svg'

function ProjectModal(props){
    let {name, link , preview, description, technologies} = props.project

    return(
        <Container fluid className="ProjectModal justify-content-center p-0">
            <Row className="m-0">
                <Col className="p-0">
                    <video src={preview}  muted loop autoPlay alt={`Preview of ${name}`} type="video/mp4" />
                </Col>
            </Row>
            
            <Row className=" p-3 m-0">
                <Col xs={12} className="border-bottom p-0 pb-2">
                    <h3 className="p-0">{name}</h3>
                </Col>
                <Col xs={12} className="py-2 p-0">
                    <p>
                        {description}
                    </p>
                    <a href={link} target="_blank" rel="noreferrer" >
                        <button className="mt-3">
                            <span className="mr-1"><img src={launchIcon}/></span>
                            View Site
                        </button>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectModal