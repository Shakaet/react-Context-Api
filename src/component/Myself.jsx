import React from 'react';
import Special from './Special';

const Myself = ({asset}) => {
    return (
        <div className='ml-3  border border-2 p-3'>

            <h2>Hello me</h2>
            <div>
                <Special asset={asset}></Special>
            </div>
            
        </div>
    );
};

export default Myself;