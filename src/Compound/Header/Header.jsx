import React from 'react';
import '../../Compound/Header/Header.css';
import '../../Compound/BODY/ScrollBar.css';
import '../../Compound/Header/Header-Responsive.css';
import logo from './Images/logo_fully_completed.png';
import { useState } from 'react';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { IoLogOutOutline } from 'react-icons/io5';
import { GiShoppingCart } from 'react-icons/gi';
import menu from '../Header/icons8-menu-24.png';
import close from '../Header/icons8-close-24.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNavigation = () => {
    setIsNavVisible(!isNavVisible);
  };

  const ScrollDown = () => {
    window.scrollTo(0, document.body.scrollHeight);
  }
  const Home = () => {
    window.scrollTo(0, 0);
    navigate("/")
  }
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.setItem("isLogin", false);
    window.location.reload();
    localStorage.removeItem('ProfileData');
    localStorage.removeItem('profilePicture');
    localStorage.removeItem('paymentMethod');
    localStorage.removeItem('cartData');
    localStorage.removeItem('hasVisited');
    localStorage.removeItem('currentUser');
  };

  return (
    <header className="primary-header flex">
      <div className="header-image-controls">
        <img src={logo} className="logo" alt="animal lover logo" />
        <span className='header-span-heading'>Secure Haven</span>
      </div>

      {!isNavVisible && <img onClick={toggleNavigation} className="toggle1" src={menu} alt="menu" />}
      {isNavVisible && <img onClick={toggleNavigation} className="toggle1" src={close} alt="menu" />}
      <nav className='Navbar'>
        <ul className="primary-navigation" id="navigation" data-visible={isNavVisible ? 'true' : 'false'}>

          <li className='nav-menu'>
            <a onClick={Home} className='nav-menu-link'>
              <span className="Nevbar-items" aria-hidden="true">Home</span>
            </a>
          </li>
          <li className='nav-menu'>
            <a href="#AboutUs" className='nav-menu-link'>
              <span className="Nevbar-items" aria-hidden="true">About</span>
            </a>
          </li>
          <li className='nav-menu'>
            <a onClick={ScrollDown} className='nav-menu-link'>
              <span className="Nevbar-items" aria-hidden="true">Contact Us</span>
            </a>
          </li>
          <li className='nav-menu'>
            <a onClick={() => { navigate("/Shooping") }} className='nav-menu-link'>
              <span className="Nevbar-items" aria-hidden="true">Shopping</span>
            </a>
          </li>
          <li className='nav-menu'>
            <a onClick={() => { navigate("/Support") }} className='nav-menu-link'>
              <span className="Nevbar-items" aria-hidden="true">Support</span>
            </a>
          </li>
          <li className='nav-menu'>
            <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" className="profile" />
            <ul className='nev-profile-menu'>
              <li onClick={() => { navigate("/Cart") }} className="sub-item">
                <GiShoppingCart className='material-icons' />
                <p className='nev-profile-menu-para'>Cart</p>
              </li>
              <li onClick={() => { navigate("/Profile") }} className="sub-item">
                <MdOutlineManageAccounts className='material-icons' />
                <p className='nev-profile-menu-para'>Profile</p>
              </li>
              <li className="sub-item">
                <IoLogOutOutline className='material-icons' />
                <p onClick={logout} className='nev-profile-menu-para'>Logout</p>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
