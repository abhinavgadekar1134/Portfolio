import React from 'react'
import './Contactme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faLinkedin, faSquareXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import SendMail from './SendMail';
import Particalss from '../particals/Particalss'
import { useState } from 'react';
import emailjs from "@emailjs/browser";
const Contactme = () => {
  const [formData, setFormData] = useState({
    sendername: "",
    cno: "",
    mailid: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_sapssyd",     // 🔹 Your Service ID
        "template_mev43vk",    // 🔹 Your Template ID
        formData,
        "4E804E7kMpaOZRE0x"     // 🔹 Your Public Key
      )
      .then(() => {
        alert("You will receive update shortly!");
      })
      .catch((error) => {
        alert("Email could not be sent: " + error.text);
      });
  }

  return (
    <>
      <div className='absolute' style={{ maxHeight: "84vh" }}>
        <Particalss />
      </div>

      <div className="contact-me" id="contactme">
        <center>
          <h2>Contact Me</h2>
        </center>
        <hr />
        <form onSubmit={sendMail}>
          <table className="table-contact">
            <tbody>
              <tr>
                <td>
                  <input
                    id="sendername"
                    type="text"
                    placeholder="Name"
                    className="ip"
                    value={formData.sendername}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    id="cno"
                    type="tel"
                    placeholder="Contact No"
                    className="ip"
                    value={formData.cno}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    id="mailid"
                    type="email"
                    placeholder="Mail-id"
                    className="ip"
                    value={formData.mailid}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    className="ip"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <textarea
                    id="message"
                    cols="30"
                    rows="5"
                    placeholder="Enter message"
                    className="ip"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn btn-success" type="submit">
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
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
