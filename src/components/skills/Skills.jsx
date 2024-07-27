import React from 'react'
import './Skills.css';
import { Container, Row, Col } from 'react-bootstrap'
import c from '../images2/c.png'
import cpp from '../images2/cpp.png'
import cs from '../images2/css.png'
import ht from '../images2/html.png'
import jav from '../images2/java.png'
import javascri from '../images2/js.png'

const Skills = () => {
  return (
    <>
      
      <div className='skilmaindiv'>
      <center><h2>Skills</h2></center>
        <Container>
          <Row>
            <Col>
              <div className="skildiv">
                <img className='skilimges' src={c} alt="" />
                <h4>C</h4>
              </div>
            </Col>
            <Col>
              <div className="skildiv">
                <img className='skilimges' src={cpp} alt="" />
                <h4>Cpp</h4>
              </div>
            </Col>
            <Col>
              <div className="skildiv">
                <img className='skilimges' src={ht} alt="" />
                <h4>HTML 5</h4>
              </div>
            </Col>


          </Row>
          <Row>
            <Col>
              <div className="skildiv">
                <img className='skilimges' src={cs} alt="" />
                <h4>css 3</h4>
              </div>
            </Col>
            <Col>
              <div className="skildiv">
                <img className='skilimges' src={jav} alt="" />
                <h4>Java</h4>
              </div>
            </Col>
            <Col>
              <div className="skildiv">
                <img className='skilimges' src={javascri} alt="" />
                <h4>Javascript </h4>
              </div>
            </Col>
          </Row>

        </Container>
      </div>
    </>

  )
}

export default Skills
