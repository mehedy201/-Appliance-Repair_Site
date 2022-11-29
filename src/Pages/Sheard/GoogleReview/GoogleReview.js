import React from 'react';
import googleBusinessImage from '../../../images/google-my-business-logo.png'

const GoogleReview = () => {
    return (
        <div className='d-flex align-items-center justify-content-center pb-4'>
            <div className='d-inline border rounded p-2 px-5 hover_effect_button'>
                <img src={googleBusinessImage} style={{width: '40px', height: 'auto'}} alt="google-my-business" />
                <span className='ms-4 fs-6 text-dark fw-bold'>Google My Business</span>
            </div>
        </div>
    );
};

export default GoogleReview;