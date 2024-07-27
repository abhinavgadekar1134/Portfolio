import React from 'react'
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';


import { ReactTyped } from "react-typed";
import './home.css';
import Particalss from '../particals/Particalss';
const Home = () => {
  return (
    <>
       <nav class="home" id='home'>
        {/* <div class="curve"></div>
        <div class="curve2"></div> */}

        <div class="child">
          <p class="hello">Hello, </p>
          <p class="iam">I am <ReactTyped strings={["Abhinav Gadekar","Computer Engineering Student","Software Developer"]} typeSpeed={40} backSpeed={50} loop /></p>
          <span class="info"><p>Click above to know more about me 👇</p></span>
          <a href="https://drive.google.com/file/d/157FShp9d5Xhv2nHdIFKzPoQiteQ8PN2w/view?usp=drive_link"><button type="button" class="btn block">Resume  <FontAwesomeIcon icon={faFileLines} /></button></a>
        </div>

      </nav>
      <div className='absolute' style={{maxHeight: "84vh"}}>
        <Particalss />
      </div>
    </>
  )
}

export default Home
