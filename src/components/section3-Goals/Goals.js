import React from 'react'
import { Col, Row } from 'react-bootstrap'
import successIcon from './img/success.png'
import './Goals.scss'

function Goals(){
    return(
        <div className="Goals">
            <Row className="s3-row-1">

                <Col xs={4} className="d-flex justify-content-end align-items-center p-5">
                    <img src={successIcon} className="w-75 " alt="Flag on a summit"/>
                </Col>

                <Col className="s3-right-col d-flex justify-content-center align-items-center py-5 ">
                    <div className="s3-ul-container ">
                        <ul>
                            <li className="prim-color">Quisque id dolor pellentesque, sodales nulla condimentum.</li>
                            <li className="prim-color">Vivamus elementum tortor vitae imperdiet mollis.</li>
                            <li className="prim-color">Fusce faucibus mauris at accumsan vestibulum.</li>
                            <li className="prim-color">Proin facilisis sem non auctor scelerisque.</li>
                            <li className="prim-color">Sed molestie magna sed faucibus facilisis.</li>
                        </ul>
                    </div>
                </Col>

            </Row>

            <Row className="s3-row-2 d-flex justify-content-center">

                <Col xs={8}>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis leo at sem commodo euismod. Vestibulum id blandit est. Morbi arcu est, fringilla sit amet malesuada a, tempor sed neque.</p>
                </Col>
                
            </Row>
        </div>
    )
}

export default Goals



