import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmailSentSuccesfully = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/')
    }
    return (
        <div className='my-5'>
            <Result
                status="success"
                title="Successfully sent Email"
                subTitle="We are Contact with you very shortly"
                extra={[
                  <Button onClick={handleNavigate} >Go To Home Page</Button>,
                ]}
            />
        </div>
    );
};

export default EmailSentSuccesfully;