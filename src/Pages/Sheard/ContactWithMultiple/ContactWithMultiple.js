import React from 'react';
import { Link } from 'react-router-dom';
import './ContactWithMultiple'
import { FiPhoneCall } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';

const ContactWithMultiple = () => {



    return (
        <div>
            <a className='d-block fw-bold my-3 my-md-4 btn border p-2 hover_effect_button' href="tel:+1-914-563-2299"><FiPhoneCall className='socil_icon_webpage' /> (914) 563 2299</a>
            <a className='d-block fw-bold my-3 my-md-4 btn border p-2 hover_effect_button' href="https://wa.link/wr7d2a" target='_blank' rel="noopener noreferrer"><ImWhatsapp className='socil_icon_webpage' /> +1 914-563-2299</a>
            <Link className='d-block fw-bold my-3 my-md-4 btn border p-2 hover_effect_button'  onClick={() => window.location = 'mailto:zeusfury79@gmail.com'}><MdEmail className='socil_icon_webpage' /> zeusfury79@gmail.com</Link>
            <a className='d-block fw-bold my-3 my-md-4 btn border p-2 hover_effect_button' href={'https://web.facebook.com/profile.php?id=100070967869502'} target={'_blank'} rel="noopener noreferrer"><FaFacebookF className='socil_icon_webpage' />Facebook</a>
            <a className='d-block fw-bold my-3 my-md-4 btn border p-2 hover_effect_button' href="https://www.instagram.com/appliance_repair_specialist_nj/" target={'_blank'} rel="noopener noreferrer"><AiOutlineInstagram className='socil_icon_webpage' />Instagram</a>
        </div>
    );
};

export default ContactWithMultiple;