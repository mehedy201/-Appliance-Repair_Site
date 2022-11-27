import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../images/logo/wide logo.png'
import './NaviagtionMenu.css';
import { ImWrench } from 'react-icons/im';
import { ImPhone } from 'react-icons/im';


const NavigationMenu = () => {
    // UseNavigate import from React --------------------------------------------
    const navigate = useNavigate();
    // Handle Logo Click --------------------------------------------------------
    const logoClick = () =>{
        navigate('/')
    }

    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container">
                    <img onClick={logoClick} className='website_logo' src={logo} alt="Appliance Repair 101" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <div className="d-flex ms-auto">
                    <Link className='menu_text' style={{fontSize: '18px'}} to={'/services'}><ImWrench className='menu_text_icon'/>Services</Link>
                    <Link className='menu_text' style={{fontSize: '18px'}} to={'/contact-us'}><ImPhone className='menu_text_icon'/>Contact Us</Link>
                  </div>
                </div>
              </div>
            </nav>
    );
};

export default NavigationMenu;