import React from 'react';
import './TabileWithCarosul.css';

const TabileWithCarosul = () => {
    return (
        <div className='row '>
            <p className='fs-4 fw-bold mb-0'>Services Category</p>
            <p>Also we are provide another services.</p>
            <div className="col-md-6 p-3">
                <div className='border'>
                    <p className='fs-6 my-0 py-2 border-bottom text-center'>Refrigerators</p>
                    <p className='fs-6 my-0 py-2 border-bottom text-center'>Washing Machines</p>
                    <p className='fs-6 my-0 py-2 border-bottom text-center'>Ovens</p>
                    <p className='fs-6 my-0 py-2 border-bottom text-center'>Dishwashers</p>
                    <p className='fs-6 my-0 py-2 border-bottom text-center'>Freezers</p>
                    <p className='fs-6 my-0 py-2 border-bottom text-center'>Dryers</p>
                    <p className='fs-6 my-0 py-2 text-center'>Icemakers</p>
                </div>
            </div>
            <div className="col-md-6">
                <p>Carosul</p>
            </div>
        </div>
    );
};

export default TabileWithCarosul;