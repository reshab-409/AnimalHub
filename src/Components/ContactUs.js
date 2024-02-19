import React, { useEffect, useRef, useState } from "react";
import map from './images/map.png';
import './Contact Us.css';
import './Contact Us Responsive.css';
import { AiFillQuestionCircle } from "react-icons/ai";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [number, setNumber] = useState()

  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
    if (number.length === 10) {
      emailjs.sendForm('service_eutvb1q', 'template_qnet8mq', form.current, 'lmMUnkF1_X3ulOr4t')
        .then((result) => {
          alert("Your message is send to our representative")
          window.location.reload()
        }, (error) => {
          alert("Something went wrong")
        });
    } else {
      alert("enter 10 digit number")
    }


  };

  return (
    <section ref={elementRef} className="contact-us-main-conteinor">
      <form ref={form} onSubmit={sendEmail} className="contact-us-form">
        <div className="contact-us-headding-sec">
          <span className="contact-us-headding">Rescue Team</span>
        </div>
        <div className="contact-us-form-input-groups">
          <input
            className="contact-us-form-input"
            name="name"
            placeholder="Enter Your Name"
            type="text"
            autoComplete="on"
            required
          />
        </div>
        <div className="contact-us-form-input-groups">
          <input
            className="contact-us-form-input"
            name="email"
            placeholder="Enter Your Email"
            type="email"
            autoComplete="on"
            required
          />
        </div>
        <div className="contact-us-form-input-groups">
          <input
            className="contact-us-form-input contact-us-form-input-number"
            name="phone"
            placeholder="Enter Your Number"
            type="number"
            autoComplete="on"
            onChange={(e) => { setNumber(e.target.value) }}
            required
          />
        </div>
        <div className="contact-us-form-input-groups">
          <input
            className="contact-us-form-input"
            name="location"
            placeholder="Enter Your Location"
            type="text"
            autoComplete="on"
            required
          />
        </div>
        <div className="contact-us-form-input-groups">
          <div className="contact-us-input-email-photo-sec">
            <div className="contact-us-photo-email-sec">
              <a href="mailto:animalhubrescue@gmail.com" className="contact-us-photo-email">animalhubrescue@gmail.com</a>
            </div>
            <div id="contact-us-tooltip">
              <span id="contact-us-tooltipText">In our gmail users provide images and videos regarding resque animals, we are taking step as soon as possible by us.... </span>
              <AiFillQuestionCircle className="contact-us-Tooltiptext-Hover" />
            </div>
          </div>
        </div>
        <div className="contact-us-form-submit-BTN-sec">
          <button type="submit" className="Contuct-us-Submit-BTN">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
