import { useState } from "react"


let UsedHooked = (defaultValue=null)=>{

    let[input,setInput] = useState(defaultValue)

    let handleOnchanged=(e)=>{

     setInput(e.target.value)

    }

    // return [input,handleOnchanged]

    //return object

    return{
        input,
        handleOnchanged
    }


}
export default UsedHooked