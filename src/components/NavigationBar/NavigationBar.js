import React from 'react'
import './NavigationBar.scss'
import { Container, Row, Col }  from 'react-bootstrap'
function NavigationBar(){
    return(
        <Container fluid className="NavigationBar py-2">
            <Row className="justify-content-center">
                <Col  lg={4} xl={3}className=" d-flex justify-content-around">
                    <a href='#Landingpage' style={{color:''}}>Home</a>
                    <a href='#AboutMe'>About</a>
                    <a href='#Skills'>Skills</a>
                    <a href='#MyProjects'>Projects</a>
                </Col>
            </Row>
        </Container>
    )
}

export default NavigationBar