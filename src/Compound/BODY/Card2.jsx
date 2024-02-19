import React from 'react';
import CardAdoption from './card-images/adopting animal.png';
import CardFoods from './card-images/peoples giving  1.png';
import CardCloths from './card-images/dog cloths imag 0.png';
import '../../Compound/BODY/Body.css';
import '../../Compound/BODY/Body-Responsive.css';
import { useNavigate } from 'react-router-dom';

const Card2 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="body-card-container">
                <div onClick={() => { navigate("/Shooping") }} className="card">
                    <img src={CardAdoption} alt='Animal Adoption' className='card-images' />
                    <div className='card-intro-sec'>
                        <div className='card-intro card-intro2'>
                            <div className='card-hedding-div'>
                                <h1 className='card-intro-heading'>Animal Adoption</h1>
                            </div>
                            <div className='card-para-div'>
                                <p className='card-intro-para'>
                                    <span className='card-intro-para-span'>Animal adoption</span>, is the
                                    compassionate act of providing a forever home to a shelter or rescue animal, offering
                                    them a
                                    second chance at life and a loving family while reducing the strain on animal welfare
                                    organizations and shelters.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div onClick={() => { navigate("/Shooping") }} className='card'>
                    <img src={CardFoods} alt='Animal Foods' className='card-images' />
                    <div className='card-intro-sec'>
                        <div className='card-intro card-intro2'>
                            <div className='card-hedding-div'>
                                <h1 className='card-intro-heading'>Animal Foods</h1>
                            </div>
                            <div className='card-para-div'>
                                <p className='card-intro-para'>
                                    <span className='card-intro-para-span'>Animal foods</span>, are specialized diets
                                    formulated to meet the nutritional requirements of various animals, ensuring their
                                    health,
                                    growth, and overall well-being. These foods encompass a broad spectrum, from pet food
                                    for
                                    dogs and cats to livestock feed for farm animals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div onClick={() => { navigate("/Shooping") }} className='card'>
                    <img src={CardCloths} alt='animal cloths' className='card-images' />
                    <div className='card-intro-sec'>
                        <div className='card-intro card-intro2'>
                            <div className='card-hedding-div'>
                                <h1 className='card-intro-heading'>Animal Cloths</h1>
                            </div>
                            <div className='card-para-div'>
                                <p className='card-intro-para'>
                                    <span className='card-intro-para-span'>Animal cloths</span>, refers to
                                    protective or decorative attire designed for animals, often used to keep them warm,
                                    comfortable, or enhance their visibility in specific roles such as working animals or
                                    pets.
                                    These garments can include items like coats, sweaters, and harnesses.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card2;
