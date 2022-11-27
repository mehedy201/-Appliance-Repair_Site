import React from 'react';
import './Home.css'
import heroImage from '../../images/fridges/LG-refrigerator-repair.jpeg'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    // useNavigate from react hooks 
    const navigate = useNavigate();
    // handle quate button
    const handleQuate = () => {
        navigate('/contact-us')
    }
    return (
        <div className='for_blur_background'>
            <div className='container'>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className='for_font_family text-white'>We are fixing anything</h2>
                        <p className='text-white'>We always strive to provide the highest quality work to our customers</p>
                        <button onClick={handleQuate} className='btn bg-info fw-bold'>Request a Quate</button>
                    </div>
                    <div className="col-md-6 p-md-5 d-flex jstify-content-center">
                        <img className='hero_image_style' src={heroImage} alt="LG-refrigerator-repair" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;