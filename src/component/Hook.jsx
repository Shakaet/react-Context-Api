import React from 'react';
import getCustomHook from './CustomHook';

const Hook = () => {

    let[name,handle]=getCustomHook("shakaet")
    let[email,handlee]=getCustomHook("s")

    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name)
        console.log(email)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handle} type="text" name="name" id="" placeholder='name' /><br />
                <input value={email} onChange={handlee} type="email" name="email" id=""  placeholder='email'/> <br />
                 <input type="password" name="password" id="" placeholder='password' /> <br />
                 <input className='btn border border-2 rounded' type="submit" value="Submit" />

                 </form>

                
            
        </div>
    );
};

export default Hook;