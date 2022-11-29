import React from 'react';
import './Services.css'
import servicesData from './ServicesData.json'
import { RiFridgeLine } from 'react-icons/ri';
import { GiWashingMachine } from 'react-icons/gi';
import { GiChickenOven } from 'react-icons/gi';
import { FaHandsWash } from 'react-icons/fa';
import { GiBrainFreeze } from 'react-icons/gi';
import { MdLocalLaundryService } from 'react-icons/md';
import { GiCoolSpices } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import GoogleReview from '../Sheard/GoogleReview/GoogleReview';


const Services = () => {

    const navigate = useNavigate();
    const handleQuate = () => {
        navigate('/contact-us')
    }

    // Responsive Carousel Style -----------------------------
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <>
            <div className='services_page_background py-3'>
                <div className="container py-5 mt-3">
                    <h5 className='fs-2 for_font_family text-white'>Services</h5>
                    <p className='text-white'>We always strive to provide high quality service to the client.</p>
                </div>
            </div>
            <div className="container py-5">
                <p className='fs-3 fw-bold for_font_family'>We offer comprehensive diagnostic and repair services for <span style={{color: '#0073dd'}} className=' for_font_family'>any</span> home appliance</p>
                <ul>
                    <li className='fs-5 fw-bold'><RiFridgeLine className='servies_icon'/>Refrigerators</li>
                    <li className='fs-5 fw-bold'><GiWashingMachine className='servies_icon'/>Washing Machines</li>
                    <li className='fs-5 fw-bold'><GiChickenOven className='servies_icon'/>Ovens</li>
                    <li className='fs-5 fw-bold'><FaHandsWash className='servies_icon'/>Dishwashers</li>
                    <li className='fs-5 fw-bold'><GiBrainFreeze className='servies_icon'/>Freezers</li>
                    <li className='fs-5 fw-bold'><MdLocalLaundryService className='servies_icon'/>Dryers</li>
                    <li className='fs-5 fw-bold'><GiCoolSpices className='servies_icon'/>Icemakers</li>
                </ul>
                <div className='row py-5 gx-3'>
                    <div className="col-md-9">
                        <div>
                            <Carousel 
                            responsive={responsive}
                            autoPlay={true}
                            infinite={true}
                            showDots={true}
                            >
                            {
                                servicesData.map(img => {
                                    return (<div key={img.id.toString()} className='d-flex justify-content-center p-2 rounded'>
                                                <img className='rounded shadow' style={{height: '250px', width: '100%'}} src={img.imageUrl} alt={img.imgName} />
                                            </div>)
                                    })
                            }
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-center align-items-center bg-light rounded shadow">
                        <div className='bg-light p-3 rounded shadow'>
                            <p className='fs-4 fw-bold lh-1'>Past <span style={{color: '#0073dd'}} className=' for_font_family'>Repair</span> services</p>
                            <button onClick={handleQuate} className='btn quate_button_color text-white fw-bold mx'>Request a Quate</button>
                        </div>
                    </div>
                </div>
                <GoogleReview/>
            </div>
        </>
    );
};

export default Services;