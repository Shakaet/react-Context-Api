import React, { useState } from 'react';

// 1. use form tag and onsubmit handler with event(e) from a access e.target.[name of the input feild].value,,, name to get values

// 2. controlled elements: use individual feild State for each input field

// 3. controlled elements:One object in a State holdings all the input feild values

// 4. uncontrolled elements:UseRef to create a reference to the element and access value by using like :nameRef.current.value

// 5. useHook to handle states and error.. example react hook form

//6. reusable components


// => input e default value set korte hole value set korte hoy ar state ke string e rekhe korte hoy

const StateForm = () => { 

    let[email,setEmail]=useState("Hello")
    let[password,setPass]=useState(null)

    let[error,setError]=useState(null)




    let handleSubmit=(e)=>{
        e.preventDefault()
        if(password.length<6){
            setError("PassWord Must Be 6 character")
        }
        else{
            setError("")
            console.log(email,password)

        }
        



    }

    let handleEmail=(e)=>{
        
        setEmail(e.target.value)


    }

    let handlePassword=(e)=>{
        setPass(e.target.value)

    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='name' /><br />
                <input value={email} onChange={handleEmail} type="email" name="email" id=""  placeholder='email'/> <br />
                 <input onChange={handlePassword} type="password" name="password" id="" placeholder='password' /> <br />
                 <input className='btn border border-2 rounded' type="submit" value="Submit" />

            </form>

            {
                error && <p>{error}</p>
            }
            
        </div>
    );
};

export default StateForm;