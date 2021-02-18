import React, { useEffect, useRef } from 'react'
import './NavigationBar.scss'
import { Container, Row, Col }  from 'react-bootstrap'
import { store } from '../../index'


function NavigationBar(){
    const nav_0 = useRef()
    const nav_1 = useRef()
    const nav_2 = useRef()
    const nav_3 = useRef()

    const navArr = [
        nav_0,
        nav_1,
        nav_2,
        nav_3
    ]

    function highlightNav(index){
        // import variables scss
        const highlightedNav = navArr.filter((nav, i) => i === index )
        const notHighlightedNav = navArr.filter((nav, i) => i !== index)

        notHighlightedNav.forEach((nav) => { nav.current.classList = 'p-1' })
        highlightedNav[0].current.classList.add('highlighted')
    }


    useEffect(() => {
        store.subscribe(() => {
            highlightNav(store.getState().inViewReducer[0])
        })
        
    })
    return(
        <Container fluid className="NavigationBar pb-2">
            <Row className="justify-content-center">
                <Col lg={4} xl={3}className=" d-flex justify-content-around">
                    <a ref={nav_0} className="p-1" href='#Landingpage'>Home</a>
                    <a ref={nav_1} className="p-1" href='#AboutMe'>About</a>
                    <a ref={nav_2} className="p-1" href='#Skills'>Skills</a>
                    <a ref={nav_3} className="p-1" href='#MyProjects'>Projects</a>
                </Col>
            </Row>
        </Container>
    )
}

export default NavigationBar