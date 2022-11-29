import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../../images/wide logo.png';
import './FooterSection.css';
import { FiPhoneCall } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';

const FooterSection = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    <img src={footerLogo} className='footer_logo_style' alt="" />
                    <h5>We can fix anything</h5>
                </div>
                <div className="col-md-4">
                    <h5 className='for_font_family'>Menu</h5>
                    <Link className='footer_menu_text' to={'/'}>Home</Link>
                    <Link className='footer_menu_text' to={'/services'}>Services</Link>
                    <Link className='footer_menu_text' to={'/contact-us'}>Contact Us</Link>
                </div>
                <div className="col-md-4">
                    <h5 className='for_font_family'>Connect With Social</h5>
                    <p>I am always Active in Social media. I will try to response as soon as posible</p>
                    <a href="tel:+1-877-538-5888"><FiPhoneCall className='socil_icon_footer social_icon_footer_hover_dial' /></a>
                    <a href="https://wa.link/wr7d2a" target='_blank' rel="noopener noreferrer"><ImWhatsapp className='socil_icon_footer social_icon_footer_hover_whatsapp' /></a>
                    <Link  onClick={() => window.location = 'mailto:zeusfury79@gmail.com'}><MdEmail className='socil_icon_footer social_icon_footer_hover_email' /></Link>
                    <a href={'https://web.facebook.com/profile.php?id=100070967869502'} target={'_blank'} rel="noopener noreferrer"><FaFacebookF className='socil_icon_footer social_icon_footer_hover_facebook' /></a>
                    <a href="https://www.instagram.com/appliance_repair_specialist_nj/" target={'_blank'} rel="noopener noreferrer"><AiOutlineInstagram className='socil_icon_footer social_icon_footer_hover_instagram' /></a>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;