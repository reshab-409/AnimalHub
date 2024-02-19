import React from 'react';
import CardMedication from './card-images/medications.png';
import CardDoctor from './card-images/doctors care.png';
import CardInjury from './card-images/injury animal.png';
import '../../Compound/BODY/Body.css';
import '../../Compound/BODY/Body-Responsive.css';
import { useNavigate } from 'react-router-dom';

const Card = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='body-card-container'>
                <div onClick={() => { navigate("/Shooping") }} className='card'>
                    <img src={CardMedication} alt='medications' className='card-images' />
                    <div className='card-intro-sec'>
                        <div className='card-intro'>
                            <div className='card-hedding-div'>
                                <h1 className='card-intro-heading'>Animal Medicine</h1>
                            </div>
                            <div className='card-para-div'>
                                <p className='card-intro-para'>
                                    <span className='card-intro-para-span'>Animal Medicine</span>, also known as veterinary medicine, is the field of healthcare that focuses on the diagnosis, treatment, and prevention of illnesses and injuries in animals, ranging from pets to livestock and wildlife, to ensure their well-being and health.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div onClick={() => { navigate("/Shooping") }} className='card'>
                    <img src={CardDoctor} alt='doctors care' className='card-images' />
                    <div className='card-intro-sec'>
                        <div className='card-intro'>
                            <div className='card-hedding-div'>
                                <h1 className='card-intro-heading'>Doctors Care</h1>
                            </div>
                            <div className='card-para-div'>
                                <p className='card-intro-para'>
                                    <span className='card-intro-para-span'>Animal Doctors</span>, often referred to as
                                    veterinarians,
                                    provide comprehensive healthcare services to animals, including medical examinations,
                                    vaccinations, surgeries, and personalized care to promote their health and well-being.
                                    They
                                    play
                                    a crucial role in ensuring the welfare of pets, livestock, and wildlife.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div onClick={() => { navigate("/ContactUs") }} className='card'>
                    <img src={CardInjury} alt='injury animal' className='card-images' />
                    <div className='card-intro-sec'>
                        <div className='card-intro'>
                            <div className='card-hedding-div'>
                                <h1 className='card-intro-heading'>Animal Rescue Teams</h1>
                            </div>
                            <div className='card-para-div'>
                                <p className='card-intro-para'>
                                    <span className='card-intro-para-span'>Animal Rescue Teams</span>, are dedicated groups of
                                    individuals
                                    and professionals who respond to emergencies and disasters to save and care for animals
                                    in
                                    distress,
                                    providing critical support for pets, wildlife, and livestock during natural disasters,
                                    accidents,
                                    and other crisis situations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
