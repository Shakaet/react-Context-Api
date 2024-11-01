import React, { useContext } from 'react';
import { LevelContext } from './Granpa';


const Special = ({asset}) => {
       

    let gift=useContext(LevelContext)
    
    return (
        <div className='border border-2 p-2 rounded-lg'>

            <h2>Special</h2>
            <p>{asset}</p>
            <p>{gift}</p>
            
        </div>
    );
};

export default Special;