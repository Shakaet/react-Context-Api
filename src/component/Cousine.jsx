import React, { useContext } from 'react';
import { LevelContext } from './Granpa';

const Cousine = ({name}) => {
    let gift=useContext(LevelContext)

    
    return (
        <div className='border border-2 mt-5 p-3 rounded-lg'>

            <h2>Cousine</h2>
            <p>{name}</p>
            {
                name==="maisha" &&  <p>{gift}</p>
            }
           


            
        </div>
    );
};

export default Cousine;