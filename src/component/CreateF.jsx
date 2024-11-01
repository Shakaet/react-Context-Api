import React from 'react';

// 1. use form tag and onsubmit handler with event(e) from a access e.target.[name of the input feild].value,,, name to get values

// 2. controlled elements: use individual feild State for each input field

// 3. controlled elements:One object in a State holdings all the input feild values

// 4. uncontrolled elements:UseRef to create a reference to the element and access value by using like :nameRef.current.value


// => input e default value set korte hole value set korte hoy ar state ke string e rekhe korte hoy


const CreateF = () => {

    let handle=(e)=>{
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }
    return (
        <div>

            <form onSubmit={handle}>
                <input type="text" name='name' placeholder='name'/> <br />
                <input type="email" name="email" id="" placeholder='email'/> <br />

                {/* <button>Submit</button> */}
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default CreateF;