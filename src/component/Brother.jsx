import React, { useContext } from 'react';
import { MoneyContext } from './Granpa';

const Brother = () => {

    let [money,setMoney] =useContext(MoneyContext)
    return (
        <div className='ml-3 border border-2 p-3'>

            <h1>Total Money={money}</h1>
            <h2>Hello Brother</h2>
            
        </div>
    );
};

export default Brother;