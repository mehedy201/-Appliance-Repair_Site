import React from 'react';
import './TabileWithCarosul.css';
import refrigeratorData from './RefrigeratorData.json'
import Carousel from 'react-multi-carousel';

const TabileWithCarosul = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1 },
          items: 1
        }
    }
    return (
        <div className='row pb-4'>
            <div className="col-md-6 p-3 pe-md-5">
            <p className='fs-4 fw-bold mb-0'>Services Category</p>
            <p>Also we are provide another services.</p>
                <div className='border'>
                    <p className='fs-6 fw-bold my-0 py-2 border-bottom text-center'>Refrigerators</p>
                    <p className='fs-6 fw-bold my-0 py-2 border-bottom text-center'>Washing Machines</p>
                    <p className='fs-6 fw-bold my-0 py-2 border-bottom text-center'>Ovens</p>
                    <p className='fs-6 fw-bold my-0 py-2 border-bottom text-center'>Dishwashers</p>
                    <p className='fs-6 fw-bold my-0 py-2 border-bottom text-center'>Freezers</p>
                    <p className='fs-6 fw-bold my-0 py-2 border-bottom text-center'>Dryers</p>
                    <p className='fs-6 fw-bold my-0 py-2 text-center'>Icemakers</p>
                </div>
            </div>
            <div className="col-md-6 py-3 px-4 px-md-5">
            <p className='fs-4 fw-bold mb-3'><span style={{color: '#0073dd'}} className=' for_font_family'>Refrigerator</span> Appliance Repair.</p>
                <Carousel 
                        responsive={responsive}
                        autoPlay={true}
                        infinite={true}
                        showDots={true}
                        >
                        {
                            refrigeratorData.map(img => {
                                return (<div key={img.id.toString()} className='d-flex justify-content-center border p-2 rounded'>
                                            <img className='rounded shadow' style={{height: '330px', width: '100%'}} src={img.imageUrl} alt="" />
                                        </div>)
                                })
                        }
                    </Carousel>
            </div>
        </div>
    );
};

export default TabileWithCarosul;