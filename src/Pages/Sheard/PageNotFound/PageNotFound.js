import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/')
    }
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button onClick={handleNavigate} type="primary">Back Home</Button>}
            />
        </div>
    );
};

export default PageNotFound;