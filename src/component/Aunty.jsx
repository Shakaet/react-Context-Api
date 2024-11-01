import React from 'react';
import Cousine from './Cousine';

const Aunty = () => {
    return (
        <div className='border border-2 p-5 m-5 rounded-lg'>

            <h2>Hello Aunty</h2>
            <div className='flex gap-5'>
                <Cousine name={"skt"}></Cousine>
                <Cousine name={"maisha"}></Cousine>
            </div>
            
        </div>
    );
};

export default Aunty;