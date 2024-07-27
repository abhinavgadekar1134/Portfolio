import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbaar.css'
import About from '../about/About';
import Contactme from '../contact/Contactme';
import Projects from '../projects/Projects';
import Home from '../home/Home';
import { Link, useNavigate } from 'react-router-dom';

const Navbarr = () => {
    const ChanngeToggle = () =>{
        const ddiivv = document.getElementById('responsive-navbar-nav');

        ddiivv.classList.remove("show");

        
        const ddiivv2 = document.getElementById('navbbbaarr');
        ddiivv2.classList.add("collapsed");

    }
    return (
        <>
            <Navbar collapseOnSelect  expand="lg"  data-bs-theme="dark" className="navbk" >
                <Container className='bgcontainer'>
                    <Navbar.Brand className='nav-brd' href="#home">Abhinav Gadekar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" id='navbbbaarr' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link onClick={()=>ChanngeToggle()} className='nav-link' to={"/home"}>Home</Link>
                            <Link onClick={()=>ChanngeToggle()} className='nav-link' to={"/aboutme"}>About Me</Link>
                            <Link onClick={()=>ChanngeToggle()} className='nav-link' to={"/skills"}>Skills</Link>
                            <Link onClick={()=>ChanngeToggle()} className='nav-link' to={"/projects"}>Projects</Link>
                            <Link onClick={()=>ChanngeToggle()} className='nav-link' to={"/contactme"}>Contact Me</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
    )
}

export default Navbarr
