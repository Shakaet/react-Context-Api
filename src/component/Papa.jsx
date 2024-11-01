import React from 'react';
import Myself from './Myself';
import Brother from './Brother';
import Sister from './Sister';

const Papa = () => {
    return (
        <div className='border border-2 p-5 m-5 rounded-lg'>

            <h2>Hello Papa</h2>
            <div className='flex m-5'>
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </div>
            
        </div>
    );
};

export default Papa;