import React, { createContext, useState } from 'react';
import Papa from './Papa';
import Uncle from './Uncle';
import Aunty from './Aunty';

// 1. create a context and export it

// 2. Add Provider for the context with the value, value could be anything

//3. useContext to access value in the context API


export const LevelContext = createContext("gold");

export let MoneyContext=createContext(1000)



const Granpa = () => {

    let [money,setMoney]=useState(1000)

      

    let asset="Diamond"
    return (


        <div className='flex border border-2 p-5 m-40 rounded-lg justify-center'>

               <h1>Total Money={money}</h1>

            
            <h2 className='flex justify-center'>GrandPa</h2>
           <MoneyContext.Provider value={[money,setMoney]}>
           <LevelContext.Provider value='hira'>
            <div className='flex'>
       
            <Papa asset={asset}></Papa>
            <Uncle></Uncle>
            <Aunty></Aunty>

            </div>
            </LevelContext.Provider>
            
           </MoneyContext.Provider>
        </div>
    );
};

export default Granpa;