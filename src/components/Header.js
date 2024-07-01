import React from 'react'
import Logo from '../components/Img/Netflix_Logo_PMS.png'
const Header = () => {
  return (
    <div className=" absolute bg-gradient-to-b from-black px-8 py-2 z-20">
      <img className="w-44" src={Logo} alt="Logo"></img>
    </div>
  )
}

export default Header
