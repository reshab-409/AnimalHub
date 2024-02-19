import React, { useEffect } from 'react';
import '../../Compound/HOME/Home.css';
import '../../Compound/HOME/Home-Responsve.css';
import '../../Compound/BODY/ScrollBar.css';
import Banner from './BG-Banner/owner and there 0.png';
import Body from '../BODY/Body'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user has visited before
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
      // If it's the first visit, set the flag in localStorage and redirect to the profile page
      localStorage.setItem('hasVisited', 'true');
      navigate('/Profile'); // Adjust the path as per your actual profile page path
    } else {
      // window.location.reload();
      function reloadPage() {
        // The last "domLoading" Time //
        var currentDocumentTimestamp =
          new Date(performance.timing.domLoading).getTime();
        // Current Time //
        var now = Date.now();
        // Ten Seconds //
        var tenSec = 10 * 1000;
        // Plus Ten Seconds //
        var plusTenSec = currentDocumentTimestamp + tenSec;
        if (now > plusTenSec) {
          window.location.reload();
        } else { }
      }
      reloadPage();
    }
  }, [navigate]);


  return (
    <>
      <div className='Home-main' id='Home'>
        <div className="skewed">
          <div className="banner-image-sec">
            <div>
              <img src={Banner} className='image-banner' />
            </div>
          </div>
          <div className="banner-image-text-area">
            <small className='banner-company-headding'>Secure Haven</small>
            <h1 className='banner-headding'>Animal vision</h1>
            <div className='home-banner-para-sec'>
              <p className='banner-paragraph'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas cum id modi tenetur commodi
                voluptatibus architecto quisquam eligendi porro, eaque dolorum delectus, voluptates saepe laudantium
                quibusdam laboriosam sed et.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Body />
    </>
  );
};

export default Home;
