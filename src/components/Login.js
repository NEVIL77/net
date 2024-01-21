import React, { useState } from 'react'
import Header from "./Header"
import { NetBackGround } from '../utilit/photos';

const Login = () => {

  const [isSignInForm ,setIsSignInForm] = useState(true)

  const handle = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div className='h-screen flex flex-col relative'>
        <Header />
        <img
          className='flex-grow w-full object-cover'
          src={NetBackGround} alt='BackGround_Photo'/>

        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-75'>

          <h1 className='text-3xl font-bold py-4'> { !isSignInForm ? "Sign In" : "Sign Up"} </h1>

          { isSignInForm &&  <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-500 '/> }

          <input type='text' placeholder='Username' className='p-4 my-4 w-full bg-gray-500 '/>
          <input type='text' placeholder='Password' className='p-4 my-4 w-full bg-gray-500'/>

          <button 
            className='bg-red-700 p-4 my-4 w-full'>
              { !isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p onClick={handle}
              className="cursor-pointer" >   
            { !isSignInForm ? "New to Netflix ? Sing Up" : "Already Netflix User ? Sign In"}
          </p>

        </form>
    </div>
  )
}


export default Login 