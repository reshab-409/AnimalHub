import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../Compound/BODY/Body.css';
import '../../Compound/BODY/Body-Responsive.css';

const Feedback = () => {
    const elementRef = useRef(null);

    useEffect(() => {
        if (elementRef.current) {
            elementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
        console.log(form.current)
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm('service_ld929li', 'template_ga5tohn', form.current, 'X8Ze2u86qIiQD_ut8')
            .then((result) => {
                alert("Your message is send to our representative")
                window.location.reload();
            }, (error) => {
                alert("Something went wrong")
            });
    };
    return (
        <div className='feedback' ref={elementRef}>
            <div className='feedback-main-sec' >
                <form ref={form} onSubmit={sendEmail} className='feedback-input-form-sec'>
                    <div className='feedback-main-store-sec'>
                        <div className='feedback-input-sec'>
                            {/* <input type='text' name='feedback' placeholder='Your Default Feedback' className='feedback-form-input' defaultValue='Default Feedback' /> */}
                        </div>
                        <div className='feedback-headding-sec'>
                            <h1 className='feedback-headding'>Enter Your Feedback</h1>
                        </div>
                        <div className='feedback-input-sec'>
                            <input type='text' name='name' placeholder='Enter Your Name' className='feedback-form-input' required />
                        </div>
                        <div className='feedback-input-sec'>
                            <input type='email' name='email' placeholder='Enter Your Email' className='feedback-form-input' required />
                        </div>
                        <div className='feedback-input-sec'>
                            <textarea id='message' name='message' placeholder='Enter Your message' className='feedback-form-textarea' required></textarea>
                        </div>
                        <div className='feedback-form-submit-sec'>
                            <input type='submit' value='Send' className='feedback-submit-button' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Feedback;
