import React from 'react';
import Carousel from 'react-multi-carousel';
import appliancesLogoImage from '../../../images/appliance repair 101 logo.png';
import appiancessWasharData from './AppiancessAndFixCarouselData.json'

const AppliancesAndFix = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1 },
          items: 1
        }
    }
    return (
        <div className='row py-5'>
            <div className="col-md-6 d-flex justify-content-center p-3 p-md-5">
                <img src={appliancesLogoImage} style={{height: 'auto', width: '100%'}} alt="" />
            </div>
            <div className="col-md-6">
                <p className='fs-4 fw-bold'>Let's fix the <span style={{color: '#0073dd'}} className=' for_font_family'>Washers</span> right way!</p>
                    <Carousel 
                        responsive={responsive}
                        autoPlay={true}
                        infinite={true}
                        showDots={true}
                        >
                        {
                            appiancessWasharData.map(img => {
                                return (<div key={img.id.toString()} className='d-flex justify-content-center border p-2 rounded'>
                                            <img className='mx-auto rounded shadow' style={{height: '350px', width: '100%'}} src={img.imageUrl} alt="" />
                                        </div>)
                                })
                        }
                    </Carousel>
            </div>
        </div>
    );
};

export default AppliancesAndFix;