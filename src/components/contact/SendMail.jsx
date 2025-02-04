import { useState } from "react";
import emailjs from "emailjs-com";

const SendMail = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    phonenumber: "",
    mailid: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendMail = (e) => {
    e.preventDefault();
    emailjs.init("gSNQ4v4w0nJ4ZaqT6"); // Initialize with your user ID

    emailjs
      .send("service_e0e4v5a", "template_yl02r4q", formData)
      .then((response) => {
        alert("Email sent successfully!");
      })
      .catch((error) => {
        alert("Email could not be sent: " + error.text);
      });
  };

  return (
    <form onSubmit={sendMail}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phonenumber"
        placeholder="Phone Number"
        value={formData.phonenumber}
        onChange={handleChange}
      />
      <input
        type="email"
        name="mailid"
        placeholder="Your Email"
        value={formData.mailid}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default SendMail;
