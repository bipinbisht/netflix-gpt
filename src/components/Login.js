import React, { useState } from 'react'
import { IMG_BG } from '../utils/constant'
import Header from './Header'
const Login = () => {
  const [isSignIn, setUpIsSignIn] = useState(true)
  const handleSingnUpForm = () => {
    setUpIsSignIn(!isSignIn)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={IMG_BG} alt="BG"></img>
      </div>
      <form className=" absolute w-3/12 mx-auto p-12 bg-black text-white my-36 left-0 right-0 opacity-80">
        <h1 className="text-3xl font-bold py-4">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input
          type="email"
          placeholder="email"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignIn ? 'Login' : 'Sign Up'}
        </button>
        <p className="my-8 cursor-pointer" onClick={handleSingnUpForm}>
          {isSignIn
            ? ' New to Netflix? Sign Up Now'
            : 'Already a user? Sign In now'}
        </p>
      </form>
    </div>
  )
}

export default Login
