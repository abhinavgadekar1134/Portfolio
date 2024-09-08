import React from 'react'
import './Contactme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faLinkedin, faSquareXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import Particalss from '../particals/Particalss'
const Contactme = () => {
    return (
        <>
            <div className='absolute' style={{ maxHeight: "84vh" }}>
                <Particalss />
            </div>

            <div class="contact-me" id="contactme">
                <center><h2 class="">Contact Me</h2></center><hr />
                <table class="table-contact">
                    <tr>
                        <td><input id="sendername" type="text" placeholder="Name" class="ip" /></td>
                    </tr>
                    <tr>
                        <td><input id="cno" type="tel" placeholder="Contact No" class="ip" /></td>
                    </tr>
                    <tr>
                        <td><input id="mailid" type="mail" placeholder="Mail-id" class="ip" /></td>
                    </tr>
                    <tr>
                        <td><input id="subject" type="text" placeholder="Subject" class="ip" /></td>
                    </tr>
                    <tr>
                        <td><textarea name="" id="message" cols="30" rows="5" placeholder="Enter message" class="ip"></textarea></td>
                    </tr>
                    <tr>
                        <td><button class="btn btn-success" onclick="sendMail()">Submit</button></td>
                    </tr>
                </table>
            </div>

            <div class="copy">
                <a href="https://linkedin.com/in/abhinavgadekar" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className='cicons' icon={faLinkedin} />
                </a>

                <a href="https://x.com/AbhinavGadekar5" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className='cicons' icon={faSquareXTwitter} />
                </a>

                <a href="https://github.com/abhinavgadekar1134 " target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className='cicons' icon={faGithub} />
                </a>
                <p>Copyrights © {(new Date().getFullYear())} | Abhinav Gadekar All rights reserved.</p>

            </div>
        </>
    )
}

export default Contactme
