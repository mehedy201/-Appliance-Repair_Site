import { Rate } from 'antd';
import React from 'react';

const ReviewSection = () => {
    return (
        <div>
            <p className='fs-4 fw-bold m-0 pt-4 pb-2 text-center for_font_family'>How our past customers rate our service!</p>
            <div className="d-flex justify-content-center"><Rate disabled defaultValue={5} /></div>
            <div className='px-md-5'>
                <p className='px-4 text-center pb-5'>Shawn did an excellent job fixing my washer and would highly recommend. He has repaired my oven, my dishwasher and my refrigerator. Friendly service and very informative</p>
            </div>
        </div>
    );
};

export default ReviewSection;