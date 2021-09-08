import fire from './firebase';
import React, {useState,useEffect}from 'react'
import Register from './Components/Register'
import Home from './Components/Home'

import './App.css';

function App() {
  const [user,setUser]=useState("")
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [emailError,setEmailError]=useState("")
  const [passwordError,setPasswordError]=useState("")
  const [hasAccount,setHasAccount]=useState("")

  const clearInputs = () => {
    setEmail("")
    setPassword("")
    setFirstName("")
    setLastName("")
  }
  
  const clearErrors =() => {
    setEmailError("")
    setPasswordError("")
  }
    const handleLogin= () => {
      clearInputs()
      fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(err=> {
        switch(err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })
    }
  
    const handleSingup= () => {
      clearErrors()
      fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch(err=> {
        switch(err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })
    }
  
    const handleLogout = () => {
      fire.auth().signOut();
     
    }
  
    const authListener = () => {
      fire.auth().onAuthStateChanged((user) =>{
        if(user) {
          clearInputs()
          setUser(user)
        }else {
          setUser("")
        }
      })
    }
  
  
  
    useEffect(() => {
      authListener();
    },[])
  return (
    <div >
        {user ? ( 
   <Home firstName= {firstName} handleLogout= {handleLogout}/>  ): (
    
    <Register firstName= {firstName} lastName= {lastName} setFirstName= {setFirstName} setLastName= {setLastName}
    email= {email} password= {password}
    setEmail= {setEmail} setPassword= {setPassword}
    handleLogin= {handleLogin} handleSingup= {handleSingup}
    hasAccount= {hasAccount} setHasAccount= {setHasAccount}
    emailError= {emailError} passwordError= {passwordError}
  />
  )}
    </div>
  );
}

export default App;
