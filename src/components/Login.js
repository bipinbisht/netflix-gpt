import React, { useRef, useState } from 'react'
import { IMG_BG } from '../utils/constant'
import Header from './Header'
import { checkLoginForm } from '../utils/validate'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { addUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)
  const dispatch = useDispatch()
  //state
  const [isSignIn, setUpIsSignIn] = useState(true)

  //method
  const toggleSingnUpForm = () => {
    setErrorMessage(null)
    setUpIsSignIn(!isSignIn)
  }
  //method
  const handleSingnUpForm = () => {
    console.log(email.current.value, password.current.value)
    const error = checkLoginForm(email.current.value, password.current.value)
    setErrorMessage(error)
    if (error) return

    if (!isSignIn) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user
          console.log(user)
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              'https://avatars.githubusercontent.com/u/14077712?s=400&u=bfcc38c30285f0e0abaf777e27681360effb3e90&v=4',
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              )
              console.log('profile updated')
              navigate('/browse')
            })
            .catch((error) => {
              setErrorMessage(error.message)
            })
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setErrorMessage(errorCode + ' - ' + errorMessage)
          // ..
        })
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log(user)
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setErrorMessage(errorCode + ' - ' + errorMessage)
        })
    }
  }
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src={IMG_BG} alt="BG"></img>
      </div>
      <form
        className=" absolute w-3/12 mx-auto p-12 bg-black text-white my-36 left-0 right-0 opacity-80"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-800"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="email"
          className="p-4 my-4 w-full bg-gray-800"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800"
          ref={password}
        />
        <p className="py-2 text-red-500 font-bold text-sm ">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleSingnUpForm}
        >
          {isSignIn ? 'Login' : 'Sign Up'}
        </button>
        <p className="my-8 cursor-pointer" onClick={toggleSingnUpForm}>
          {isSignIn
            ? ' New to Netflix? Sign Up Now'
            : 'Already a user? Sign In now'}
        </p>
      </form>
    </div>
  )
}

export default Login
