import React from 'react'
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import drumkit from '../images/drumKit.png'
import atminterface from '../images/atminterface.png';
import ecomm from '../images/ecomm.png';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../images/drumKit.png';
const Projects = () => {

  const [curmodal, setcurmodal] = useState({ flag: false, data: {} });
  const setcontent = (con) => {
    setcurmodal({ flag: true, data: con });
  }

  var modals = {
    modal1: {
      'title': 'Drum Kit',
      'modimg': drumkit,
      'modimg1': drumkit,
      'modimg2': drumkit,
      'description': "In this fun and engaging web development project, I had created an interactive drum kit using HTML, CSS, and JavaScript. This project will allow users to play various drum sounds by clicking on the corresponding drum pads or by using keyboard keys. It's an excellent way to learn about event handling, audio integration, and user interface design while having a blast making music!",
      'projectlink': 'https://github.com/abhinavgadekar1134/DrumKit'
    },
    modal2: {
      'title': 'E-commerce Web',
      'modimg': ecomm,
      'modimg1': ecomm,
      'modimg2': ecomm,
      'description': "In the ever-evolving world of online commerce, having a strong online presence is paramount. As consumers increasingly turn to the internet for their shopping needs, an e-commerce website is not just a luxury; it's a necessity. In my portfolio, I proudly present an immersive journey into the world of e-commerce web development.",
      'projectlink': 'https://github.com/abhinavgadekar1134'
    },
    modal3: {
      'title': 'ATM Interface',
      'modimg': atminterface,
      'modimg1': atminterface,
      'modimg2': atminterface,
      'description': "The main aim of this project is to design ATM interface using Java Programming. Automated Teller Machine enables the clients of a bank to have access to their account without going to the bank. This is achieved only by development the application using online concepts. This project helps us to understand various packages in java like awt, util, swing and its Components.",
      'projectlink': 'https://github.com/abhinavgadekar1134'
    },
    modal4: {
      'title': 'ssdf',
      'modimg': drumkit,
      'modimg1': drumkit,
      'modimg2': drumkit,

      'description': 'fgb kit isfgbng elit. Aliquid quod officia quos corporis tempore, dolores, animi debitis quae eius voluptates veritatis necessitatibus facere? Sequi est minima eos incidunt dolorum hic?    ',
      'projectlink': 'https://github.com/abhinavgadekar1134'
    },
  }
  var modd = [modals.modal1, modals.modal2, modals.modal3, modals.modal4]
  var count = 0; var flag = false;
  return (
    <>
      <div className='projectmaindiv'><center><h2 >My Projects</h2></center>
        <div id='projects'>

          <Container className='projects-container'>

            <hr />
            <Row>
              {

                modd.map((cc) => {
                  count++;

                  return (
                    <>

                      <Col className='projects-cols'>
                        <p>{cc.title}</p>
                        <img src={cc.modimg} className="proj-img0" alt="" onClick={(e) => setcontent(cc)} />
                      </Col>
                    </>

                  )
                })
              }
            </Row>
          </Container>

        </div>

        {curmodal.flag &&
          <div className="modal111">
            <div onClick={(e) => setcurmodal({ flag: false, data: {} })} className="overlay"></div>
            <div className="modal111-content">
              <center><h2>{curmodal.data.title}</h2>
              </center>
              <div>
                <Carousel>
                  <Carousel.Item>
                    <img src={curmodal.data.modimg} alt="" className='proj-img' />

                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={curmodal.data.modimg1} alt="" className='proj-img' />

                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={curmodal.data.modimg2} alt="" className='proj-img' />

                  </Carousel.Item>
                </Carousel>
                
              </div>
              <p>
                {curmodal.data.description}
              </p>
              <center><a href={curmodal.data.projectlink}><span className='click-prj'>Click here: &nbsp;</span>View Source code</a>
                <p>Click Outside box to exit</p></center>
              <button className='close-modal111' onClick={(e) => setcurmodal({ flag: false, data: {} })}><FontAwesomeIcon icon={faXmark} /></button>
            </div>
          </div>
        }

      </div>

    </>
  )
}

export default Projects
