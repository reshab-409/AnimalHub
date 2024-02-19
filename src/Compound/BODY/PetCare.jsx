import React from 'react';
import '../../Compound/BODY/Body.css';
import '../../Compound/BODY/Body-Responsive.css';

const PetCare = () => {
  return (
    <div>
       <div className='pet-sec'>
                <div className='pet-sec-container'>
                    <div className='pet-sec-row d_flex'>
                        <div className='col-md-6'>
                            <div className='pet-titlepage text_align_left'>
                                <span className='pet-titlepage-span'>Looking For a pet Care Center</span>
                                <h2 className='pet-titlepage-headding'>Find for Your <br /> Best Pet Care </h2>
                                <div className='pet-read-more-sec'>
                                    <a className='read_more' href='#'>Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default PetCare;
