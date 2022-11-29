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
import AppliancesAndFix from './AppliancesAndFix/AppliancesAndFix';
import StoveRepairSection from './StoveRepairSection/StoveRepairSection';
import ProfesionalRepair from './ProfesionalRepair/ProfesionalRepair';

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
                    <div className="col-md-6 py-4 py-md-0">
                        <h2 className='for_font_family text-white'>We are fixing anything</h2>
                        <p className='text-white'>We always strive to provide the highest quality work to our customers</p>
                        <button onClick={handleQuate} className='btn quate_button_color text-white fw-bold'>Request a Quate</button>
                    </div>
                    <div className="col-md-6 d-flex p-md-5 jstify-content-center">
                        <img className='hero_image_style mx-auto m-4 m-md-0' src={heroImage} alt="LG-refrigerator-repair" />
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <ContactDirect/>
            <TabileWithCarosul/>
            <StoveRepairSection/>
            <WhatsappWithCall/>  
        </div>
        {/* Out Of container -------------------------------------------------- */}
            <div className='bg-dark py-5 my-5'><p className='text-white text-center fs-4 fw-bold for_font_family m-0 py-4 py-md-5'>Let's revive the appliances</p></div>
        <div className='container'>
            <AppliancesAndFix/>
            <ProfesionalRepair/>
            <PastRepairSection/>
            <ReviewSection/>
            <GoogleReview/>
        </div>
        </>
    );
};

export default Home;