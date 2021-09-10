import React from 'react'

function Register(props) {
  const {firstName, lastName, setFirstName, setLastName, email,password,setEmail,setPassword,handleLogin,handleSingup, hasAccount,setHasAccount, emailError,passwordError}=props
  return (
    <div>
      <h1>Register</h1>
      
      {/* <label>First Name</label>
      <input type="text" value= {firstName} onChange= {(e)=>setFirstName(e.target.value)} ></input>

      <label>Last Name</label>
      <input type="text" value= {lastName} onChange= {(e)=>setLastName(e.target.value)}></input> */}
      
      <label>Email</label>
      <input type="text" value= {email} onChange= {(e)=> setEmail(e.target.value)}></input>
      <p>{emailError}</p>

      <label>Password</label>
      <input type="password" value= {password} onChange= {(e)=> setPassword(e.target.value)}></input>
      <p>{passwordError} </p>

      <div>
        {hasAccount ? (
          <>
          <button onClick= {handleLogin}>Sign In</button>
          <p>Don't have an account ?<span onClick= {()=> setHasAccount(!hasAccount)}>Sign Up</span></p>
          </>
        ): ( <>
          <button onClick= {handleSingup}>Sign Up</button>
          <p>Have an account ?<span onClick= {()=> setHasAccount(!hasAccount)}>Sign in</span></p>
          </>)}
      </div>
    </div>
  )
}

export default Register
