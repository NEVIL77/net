import   React, { useRef, useState }             from 'react'
import   Header                                  from "./Header"
import { NetBackGround }                         from '../utilit/photos';
import   Validation                              from '../utilit/Validation';
import { createUserWithEmailAndPassword ,
          signInWithEmailAndPassword,
          updateProfile }                        from "firebase/auth";
import { auth }                                  from '../utilit/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utilit/userSlice';

const Login = () => {

  const [isSignInForm, setIsSignInForm]  = useState(true)
  const [errorMessage, setErrorMessage]  = useState(null)
  const dispatch                         = useDispatch()

  const email    = useRef(null)
  const password = useRef(null)
  const name     = useRef(null)

  const handleButtonClick = () => {
    
    const message = Validation(email.current.value, password.current.value )
    setErrorMessage(message)

// if error
    if(errorMessage != null) return ;

  // not an error
    if(!isSignInForm){ // Sign Up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value,name.current.value)
        .then((userCredential) => {
                const user = userCredential.user;

                updateProfile(user, {   //user Profile Updating 
                  displayName: name.current.value,
                  photoURL: "https://img.freepik.com/free-photo/vertical-shot-cute-pug-gray-surface_181624-43437.jpg?t=st=1706079327~exp=1706079927~hmac=8922f63ba1ec86383ce81b13eedc4bc27f96ce3bfe0b7fb247e8348fead3529e"
                }).then(() => {
                  // Profile updated!
                  //Now navigate to Browse Page 
                  const {uid,email,displayName,photoURL} = user; // this is user object and it have data of uid,name,displayName like  
                  dispatch( addUser({ //add userData to Store
                    id          : uid,
                    email       : email,
                    displayName : displayName ,
                    photoURL    : photoURL 
                  }))
                  
                }).catch((error) => {
                  // An error occurred
                  setErrorMessage(error.message)
                });

                console.log( user )
              })
        .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log( errorCode + "-" + errorMessage)
              });
    }
    else{ // Sign In
      signInWithEmailAndPassword(auth, email.current.value, password.current.value,)
          .then((userCredential) => { // Sign in 
                  const user = userCredential.user;
                  console.log(user)
                })
          .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrorMessage( errorCode+ "-" +errorMessage ) 
          });
    }
  }
  const toggleSignInForm = () => { //signIn singUp Toggle
    setIsSignInForm(!isSignInForm)
  }


  return (
    <div className='h-screen flex flex-col relative'>
        <Header />
        <img
          className='flex-grow w-full object-cover'
          src={NetBackGround} alt='BackGround_Photo'
        />



        <form onSubmit={ (e)=> e.preventDefault() } className=' rounded-xl w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-75'>

          <h1 className='text-3xl font-bold py-4'> { isSignInForm ? "Sign In" : "Sign Up"} </h1>

          { !isSignInForm &&  <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-500 '/> }

          <input ref={email} type='text' placeholder='Email' className='p-4 my-4 w-full bg-gray-500 '/>
          <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-500'/>

          {/* error message display */}
          <p> {errorMessage} </p>

          <button 
              onClick={handleButtonClick}
            className='bg-red-700 p-4 my-4 w-full rounded-xl'>
              { isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p onClick={toggleSignInForm}
              className="cursor-pointer" >   
            { isSignInForm ? "New to Netflix ? Sing Up" : "Already Netflix User ? Sign In"}
          </p>

        </form>
    </div>
  )
}


export default Login 