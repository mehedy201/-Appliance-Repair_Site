import React from 'react';
import './Home.css'
import heroImage from '../../images/fridges/LG-refrigerator-repair.jpeg'
import { useNavigate } from 'react-router-dom';
import ContactDirect from './ContactDirect/ContactDirect';
import TabileWithCarosul from './TabileWithCarosul/TabileWithCarosul';
import WhatsappWithCall from './WhatsappWithCall/WhatsappWithCall';
import GoogleReview from '../Sheard/GoogleReview/GoogleReview';
import ReviewSection from './ReviewSection/ReviewSection';
import PastRepairSection from './PastRepairSection/PastRepairSection';

const Home = () => {
    // useNavigate from react hooks 
    const navigate = useNavigate();
    // handle quate button
    const handleQuate = () => {
        navigate('/contact-us')
    }
    return (
        <>
        <div className='for_blur_background'>
            <div className='container'>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className='for_font_family text-white'>We are fixing anything</h2>
                        <p className='text-white'>We always strive to provide the highest quality work to our customers</p>
                        <button onClick={handleQuate} className='btn quate_button_color text-white fw-bold'>Request a Quate</button>
                    </div>
                    <div className="col-md-6 p-md-5 d-flex jstify-content-center">
                        <img className='hero_image_style' src={heroImage} alt="LG-refrigerator-repair" />
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <ContactDirect/>
            <TabileWithCarosul/>
            {/* <p className='fs-3 fw-bold'>Will Be new Section</p> */}
            <WhatsappWithCall/>
            <div className='bg-dark py-5 my-5'><p className='text-white text-center fs-4 fw-bold for_font_family m-0 py-4 py-md-5'>Let's revive the appliances</p></div>
            <PastRepairSection/>
            <ReviewSection/>
            <GoogleReview/>
        </div>
        </>
    );
};

export default Home;