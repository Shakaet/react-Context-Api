import React from 'react';
import Cousine from './Cousine';

const Uncle = () => {
    return (
        <div className='border border-2 p-5 m-5 rounded-lg'>

            <h2>Hello Uncle</h2>

            <div className='flex gap-5'>
                <Cousine name={"rafsan"}></Cousine>
                <Cousine name={"layla"}></Cousine>
            </div>
            
        </div>
    );
};

export default Uncle;