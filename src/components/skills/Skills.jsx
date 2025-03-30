import React from 'react';
import './Skills.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import c from '../images2/c.png';
import cpp from '../images2/cpp.png';
import cs from '../images2/css.png';
import ht from '../images2/html.png';
import jav from '../images2/java1.png';
import javascri from '../images2/js.png';
import reactjs from '../images2/react.png';
import sqlimg from '../images2/mysqll.png';
import pythonimg from '../images2/python.png';

const skills = [
  { img: c, name: 'C' },
  { img: cpp, name: 'C++' },
  { img: ht, name: 'HTML 5' },
  { img: cs, name: 'CSS 3' },
  { img: jav, name: 'Java' },
  { img: javascri, name: 'JavaScript' },
  { img: reactjs, name: 'ReactJS' },
  { img: sqlimg, name: 'SQL' },
  { img: pythonimg, name: 'Python' }
];

const Skills = () => {
  return (
    <div className='skills-section text-center py-5' style={{ backgroundColor: '#f8f9fa' }}>
      <h2 className='mb-4' style={{ fontWeight: 'bold', color: '#333' }}>Skills</h2>
      <Container>
        <Row className='justify-content-center'>
          {skills.map((skill, index) => (
            <Col lg={3} md={3} sm={4} xs={6} key={index} className='mb-4 d-flex justify-content-center'>
              <Card className='skill-card text-center p-3 shadow-sm' style={{ width: '120px', borderRadius: '10px', transition: 'transform 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <Card.Img variant='top' src={skill.img} className='skill-image' style={{ width: '70px', height: '70px', margin: 'auto' }} />
                <Card.Body>
                  <Card.Title className='skill-title' style={{ fontSize: '14px', fontWeight: '600', color: '#007bff' }}>{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Skills;