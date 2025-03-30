import React from 'react'
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import drumkit from '../images/drumKit.png'
import atminterface from '../images/atminterface.png';
import ecomm from '../images/ecomm.png';
import babyCry1 from '../images/babyCry1.png';
import babyCry2 from '../images/babyCry2.png';
import babyCry3 from '../images/babyCry3.png';

import ecomm1 from '../images/ecomm1.png';
import ecomm2 from '../images/ecomm2.png';
import ecomm3 from '../images/ecomm3.png';

import rental1 from '../images/rental1.jpg';
import rental2 from '../images/rental2.jpg';
import rental3 from '../images/rental3.jpg';
import rental4 from '../images/rental4.jpg';

import college1 from '../images/college1.jpg';
import college2 from '../images/college2.jpg';
import college3 from '../images/college3.jpg';

import dash1 from '../images/dash1.png';
import dash2 from '../images/dash2.png';
import dash3 from '../images/dash3.png';

import deepfake1 from '../images/deepfake1.png';
import deepfake2 from '../images/deepfake2.png';
import deepfake3 from '../images/deepfake3.png';

import todo1 from '../images/todo1.png';

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
      'projectlink': 'https://github.com/abhinavgadekar1134/DrumKit',
      'projectlivelink': 'https://abhinavgadekar1134.github.io/DrumKit/',
      'features': ["Interactive Drum Sounds – Play drums using mouse clicks or keyboard keys.",
        "Keyboard Event Handling – Supports keypress-based sound activation.",
        "Audio Integration – Uses JavaScript to play real drum sounds.",
        "Responsive Design – Works smoothly on both desktop and mobile."]

    },
    modal2: {
      'title': 'E-commerce Web',
      'modimg': ecomm1,
      'modimg1': ecomm2,
      'modimg2': ecomm3,
      'description': "In the ever-evolving world of online commerce, having a strong online presence is paramount. As consumers increasingly turn to the internet for their shopping needs, an e-commerce website is not just a luxury; it's a necessity. In my portfolio, I proudly present an immersive journey into the world of e-commerce web development.",
      'projectlink': 'https://github.com/abhinavgadekar1134',
      'projectlivelink': 'https://github.com/abhinavgadekar1134/DrumKit',
      'features': ["User Authentication – Secure login and registration system.",
        "Product Management – Add, update, and remove products easily.",
        "Shopping Cart – Allows users to add and manage selected items.",
        "Secure Checkout – Integrated payment gateway for safe transactions.",
        "Order Management – Admin can track and manage orders efficiently."]
    },
    modal3: {
      'title': 'ATM Interface',
      'modimg': atminterface,
      'modimg1': atminterface,
      'modimg2': atminterface,
      'description': "The main aim of this project is to design ATM interface using Java Programming. Automated Teller Machine enables the clients of a bank to have access to their account without going to the bank. This is achieved only by development the application using online concepts. This project helps us to understand various packages in java like awt, util, swing and its Components.",
      'projectlink': 'https://github.com/abhinavgadekar1134',
      'projectlivelink': 'https://github.com/abhinavgadekar1134/DrumKit',
      'features': ["Secure User Authentication – PIN-based login for account access.",
        "Balance Inquiry – Allows users to check their account balance.",
        "Cash Withdrawal – Enables secure withdrawal transactions.",
        "Deposit Functionality – Users can deposit money into their account.",
        "Fund Transfer – Transfer money between accounts seamlessly."]
    },
    modal4: {
      'title': 'Car Rental Application',
      'modimg': rental1,
      'modimg1': rental2,
      'modimg2': rental3,

      'description': 'Developed a comprehensive car rental application using the MERN stack, which includes essential user functionalities such as login and logout, enabling users to rent cars seamlessly after successful authentication. An application provides a user friendly interface to browse and select available cars for rental. Implemented a robust backend UI for administrators to manage the car inventory efficiently. This includes features to add, remove, updatecardetails, andmodifyrentalinformation, ensuring smooth and effective management of the car rental service. \n Use Mail as: abhinav@mail.com  Password: Abhinav@123  ',
      'projectlink': 'https://github.com/abhinavgadekar1134',
      'projectlivelink': 'https://car-rental-te.netlify.app/',
      'features': ["User Authentication & Security – Secure login/logout functionality with JWT-based authentication.",
        "Seamless Car Booking – Users can browse available cars and rent them effortlessly.",
        "User-Friendly Interface – Intuitive UI for smooth navigation and car selection.",
        "Car Search & Filters – Advanced search with filters (car type, price, availability, brand, etc.).",
        "Admin Dashboard – A powerful backend UI for managing cars, rentals, and users.",
        "Car Inventory Management – Admins can add, update, and remove car details easily.",
        "Rental Management – Modify rental durations, pricing, and availability dynamically.",
        "Booking History & Tracking – Users can view their past and active bookings."]
    },
    modal5: {
      'title': 'Baby Cry Detection System',
      'modimg': babyCry1,
      'modimg1': babyCry2,
      'modimg2': babyCry3,

      'description': 'Developed a system for baby cry detection and soothing system using Machine Learning technique. Used K-Nearest Neighbors (KNN) and Modified Priority Scheduling Algorithm. Aim is to enhance detection accuracy and implement an effective soothing mechanism by prioritizing critical cries. For Soothing babies we used Modified Priority Scheduling Algorithm. Also, utilized machine learning techniques to achieve reliable and responsive performance.',
      'projectlink': 'https://github.com/abhinavgadekar1134',
      'projectlivelink': 'https://github.com/abhinavgadekar1134/DrumKit',
      'features': ["Real-Time Baby Cry Detection – Uses Machine Learning to identify baby cries accurately.",
        "K-Nearest Neighbors (KNN) Algorithm – Classifies different types of baby cries.",
        "Modified Priority Scheduling Algorithm – Prioritizes critical cries for immediate response.",
        "Soothing Mechanism – Automatically plays calming sounds or music to soothe the baby.",
        "Noise Reduction – Filters out background noise to improve detection accuracy.",
        "Customizable Alerts – Sends notifications via SMS or app alerts to parents or caregivers.",
        "Live Monitoring – Provides real-time insights on baby’s crying patterns."]
    },
    modal6: {
      'title': 'College Management System',
      'modimg': college1,
      'modimg1': college2,
      'modimg2': college3,

      'description': 'The College Management System is an admin dashboard designed to streamline student and teacher data management. It enables administrators to efficiently insert, update, and delete records for students and teachers through an intuitive interface. The system ensures secure and organized handling of institutional data, improving administrative workflows. Built for scalability and ease of use, it caters to modern educational institution needs. This system simplifies routine tasks, reducing manual efforts and enhancing productivity.',
      'projectlink': 'https://github.com/abhinavgadekar1134',
      'projectlivelink': 'https://github.com/abhinavgadekar1134/DrumKit',
      'features': ["Student Management – Add, update, and delete student records efficiently.",
        "Teacher Management – Maintain faculty records with role-based access.",
        "Course & Subject Management – Assign subjects to teachers and track course details.",
        "Secure Authentication – Role-based login system for admins, teachers, and students."]

    },
    modal7: {
      'title': 'Admin Dashboard',
      'modimg': dash1,
      'modimg1': dash2,
      'modimg2': dash3,

      'description': `Developed a MERN Stack Admin Dashboard for centralized control of business operations, providing features like user management and inventory management. Implemented a RESTful API to enable seamless data exchange between the frontend and backend, ensuring efficient and secure data access. The dashboard offers a user-friendly interface for administrators to manage users, roles, and permissions, enhancing operational efficiency and control. The application is designed to be scalable and customizable, catering to diverse business needs. \n Use Mail as: admin@mail.com  Password: Admin@123 `,
      'projectlink': 'https://github.com/abhinavgadekar1134/Admin_Dashboard_MERN',
      'projectlivelink': 'https://admindashboard-mern.netlify.app/',
      'features': ["User Management – Admins can add, update, and remove users with role-based access control.",
        "Role & Permission Control – Granular access control for different admin roles.",
        "Inventory Management – Efficiently manage products, services, or any business assets.",
        "Real-Time Data Updates – Ensure instant synchronization between frontend and backend.",
        "Analytics & Reports – Generate insights with visual dashboards and key metrics.",
        "Secure Authentication – Implemented JWT-based authentication for secure admin access.",
        "RESTful API Integration – Smooth data exchange between frontend and backend."]

    }
    , modal8: {
      'title': 'Deepfake Detection Tool',
      'modimg': deepfake1,
      'modimg1': deepfake2,
      'modimg2': deepfake3,
      'description': 'Developed an advanced deepfake detection system utilizing a hybrid CNN-LSTM model, achieving 78.61% accuracy and an F1 score of 0.7844. The model effectively analyzes facial features and temporal patterns to distinguish real and fake images with high precision. Designed and implemented a React-based frontend with a Flask backend, enabling real-time deepfake detection and seamless user interaction. The system allows users to upload images for analysis and receive instant results, making deepfake identification more accessible and efficient.',
      'projectlink': 'https://github.com/abhinavgadekar1134/Deepfake_Detection__tool',
      'projectlivelink': 'https://deepfake-detection-tool.netlify.app/',
      'features': ['API Integration – Offers an API for developers to integrate deepfake detection into other applications.', ' Tampering Detection – Identifies inconsistencies in lighting, facial expressions, and motion artifacts. ', 'AI-Powered Detection – Uses advanced machine learning models (Residual CNN, LSTM) to analyze deepfakes.', '  Multi-format Support – Supports images and videos for detection.']
    }
    , modal9: {
      'title': 'Gen AI To-Do List',
      'modimg': todo1,
      'modimg1': todo1,
      'modimg2': todo1,

      'description': 'An intelligent and user-friendly to-do list powered by AI, designed to enhance productivity with smart task management features. Built using HTML, CSS, and JavaScript, the app leverages Groq Cloud for AI-driven task automation.  Key Features: AI-Powered Task Management – Add, update, and delete tasks effortlessly with AI assistance. Smart Task Suggestions – AI analyzes tasks and suggests priorities to improve efficiency. Real-Time Updates – Instant feedback for seamless task modifications. Simple & Intuitive UI – A clean, responsive interface for smooth user experience.This project showcases my ability to integrate AI with frontend technologies, delivering an interactive and efficient task management solution. 🚀',
      'projectlink': 'https://github.com/abhinavgadekar1134/To_do_app',
      'projectlivelink': 'https://abhinavgadekar1134.github.io/To_do_app/',
      'features': ["Smart Task Suggestions – AI analyzes tasks and suggests priorities to improve efficiency.", "Real-Time Updates – Instant feedback for seamless task modifications.", "Simple & Intuitive UI  A clean, responsive interface for smooth user experience."],
    }
  }
  var modd = [modals.modal8, modals.modal4, modals.modal2, modals.modal9, modals.modal5, modals.modal6, modals.modal3, modals.modal7, modals.modal1]
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
              <p class='justified-text'>
                {curmodal.data.description}

                <h6>✨Key Features: </h6>
                <ul style={{ listStyle: "none", padding: 1, margin: 0 }}>
                  {curmodal.data.features.map((item, index) => (
                    <li key={index}>✅ {item}</li>
                  ))}
                </ul>

              </p>
              <center><a href={curmodal.data.projectlink}><span className='click-prj'>Click here: &nbsp;🛠 </span>View Source code</a>
                &nbsp;| <a href={curmodal.data.projectlivelink}>🔗 Live Project</a>
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
