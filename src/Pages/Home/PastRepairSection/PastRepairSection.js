import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';

const PastRepairSection = () => {
    return (
        <div className='row py-5 align-items-center'>
            <div className="col-md-6">
                <p>Here will be carosul</p>
            </div>
            <div className="col-md-6">
                <p className='fs-4 fw-bold m-0'>Get your repair estimates upfront with no hidden costs.</p>
                <p className='fs-6 fw-bold m-0'>Flat rate, affordable Diagnostic <span className='text-info'>Fee: $80</span></p>
                <a className='fw-bold my-4 btn border-success p-2 text-success hover_effect_button' href="tel:+1-914-563-2299"><FiPhoneCall className='socil_icon_webpage' />Call Us: (914) 563 2299</a>
            </div>
        </div>
    );
};

export default PastRepairSection;