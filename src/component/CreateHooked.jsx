import React from 'react';
import UsedHooked from './UsedHooked';

const CreateHooked = () => {

    // let[value,handle]= UsedHooked('kaskalla')

    let emailState= UsedHooked("abd@gmail.com")


    let handleSubmit=(e)=>{


        e.preventDefault()
        // console.log(value)
        console.log(emailState.input)

    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                {/* <input value={value}  onChange={handle}  type="name" name="name" placeholder='name3'/> <br /> */}
                {/* <input {...emailState}  type="email" name="email" id="" placeholder='email' /> <br /> */}
                <input 
                    type="email" 
                    name="email" 
                    placeholder="email" 
                    value={emailState.input} // Set value from input state
                    onChange={emailState.handleOnchanged} // Set onChange handler
                /> 
                <input type="password" name="password" id=""placeholder='password' /> <br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default CreateHooked;