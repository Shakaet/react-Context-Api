import React, { useEffect, useRef, useState } from 'react';

const Form_by_Name_Onchange_Error = () => {


    let email=useRef(null)

    let [text,setText]= useState("hello")
    let [password,setpassword]= useState(null)
    let [error,setError]= useState(null)

    let handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(e.target.text.value)

        if(password.length<6){
            setError("Password must me 6 character")
            
        }
        else{
            setError("")
            console.log(email.current.value)
            console.log(text,password)
        }

        


    }

    useEffect(()=>{
        email.current.focus()
    },[])

    let handleInput=(e)=>{
        setText(e.target.value)

    }

    let handlePass=(e)=>{
        setpassword(e.target.value)
    }
    return (
        <div className='flex flex-col justify-center'>


            <form onSubmit={handleSubmit}className='flex flex-col justify-center'>
                <input value={text} onChange={handleInput} type="text" name="text" id="" placeholder='name'className=' border border-2'/> <br />
                <input ref={email} defaultValue={"abd"} type="email" name="" id="" placeholder='email'/>
                <input onChange={handlePass} type="password" name="pass" id="" placeholder='password'className=' border border-2'/> <br />
                <input type="submit" value="Submit" className='text-yellow-500' />
            </form>

            {
                error && <p>{error}</p>
            }
            
        </div>
    );
};

export default Form_by_Name_Onchange_Error;