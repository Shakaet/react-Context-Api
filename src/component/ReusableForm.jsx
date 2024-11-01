import React from 'react';

const ReusableForm = ({title,submit="Submit",handleSubmit,children}) => {

    let handleLocalSubmit=(e)=>{
        e.preventDefault()
        let data={
            name:e.target.email.value,
            pass:e.target.password.value
        }

        handleSubmit(data)


    }
    return (
        <div>

            <form onSubmit={handleLocalSubmit}>

                <h2>{title}</h2>
                <h3>{children}</h3>
                <input type="email" name="email" id="" placeholder='email' /> <br />
                <input type="password" name="password" id="" placeholder='password'/> <br />
                <input type="submit" value={submit} /> <br />
            </form>
            
        </div>
    );
};

export default ReusableForm;