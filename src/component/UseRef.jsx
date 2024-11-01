import React, { useEffect, useRef } from 'react';

// 1. use form tag and onsubmit handler with event(e) from a access e.target.[name of the input feild].value,,, name to get values

// 2. controlled elements: use individual feild State for each input field

// 3. controlled elements:One object in a State holdings all the input feild values

// 4. uncontrolled elements:UseRef to create a reference to the element and access value by using like :nameRef.current.value


// => input e default value set korte hole value set korte hoy ar state ke string e rekhe korte hoy

//=> 5. use hook to handle states and submit and error example react hook form

//=> 6. Reusable components

const UseRef = () => {

    let text= useRef(null)
    let pass=useRef(null)

    useEffect(()=>{
        text.current.focus()
    },[])


    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(text.current.value)
        console.log(pass.current.value)

    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input ref={text} defaultValue={"Shakaet"} type="text" name="" id="" placeholder='name'/> <br />
                <input ref={pass} type="password" name="" id="" placeholder='id' /> <br />
                <input type="submit" value="Submit" /> <br />
            </form>
            
        </div>
    );
};

export default UseRef;