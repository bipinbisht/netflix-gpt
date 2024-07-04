import React, { useEffect, useRef } from 'react'
import Logo from '../components/Img/Netflix_Logo_PMS.png'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import user_avatar from './Img/user.png'
import { setToggleSearch } from '../utils/searchSlice'
import { SUPPORTED_LANGUAGES } from '../utils/constant'
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
  const toggle = useSelector((store) => store.gpt?.toggleSearch)
  const handleSearch = () => {
    console.log('inside handle search' + toggle)
    dispatch(setToggleSearch())
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
  }

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties

        const { uid, email, displayName, photoURL } = user

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        )
        navigate('/browse')
        // ...
      } else {
        // User is signed out
        // ..
        dispatch(removeUser())
        navigate('/')
      }
    })
    return () => unsubsribe()
  }, [])

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className=" w-screen absolute bg-gradient-to-b from-black px-8 py-2 z-20 flex justify-between  ">
      <img className="w-44" src={Logo} alt="Logo"></img>

      {user && (
        <div className="flex p-2">
          {toggle && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          {/* <img src={usr_icon} alt="usericon" className="w-10 h-10 my-2"></img> */}
          <button
            className="bg-blue-800 text-white mx-4 px-4  py-2 my-2 rounded-lg hover:opacity-80"
            onClick={handleSearch}
          >
            {toggle ? 'Home Page' : ' Search Movies?'}
          </button>
          <img
            src={user_avatar}
            alt="usericon"
            className="w-10 h-10 my-2"
          ></img>
          <button className="font-bold text-white mx-4" onClick={handleSignOut}>
            Sign Out
          </button>
          <p className="font-bold text-white py-4 font-serif">
            {user?.displayName}
          </p>
        </div>
      )}
    </div>
  )
}

export default Header
