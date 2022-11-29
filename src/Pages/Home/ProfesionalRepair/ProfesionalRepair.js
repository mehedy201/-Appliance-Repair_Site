import React from 'react';
import Carousel from 'react-multi-carousel';
import { useNavigate } from 'react-router-dom';
import profesionalRepairData from './ProfesionalRepairData.json'

const ProfesionalRepair = () => {

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
        <div className='row py-3 gx-3'>
            <div className="col-md-9">
                <div>
                    <Carousel 
                    responsive={responsive}
                    autoPlay={true}
                    infinite={true}
                    showDots={true}
                    >
                    {
                        profesionalRepairData.map(img => {
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
                    <p className='fs-4 fw-bold mb-2'>Professional <span style={{color: '#0073dd'}} className=' for_font_family'>Appliance</span> Repair</p>
                    {/* <p>Help is just a call away. Fast affordable reliable service in central NJ.</p> */}
                    <button onClick={handleQuate} className='btn quate_button_color text-white fw-bold mx'>Request a Quate</button>
                </div>
            </div>
        </div>
    );
};

export default ProfesionalRepair;