
import './App.css'
import CreateHooked from './component/CreateHooked'
import Form_by_Name_Onchange_Error from './component/Form_by_Name_Onchange_Error'
import Granpa from './component/Granpa'
import Hook from './component/hook'
import Reusable from './component/Reusable'
import ReusableForm from './component/ReusableForm'
import UseRef from './component/UseRef'

// import CreateF from './component/Cr
// import StateForm from './component/StateForm'
// import UseRef from './component/UseRef'

function App() {


  let handleSingUpSubmit =(data)=>{
   
    console.log(data)

  }
  let handleUpdatedSubmit =(data)=>{
    console.log(data)

  }
  

  return (
    <>
      
        
      
      <h1>Form Master</h1>
      {/* <CreateF></CreateF> */}

      {/* <StateForm></StateForm> */}
      {/* <UseRef></UseRef> */}
      

      {/* <Hook></Hook> */}

      {/* <Reusable formTitle={"sign up"} submit={"sign up"}></Reusable>
      <Reusable formTitle={"login"} submit={"login"}></Reusable> */}

      {/* <Form_by_Name_Onchange_Error></Form_by_Name_Onchange_Error>
      <CreateHooked></CreateHooked> */}

      {/* <ReusableForm title={"Sign Up Now"} submit={"sign up"} handleSubmit={handleSingUpSubmit} >
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign Up</p>
        </div>
      </ReusableForm>
      <ReusableForm title={"Updated Profile Now"} submit={"update"} handleSubmit={handleUpdatedSubmit}>
      <div>
          <h2>Updated Profile</h2>
          <p>Please Do Profile Update</p>
        </div>
      </ReusableForm> */}

      <Granpa></Granpa>
     
      
      
    </>
  )
}

export default App
