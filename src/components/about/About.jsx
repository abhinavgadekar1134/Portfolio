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
                        <p>I am Computer Engineering student currently studing in last year Computer Engineering (BE). Aspiring software developer seeking hands-on experience and growth opportunities to apply and enhance programming skills in creating innovative and efficient software solutions. Committed to continuous learning and collaboration within dynamic development teams.</p>
                        <a href="https://drive.google.com/file/d/1ekQccYXAdXJnEJjgg1inM-_gIEJMrq8Y/view?usp=sharing"><button class="btn btn-outline-warning">Resume <i class="bi bi-file-text"></i></button></a>
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
                                    <h5>+91801-070-0292</h5>
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
