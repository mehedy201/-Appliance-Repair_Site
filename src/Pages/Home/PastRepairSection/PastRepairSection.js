import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import pastJobImages from './PastJobImages.json'
import Carousel from 'react-multi-carousel';

const PastRepairSection = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1 },
          items: 1
        }
    }
    
    return (
        <div className='row py-5 align-items-center'>
            <div className="col-md-6 px-4">
                <p className='fs-4 fw-bold mb-0'>Past Repair <span style={{color: '#0073dd'}} className=' for_font_family'>Jobs</span></p>
                <p className='fs-6 fw-bold'>At home kitchen appliance technicians</p>
                    <Carousel 
                        responsive={responsive}
                        autoPlay={true}
                        infinite={true}
                        >
                        {
                            pastJobImages.map(img => {
                                return (<div key={img.id.toString()} className='d-flex justify-content-center border p-2 rounded'>
                                            <img className='mx-auto rounded shadow' style={{height: '350px', width: '100%'}} src={img.imageUrl} alt="" />
                                        </div>)
                                })
                        }
                    </Carousel>
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