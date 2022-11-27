import React from 'react';
import './TabileWithCarosul.css';

const TabileWithCarosul = () => {
    return (
        <div className='row my-4'>
            <p className='fs-4 fw-bold mb-0'>Services Category</p>
            <p>Also we are provide another services.</p>
            <div className="col-md-6 p-3">
                <table className='table_style'>
                    <tr className='table_row_style'><p className='fs-6 my-2'>Refrigerators</p></tr>
                    <tr className='table_row_style'><p className='fs-6 my-2'>Washing Machines</p></tr>
                    <tr className='table_row_style'><p className='fs-6 my-2'>Ovens</p></tr>
                    <tr className='table_row_style'><p className='fs-6 my-2'>Dishwashers</p></tr>
                    <tr className='table_row_style'><p className='fs-6 my-2'>Freezers</p></tr>
                    <tr className='table_row_style'><p className='fs-6 my-2'>Dryers</p></tr>
                    <tr className='table_row_style'><p className='fs-6 my-2'>Icemakers</p></tr>
                </table>
            </div>
            <div className="col-md-6">
                <p>Carosul</p>
            </div>
        </div>
    );
};

export default TabileWithCarosul;