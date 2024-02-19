import React from 'react';
import './Body.css';
import './Body-Responsive.css';
import AboutUsRemoveBG from './BG-Banner/About_Us-removebg.png';

const About = () => {
  return (
    <div>
        <div className='website-about-us' id='AboutUs'>
                <div className='about-us-carry-sec'>
                    <div className='about-us-intro'>
                        <div className='about-us-headding-sec'>
                            <h1 className='about-us-headding'>About Us</h1>
                        </div>
                        <div className='about-us-para-sec'>
                            <p className="about-us-para">Animals' health care is crucial for their overall well-being. Just like humans, animals can suffer from various health issues that require proper attention and treatment. Regular veterinary check-ups play a vital role in maintaining their health. During these visits, a qualified veterinarian examines the animal, ensuring it is free from any diseases or injuries. Vaccinations are also an important part of animal health care as they protect them from common diseases and prevent the spread of certain illnesses. Proper nutrition is another key aspect of animals' health care.</p>
                        </div>
                    </div>
                    <div className='about-us-image-sec'>
                        <img src={AboutUsRemoveBG} className='about-us-image' alt='About Us' />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About;
