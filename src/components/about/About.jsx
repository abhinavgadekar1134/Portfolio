import React from 'react'
import img1 from '../images/img1.png'
import './About.css'
import { Container, Row, Col } from 'react-bootstrap'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <>
            <div class="container about-me">
                <div className="curveabout"></div><br />
                <center><h2 id="aboutme">About Me</h2><hr /></center>
                <div class="row">
                    <div class="col-sm parmyimg">
                        <center><img src={img1} alt="Abhinav images" class="myimg" /></center>
                    </div>
                    <div class="col-sm introabout">
                        <h2>ABHINAV GADEKAR</h2>
                        <p>I am a Computer Engineering (BE) graduate from AVCOE College, Sangamner, with hands-on experience in full-stack web development, Java, MERN stack, and AI-based projects. Currently enhancing my skills by learning AWS cloud technologies. Aspiring software developer seeking opportunities to apply and build innovative software solutions, while committed to continuous learning and collaborating effectively within dynamic development teams.</p>
                        <a href="https://drive.google.com/file/d/1JpZVbvroF4kbXZAn0PPsiaTMd8LgeJg-/view?usp=drive_link"><button class="btn btn-outline-warning">Resume <i class="bi bi-file-text"></i></button></a>
                        &nbsp;&nbsp;<Link to={'/contactme'} class="btn btn-outline-success">Contact Now <i class="bi bi-envelope"></i></Link>

                    </div>
                </div>
            </div>
            <div>
                <Container className='cont-details'>
                    <Row>
                        <Col>
                            <div className='con-det'>
                                <a href="tel:8010700592"><FontAwesomeIcon className='cont-icons' icon={faPhone} />
                                    <h5>+91801-070-0592</h5>
                                </a>
                            </div>
                        </Col>  
                        <Col className='cont-detailscol'>
                            <div className='con-det con-det2 '>
                                <a href="mailto:abhinavgadekar1379@gmail.com"><FontAwesomeIcon className='cont-icons' icon={faEnvelope} />
                                <h5>abhinavgadekar1379@gmail.com</h5></a>
                            </div>
                        </Col>
                        <Col>
                            <div className='con-det'>
                                <a href="https://maps.app.goo.gl/zSvqJEMUceoed5Wq6"><FontAwesomeIcon className='cont-icons' icon={faLocationDot} />
                                <h5>Sangamner Maharashtra,India</h5></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default About
