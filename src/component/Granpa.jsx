import React from 'react';
import Papa from './Papa';
import Uncle from './Uncle';
import Aunty from './Aunty';

const Granpa = () => {
    return (
        <div className='flex border border-2 p-5 m-40 rounded-lg justify-center'>
            <h2 className='flex justify-center'>GrandPa</h2>
            <div className='flex'>
            <Papa></Papa>
            <Uncle></Uncle>
            <Aunty></Aunty>

            </div>
            
        </div>
    );
};

export default Granpa;