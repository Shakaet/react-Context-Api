import { useState } from "react"


let getCustomHook=(defaultValue=null)=>{

    let [value,setValue]=useState(defaultValue)

    let handleChange=(e)=>{
        setValue(e.target.value)

    }
    return [value,handleChange]

}
export default getCustomHook