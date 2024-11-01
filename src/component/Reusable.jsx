import React from 'react';

const Reusable = ({formTitle,submit}) => {

    let handle=(e)=>{
        e.preventDefault()

    }
    return (
        <div>
              
             <form onSubmit={handle}>
                <h2>{formTitle}</h2>
                <input type="text" name='name' placeholder='name'/> <br />
                <input type="email" name="email" id="" placeholder='email'/> <br />

                {/* <button>Submit</button> */}
                <input type="submit" value={`${submit}`} />
            </form>
            
        </div>
    );
};

export default Reusable;