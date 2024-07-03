import React, { useEffect } from 'react'
import Logo from '../components/Img/Netflix_Logo_PMS.png'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import user_avatar from './Img/user.png'
const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
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

  return (
    <div className=" w-screen absolute bg-gradient-to-b from-black px-8 py-2 z-20 flex justify-between  ">
      <img className="w-44" src={Logo} alt="Logo"></img>

      {user && (
        <div className="flex p-4">
          {/* <img src={usr_icon} alt="usericon" className="w-10 h-10 my-2"></img> */}
          <img
            src={user_avatar}
            alt="usericon"
            className="w-10 h-10 my-2"
          ></img>

          <button className="font-bold text-white mx-4" onClick={handleSignOut}>
            Sign Out
          </button>
          <p className="font-bold text-white py-4">{user?.displayName}</p>
        </div>
      )}
    </div>
  )
}

export default Header
