import React, { useState } from 'react'

const SignIn = () => {

  const [currentState, setCurrentState] = useState('log in');
  const OnSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (

    <>
      <form onSubmit={OnSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
        </div>
        {currentState === "log in" ? '':<input type="text" className='w-full px-3 py-2 border border-gray-800 outline-none' placeholder='Name' required />}
        <input type="email" className='w-full px-3 py-2 border border-gray-800 outline-none' placeholder='Email' required />
        <input type="password" className='w-full px-3 py-2 border border-gray-800 outline-none' placeholder='Password' required/>
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your Password ?</p>

        {
          currentState === "log in" ? 
          <p  onClick={() =>setCurrentState('Sign up')} className='cursor-pointer'>creat account</p> : 
          <p onClick={() =>setCurrentState('log in')} className='cursor-pointer'>login here</p>
        }

        </div>
        <button className='bg-black text-white font-light text-sm mt-4 px-8 py-2 active:bg-gray-600'>{currentState === "log in" ? 'Sign In': 'Sign Up'}</button>
      </form>
    </>

  )
}

export default SignIn
