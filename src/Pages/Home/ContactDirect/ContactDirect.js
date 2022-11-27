import { Divider } from 'antd';
import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './ContactDirect.css'

const ContactDirect = () => {
    return (
        <div className='my-4 py-md-4'>
            <h1 className='fs-4 fw-bold text-center mb-0'>The best home appliance repairs service in the neighborhood!</h1>
            <div className='w-50 mx-auto'><Divider className='mb-0 mt-2'/></div>
            <div className='d-flex justify-content-center'>
                <a className=' fw-bold my-4 btn border mx-2 py-2 px-4 hover_effect_button' href="tel:+1-877-538-5888"><FiPhoneCall className='socil_icon_webpage' /> Call</a>
                <a className=' fw-bold my-4 btn border mx-2 py-2 px-4 hover_effect_button' href="https://wa.link/wr7d2a" target='_blank' rel="noopener noreferrer"><ImWhatsapp className='socil_icon_webpage' />Whatsapp</a>
                <Link className=' fw-bold my-4 btn border mx-2 py-2 px-4 hover_effect_button'  onClick={() => window.location = 'mailto:zeusfury79@gmail.com'}><MdEmail className='socil_icon_webpage' />Email</Link>
            </div>
        </div>
    );
};

export default ContactDirect;