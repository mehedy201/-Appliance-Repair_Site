import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <>
            <div className='services_page_background py-3'>
                <div className="container py-5">
                    <h5 className='fs-2 for_font_family text-white'>Services</h5>
                    <p className='text-white'>We always strive to provide high quality service to the client.</p>
                </div>
            </div>
            <div className="container py-5">
                <p className='fs-3 fw-bold for_font_family'>We offer comprehensive diagnostic and repair services for <span style={{color: '#0073dd'}} className=' for_font_family'>any</span> home appliance</p>
                <ul>
                    <li className='fs-5 fw-bold'>Refrigerators</li>
                    <li className='fs-5 fw-bold'>Washing Machines</li>
                    <li className='fs-5 fw-bold'>Ovens</li>
                    <li className='fs-5 fw-bold'>Dishwashers</li>
                    <li className='fs-5 fw-bold'>Freezers</li>
                    <li className='fs-5 fw-bold'>Dryers</li>
                    <li className='fs-5 fw-bold'>Icemakers</li>
                </ul>
            </div>
        </>
    );
};

export default Services;