import React from 'react';
import  { DefaultToast } from 'react-toast-notifications';

const CustomDefaultToast = ({ children, ...props}) => (
    <DefaultToast {...props}>
        <div>
            <h1>{children}</h1>
        </div>
    </DefaultToast>
);

export default CustomDefaultToast;
