import React from 'react';
import ContactWithMultiple from '../../Sheard/ContactWithMultiple/ContactWithMultiple';
import whatsappKeyCode from '../../../images/walink.png'

const WhatsappWithCall = () => {
    return (
        <div className='row py-4'>
            <div className="col-md-6">
                <p className='fs-4 fw-bold mb-0'>Message me on Whatsapp</p>
                <p className='fw-bold'>Ask fow Shawn</p>
                <div className='d-flex justify-content-center'>
                    <img style={{height: '18rem', width: 'auto'}} src={whatsappKeyCode} alt="" />
                </div>
            </div>
            <div className="col-md-6 p-md-4">
                <ContactWithMultiple/>
            </div>
        </div>
    );
};

export default WhatsappWithCall;