import React, { useContext } from 'react';
import Cousine from './Cousine';
import { MoneyContext } from './Granpa';


const Aunty = () => {

    let [money,setMoney]= useContext(MoneyContext)
    return (
        <div className='border border-2 p-5 m-5 rounded-lg'>

            <h2>Hello Aunty</h2>
            <div className='flex gap-5'>
                <Cousine name={"skt"}></Cousine>
                <Cousine name={"maisha"}></Cousine>
            </div>

            <p>{money}</p>
            <button className='border boder 2 p-2 rounded-lg bg-slate-600' onClick={()=>setMoney(money+1000)}>Add 1000 tk</button>
            
        </div>
    );
};

export default Aunty;