import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../Compound/Footer/Footer.css';
import logo from './Images/logo_fully_completed.png';
import '../../Compound/BODY/ScrollBar.css';
import { SlSocialFacebook } from 'react-icons/sl';
import { SlSocialGoogle } from 'react-icons/sl';
import { SlSocialInstagram } from 'react-icons/sl';
import { SlSocialTwitter } from 'react-icons/sl';
import { SlSocialLinkedin } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const form1 = useRef();
  const ScrollDown = () => {
    window.scrollTo(0, document.body.scrollHeight);
  }

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm('service_ld929li', 'template_lnk0a9e', form1.current, 'X8Ze2u86qIiQD_ut8')
      .then((result) => {
        alert("Your message is send to our representative")
        // window.location.reload();
      }, (error) => {
        alert("Something went wrong")
      });
  };

  return (
    <footer>
      <div className="row">
        <div className="col">
          <div className="footer-logo-and-footer-headding">
            <img src={logo} alt='logo' className='logo' />
            <span className='footer-span-heading'>Secure Haven</span>
          </div>

          <p className='footer-para'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi repudiandae neque repellendus non, a
            possimus rerum eveniet quibusdam quam deserunt eos ea aliquid culpa blanditiis eius temporibus. Molestias,
            impedit quia.
          </p>
        </div>
        <div className="col">
          <h3 className='footer-col-heading'>Contact & Email</h3>
          <a href="mailto:hubanimal739@gmail.com" className="email-id">hubanimal739@gmail.com</a>
          <h4 className='footer-col-contact'>+91 - 0123456789</h4>
          <h4 className='footer-col-contact'>+91 - 0123456789</h4>
          <h4 className='footer-col-contact'>+91 - 0123456789</h4>
          <h4 className='footer-col-contact'>+91 - 0123456789</h4>
        </div>
        <div className="col">
          <h3 className='footer-col-heading'>Menus</h3>
          <ul className='footer-ul'>
            <li className='Footer-li'><a onClick={() => { navigate("/") }} href="#Home" className='footer-li-link'>Home</a></li>
            <li className='Footer-li'><a href="#AboutUs" className='footer-li-link'>About</a></li>
            <li className='Footer-li'><a onClick={ScrollDown} className='footer-li-link'>Contact Us</a></li>
            <li className='Footer-li'><a onClick={() => { navigate("/Shooping") }} className='footer-li-link'>Shopping</a></li>
            <li className='Footer-li'><a onClick={() => { navigate("/Support") }} className='footer-li-link'>Support</a></li>
          </ul>
        </div>
        <div className="col">
          <h3 className='footer-col-heading'>Message</h3>
          <form ref={form1} onSubmit={sendEmail} className='footer-form'>
            <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/secured-letter--v1.png" alt="secured-letter--v1" className='footer-form-letter-img-logo' />
            <input type="text" placeholder="Enter your message" name='message' className='footer-form-input' required />
            <button type="submit" className='footer-form-button'><img width="24" height="24" src="https://img.icons8.com/ios-glyphs/24/FFFFFF/circled-right-2.png" alt="circled-right-2" className='footer-form-button-arrow-img-logo' /></button>
          </form>
          <div className="social-media">
            <SlSocialFacebook className='footer-social-media-img-logo' alt='Facebook-new' />
            <SlSocialGoogle className='footer-social-media-img-logo' alt='google-new' />
            <SlSocialInstagram className='footer-social-media-img-logo' alt='instagram-new' />
            <SlSocialTwitter className='footer-social-media-img-logo' alt='twitter--v1' />
            <SlSocialLinkedin className='footer-social-media-img-logo' alt='linkedin' />
          </div>
        </div>
      </div>
      <hr className='footer-horizontal-rule' />
      <p className="copy-right">Secure Haven &copy; Copyrights 2023 - Reserved by Dassrity</p>
    </footer>
  );
};

export default Footer;
